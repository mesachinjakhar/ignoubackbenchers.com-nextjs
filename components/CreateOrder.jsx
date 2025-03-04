"use client";

import Script from "next/script";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { validateForm } from "@/helpers/validation";
import { generateSessionId } from "@/utils/sessionId";
import { createOrder, loginUser, sendOtp } from "@/helpers/apiHelpers";
import { useRouter } from "next/navigation";

const CreateOrder = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    medium: "",
    email: "",
    programme: "",
    numberOfAssignments: "",
    assignmentCodes: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track if the form has been submitted
  const [error, setError] = useState(""); // Error message
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [orderDetails, setOrderDetailes] = useState({});

  const router = useRouter();

  // Generate session id
  useEffect(() => {
    const response = generateSessionId();
    setSessionId(response.data.sessionId);
  }, []);

  // Ref for the order form container
  const orderFormRef = useRef(null);

  // Scroll to the order form container when the step changes, but only if the form has been submitted
  useEffect(() => {
    if (isFormSubmitted && orderFormRef.current) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0; // Get the header height
      const elementTop =
        orderFormRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - headerHeight - 20, // Adjust with a margin if needed
        behavior: "smooth",
      });
    }
  }, [step, isFormSubmitted]);

  const handleConversion = () => {
    console.log("handle conversion called");
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16878384589/dxaSCNCe2aUaEM3rnvA-",
        value: 1.0,
        currency: "INR",
        event_callback: () => {
          console.log("Conversion event sent!");
        },
      });
    }
  };

  // Try to lgging user using otp
  const loginDuringOrder = async (email, otp) => {
    const loginResult = await loginUser(email, otp);
    if (loginResult.status) {
      handlePlaceOrderWithOtp(orderDetails);
    } else {
      setError(loginResult.error);
    }
  };

  // Try to place order again after login success
  const handlePlaceOrderWithOtp = (orderDetails) => {
    async function creatingOrder() {
      setIsLoading(true); // setIsLoading("true");
      const response = await createOrder(orderDetails);
      if (response.status) {
        setResponse("Order placed successfully");
        setSessionId("");
        router.push("/my-orders");
        return setIsLoading(false);
      } else {
        setResponse(response.error);
        return setIsLoading(false);
      }
    }
    creatingOrder();
  };

  // Continue button handler
  const handleContinue = (e) => {
    e.preventDefault(); // Prevent form submission
    const form = e.target.closest("form");

    const response = validateForm(form);
    // Validate form before proceeding to next step
    if (!response.status) {
      setError(response.error);
      return; // Prevent form submission if validation fails
    }

    setFormData({
      sessionId: sessionId,
      medium: form.medium.value,
      email: form.email.value,
      programme: form.programme.value,
      numberOfAssignments: form.assignments.value,
      assignmentCodes: form.codes.value,
    });
    setError("");
    setStep(2); // Move to the second step
    setIsFormSubmitted(true); // Mark that the form has been submitted
  };

  // Place Order Handler
  const handlePlaceOrder = (e) => {
    setError("");
    e.preventDefault();
    handleConversion();

    setResponse("");

    const form = e.target.closest("form");

    // check if otp show is true and value is present
    if (showOtpInput) {
      if (!form.otp.value) {
        return setError("Enter Otp");
      }
      return loginDuringOrder(formData.email, form.otp.value); // Call loging handler
    }

    if (!sessionId) {
      return setError("Order already placed. Refresh page to order again");
    }

    if (!form.address.value || !form.pincode.value || !form.mobile.value) {
      return setError("Enter all the required details");
    }

    if (form.mobile.value.length != 10) {
      return setError(
        "Number should be of 10 digits. If your number is +918354993958 then enter 8354993958"
      );
    }

    const orderDetails = {
      ...formData,
      page: form.page.value,
      session: form.session.value,
      name: form.fullName.value,
      mobile: form.mobile.value,
      address: form.address.value,
      pincode: form.pincode.value,
    };

    setOrderDetailes(orderDetails);

    async function creatingOrder() {
      setIsLoading(true); // setIsLoading("true");
      const response = await createOrder(orderDetails);
      if (response.status) {
        setResponse("Order placed successfully");
        setSessionId("");
        router.push("/my-orders");
        return setIsLoading(false);
      }
      if (response.error === "Token invalid") {
        const otpResponse = await sendOtp(orderDetails.email);
        if (otpResponse.status) {
          console.log("login response true");
          setIsLoading(false);
          setShowOtpInput(true);
        } else {
          setError("Error sending Otp");
        }
      } else {
        setResponse(response.error);
        return setIsLoading(false);
      }
    }
    creatingOrder();
  };

  const handleGoBack = () => setStep(1); // Return to the first step

  return (
    <div className="order p-0 px-[200px] mb-[80px] mt-6 xs:px-[30px]">
      {/* Add conversion tracking script */}
      <Script id="google-conversion" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-16878384589/dxaSCNCe2aUaEM3rnvA-',
                'value': 1.0,
                'currency': 'INR',
                'event_callback': callback
            });
            return false;
          }
        `}
      </Script>
      <h2 className="text-4xl text-green-600 text-center xs:text-2xl">
        From Rs.350/- Each
      </h2>
      {step === 1 ? (
        <div ref={orderFormRef}>
          <form className="order-form mt-10 xs:mt-7" onSubmit={handleContinue}>
            <label htmlFor="medium">Assignment Medium</label>
            <select id="medium" defaultValue={formData.medium} required>
              <option value="">Select Medium</option>
              <option value="English">English</option>
              <option value="Hindi">हिन्दी</option>
            </select>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              defaultValue={formData.email}
              placeholder="e.g., sahil@gmail.com"
              required
            />
            <label htmlFor="programme">Programme</label>
            <input
              type="text"
              id="programme"
              placeholder="Type e.g., BAG, BAGEH, MPC"
              defaultValue={formData.programme}
              required
            />
            <label htmlFor="assignments">Number of Assignments</label>
            <p className="text-green-600">
              For example, BEVAE-181, 182, 183 BEGAE-182 BSOC-133, 134, 135, 136
              means No. of Assignments = 8.
            </p>
            <input
              type="number"
              id="assignments"
              placeholder="e.g., 1"
              defaultValue={formData.numberOfAssignments}
              required
            />
            <label htmlFor="codes">Assignment Codes</label>
            <input
              type="text"
              id="codes"
              placeholder="e.g., BEGAE-181, BEGAE-183, IBO-001"
              defaultValue={formData.assignmentCodes}
              required
            />
            <p>Next Step: Address</p>
            {error && (
              <p className="error-message mt-2 text-red-600">{error}</p>
            )}{" "}
            <button type="submit" className="w-[100%] mt-5">
              Enter Address
            </button>
          </form>
        </div>
      ) : (
        <div ref={orderFormRef}>
          <div className="order-form-title flex justify-between items-center mt-8 xs:mt-4">
            <h1 className="text-2xl text-center xs:text-lg mb-4">
              Confirm Address:
            </h1>
            <a className="text-lg hover:cursor-pointer" onClick={handleGoBack}>
              Go Back
            </a>
          </div>

          <div className="order-address">
            <form className="order-form" onSubmit={handlePlaceOrder}>
              <label htmlFor="page">Type of Pages Required</label>
              <select id="page" required>
                <option value="A4 Ruled">A4 Ruled Sheet</option>
                <option value="A4 Plain">A4 Plain Sheet</option>
              </select>

              <label htmlFor="session">Assignment Session</label>
              <input
                type="text"
                id="session"
                placeholder="e.g., Jan 2024, July 2025"
                required
              />

              <label htmlFor="session">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="e.g., Sahil Chahar"
                required
              />

              <label htmlFor="address">Full Address</label>
              <input
                type="text"
                id="address"
                placeholder="Your full address"
                required
              />

              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                pattern="[0-9]{10}"
                placeholder="e.g., 8312994396"
                required
              />

              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                pattern="[0-9]{6}"
                placeholder="e.g., 110016"
                required
              />

              <label
                className={`${showOtpInput === false ? "hidden" : "block"}`}
                htmlFor="pincode"
              >
                Enter Otp
              </label>
              <input
                className={`${showOtpInput === false ? "hidden" : "block"}`}
                type="number"
                id="otp"
                pattern="[0-9]{6}"
                placeholder="e.g., 123456"
                required
              />

              <p>
                Our team will contact you via phone or WhatsApp to process your
                order.
              </p>
              <p>
                By continuing, you agree to our{" "}
                <span>
                  <Link className="text-green-500" href={"/terms-conditions"}>
                    Terms & Conditions{" "}
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

              {error && (
                <p className="error-message mt-2 text-red-600">{error}</p>
              )}

              {response && <p className="mt-2 font-bold">{response}</p>}

              <button
                onClick={handlePlaceOrder}
                type="submit"
                className="w-[100%] mt-5"
                disabled={isLoading}
              >
                {isLoading === true ? "Please wait" : "Place Order"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateOrder;
