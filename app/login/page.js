"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  // from state
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  // login response state
  const [response, setResponse] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState("");

  // otp state
  const [sendingOtp, setSendingOtp] = useState(false);
  const [optResponse, setOtpResponse] = useState({});

  const router = useRouter();

  function handleEmailChange(e) {
    setMessage("");
    setEmail(e.target.value);
  }

  function handleOtpChange(e) {
    setMessage("");
    setOtp(e.target.value);
  }

  function handleOtpSend() {
    if (!email) {
      return setMessage("Enter valid email");
    }

    async function sendOtp() {
      setSendingOtp(true);
      const response = await fetch(
        `https://api.ignoubackbenchers.com/otp/?email=${encodeURIComponent(
          email
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setSendingOtp(false);
        setOtpResponse(data);
      } else {
        setSendingOtp(false);
        return setMessage(data.message);
      }
    }
    sendOtp();
  }

  async function handleSubmit(e) {
    if (otp.length < 6 || otp.length > 6) {
      return setMessage("Otp Length Should be 6 digits");
    }
    e.preventDefault();
    setMessage("");
    if (!email || !otp) {
      setMessage("Kindly fill all the required details");
    } else {
      setIsLoading(true);
      const data = await fetch("https://api.ignoubackbenchers.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, otp: otp }),
        credentials: "include",
      });

      const jsonData = await data.json();
      setResponse(jsonData);

      if (jsonData.status == "true") {
        const timeId = setTimeout(() => {
          if (router) {
            router.replace("/");
          }
        }, 1000000);
        setId(timeId);
      }
    }
  }

  useEffect(() => {
    if (response?.status == "true") {
      setIsLoading(false);
      setMessage("Success. Redirecting to your home page...");
    } else if (response?.status == "false") {
      setIsLoading(false);
      setMessage("Wrong Otp");
    }
    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
  }, [response]);

  useEffect(() => {
    // Function to check if the token is valid
    async function verifyToken() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://ignou-backend-sikx.onrender.com/verify-token",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // Send cookies with the request
          }
        );

        const data = await response.json();

        if (response.ok) {
          // Token is valid, you can redirect the user or update state
          setMessage("Login success, Redirecting...");
          setIsLoading(false);
          // Redirect to home page or dashboard
          router.push("/"); // Example redirect
        } else {
          // Token is invalid or expired, stay on login page
          setMessage("Please log in.");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setMessage("Error verifying token.");
        setIsLoading(false);
      }
    }

    verifyToken();
  }, []);

  return (
    <div className="login px-[300px] mt-[7%] mb-[80px] xs:px-[30px]">
      <h1>Login/Signup</h1>
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
          onClick={() => {
            handleOtpSend();
          }}
          className="text-green-700 cursor-pointer  text-end ml-[500px]"
        >
          {sendingOtp === false && optResponse.status != "true"
            ? "Send Otp"
            : ""}
          {sendingOtp === true ? "Sending Otp" : ""}
          {optResponse.status == "true" ? "Otp Sent" : ""}
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
            response.status == "true"
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
