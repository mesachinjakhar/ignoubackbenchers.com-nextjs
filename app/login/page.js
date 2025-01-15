"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [response, setResponse] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState("");

  const router = useRouter();

  function handleEmailChange(e) {
    setMessage("");
    setEmail(e.target.value);
  }

  function handleOtpChange(e) {
    setMessage("");
    setOtp(e.target.value);
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
      const data = await fetch(
        "https://testingbyignou.azurewebsites.net/api/test?code=PdubVYXcgHTB8iVEuxV7TGUkODuWoBLhdQJIHDyaX9QkAzFuETwK0A%3D%3D&name=sachin"
      );
      const jsonData = await data.json();
      setResponse(jsonData);
      const timeId = setTimeout(() => {
        if (router) {
          router.replace("/");
        }
      }, 1000);
      setId(timeId);
    }
  }

  useEffect(() => {
    if (response?.status === "true") {
      setMessage("Success. Redirecting to your home page...");
    } else if (response?.status === "false") {
      setIsLoading(false);
      setMessage("Wrong Otp");
    }
    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
  }, [response]);

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
