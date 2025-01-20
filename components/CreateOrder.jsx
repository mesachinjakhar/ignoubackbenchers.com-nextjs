"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CreateOrder = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    medium: "",
    email: "",
    programme: "",
    assignments: "",
    codes: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track if the form has been submitted
  const [error, setError] = useState(""); // Error message
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [sessionId, setSessionId] = useState("");

  // const headline = "Order Handwritten Assignment:";

  useEffect(() => {
    function generateSessionId() {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let sessionId = "";
      for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        sessionId += characters[randomIndex];
      }
      setSessionId(sessionId);
    }
    generateSessionId();
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

  const validateForm = (form) => {
    // Validate Number of Assignments (should be a number)
    if (form.assignments && !/^\d+$/.test(form.assignments.value)) {
      setError("Number of Assignments should be a valid number.");
      return false;
    }

    // Validate Programme (should contain only letters)
    if (form.programme && !/^[A-Za-z]+$/.test(form.programme.value)) {
      setError("Programme should contain only letters.");
      return false;
    }

    // Validate Assignment Codes (should contain both letters and numbers)
    if (
      form.codes &&
      (!/[A-Za-z]/.test(form.codes.value) || !/\d/.test(form.codes.value))
    ) {
      setError("Assignment Codes should contain both letters and numbers.");
      return false;
    }

    // Validate Assignment Session (should contain both letters and numbers)
    if (
      form.session &&
      (!/[A-Za-z]/.test(form.session.value) || !/\d/.test(form.session.value))
    ) {
      setError("Assignment Session should contain both letters and numbers.");
      return false;
    }

    // Validate Full Address (minimum length of 10 characters)
    if (form.address && form.address.value.length < 10) {
      setError("Full Address should be at least 10 characters long.");
      return false;
    }

    // If all validations pass, return true
    setError(""); // Clear any previous error
    return true;
  };

  const handleContinue = (e) => {
    e.preventDefault(); // Prevent form submission
    const form = e.target.closest("form");

    // Validate form before proceeding to next step
    if (!validateForm(form)) {
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
    setStep(2); // Move to the second step
    setIsFormSubmitted(true); // Mark that the form has been submitted
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setResponse("");

    const form = e.target.closest("form");
    const orderDetails = {
      ...formData,
      page: form.page.value,
      session: form.session.value,
      name: form.fullName.value,
      mobile: form.mobile.value,
      address: form.address.value,
      pincode: form.pincode.value,
    };

    // Validate address form fields
    if (!validateForm(form)) {
      return; // Prevent submission if validation fails
    }
    // setIsLoading("true");
    async function creatingOrder() {
      setIsLoading(true);
      const response = await fetch("https://api.ignoubackbenchers.com/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
        credentials: "include",
      });
      const jsonResponse = await response.json();
      console.log("Api Response: ", jsonResponse);
      if (jsonResponse.status == "true") {
        setResponse("Order has been place successfully.");
      } else {
        setResponse(jsonResponse.message);
      }
      setIsLoading(false);
    }
    creatingOrder();
  };

  const handleGoBack = () => setStep(1); // Return to the first step

  return (
    <div className="order p-0 px-[200px] mb-[80px] mt-6 xs:px-[30px]">
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
              defaultValue={formData.assignments}
              required
            />
            <label htmlFor="codes">Assignment Codes</label>
            <input
              type="text"
              id="codes"
              placeholder="e.g., BEGAE-181, BEGAE-183, IBO-001"
              defaultValue={formData.codes}
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
