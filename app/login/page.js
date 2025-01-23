"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sendOtp, verifyToken, loginUser } from "@/helpers/apiHelpers";

const Login = () => {
  // Form state
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  // Login response state
  const [loginResponse, setLoginResponse] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState("");

  // Otp state
  const [sendingOtp, setSendingOtp] = useState(false);

  // Router to navigate/redirect user
  const router = useRouter();

  // state handler for email
  function handleEmailChange(e) {
    setMessage("");
    setEmail(e.target.value);
  }

  // state handle for otp
  function handleOtpChange(e) {
    setMessage("");
    setOtp(e.target.value);
  }

  // fn to redirect after 5 seconds
  const delayThreeSeconds = () => {
    const id = () => {
      setTimeout(() => {
        router.push("/");
      }, 1000);
    };
    setTimeoutId(id);
  };

  // Fn to send otp
  async function handleOtpSend() {
    // check if email is present
    if (!email) {
      return setMessage("Enter valid email");
    }
    setSendingOtp(true);
    // send otp
    const response = await sendOtp(email);

    // check otp response
    if (response.status) {
      setSendingOtp(false);
      return setMessage("Otp sent successfully");
    } else {
      setSendingOtp(false);
      return setMessage(response.error);
    }
  }

  // Fn to submit login form
  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      return setMessage("Enter valid email");
    }
    if (otp.length < 6 || otp.length > 6) {
      return setMessage("Otp Length Should be 6 digits");
    }
    setMessage("");
    if (!email || !otp) {
      return setMessage("Kindly fill all the required details");
    }

    setIsLoading(true);
    const response = await loginUser(email, otp);
    if (response.status) {
      setIsLoading(false);
      setLoginResponse({ status: true });
      delayThreeSeconds();
    } else {
      setIsLoading(false);
      setLoginResponse({ status: false });
    }
  }

  // Update response state
  useEffect(() => {
    if (loginResponse?.status == true) {
      setIsLoading(false);
      setMessage("Success. Redirecting to your home page...");
    } else if (loginResponse?.status == false) {
      setIsLoading(false);
      setMessage("Wrong Otp");
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [loginResponse]);

  //Check if user already logged in
  useEffect(() => {
    console.log("token use effect called");
    const verfiyToken = async () => {
      console.log("calling api");
      const response = await verifyToken();
      console.log("token response: ", response);
      if (response.status) {
        setLoginResponse({ status: true });
        delayThreeSeconds();
      }
      return;
    };
    verfiyToken();
  }, []);

  return (
    <div className="login px-[300px] mt-[7%] mb-[80px] xs:px-[30px]">
      <h1>Login OR Signup</h1>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        {/* Email Field */}
        <label htmlFor="email">Enter Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@domain.com"
          required
        />

        <p
          onClick={handleOtpSend}
          className="text-green-700 cursor-pointer  text-end"
        >
          {sendingOtp === true ? "Sending Otp" : "Send Otp"}
        </p>

        {/* OTP Field */}

        <label htmlFor="otp">OTP:</label>
        <input
          type="text"
          id="otp"
          name="otp"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter 6-digit OTP"
          pattern="\d{6}"
          title="OTP must be exactly 6 digits"
          required
        />
        <p
          style={
            loginResponse.status == true
              ? { color: "green", fontSize: 20 }
              : { color: "red", fontSize: 20 }
          }
        >
          {message}
        </p>

        <p>
          By continuing, you agree to our{" "}
          <span>
            <Link className="text-green-500" href={"/terms-conditions"}>
              T&C{" "}
            </Link>
          </span>
          <span>and </span>
          <span>
            <Link className="text-green-500" href={"/privacy-policy"}>
              Privacy Policy
            </Link>
          </span>
          .
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[100%] mt-4"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading == true ? "Please wait..." : "Continue"}
        </button>
      </form>
    </div>
  );
};

export default Login;
