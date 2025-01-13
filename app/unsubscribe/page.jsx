"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/unsubscribe/${email}`);
  }

  return (
    <div className="login px-[300px] mt-[7%] xs:px-[30px]">
      <h1>Unsubscribe</h1>
      <form className="login-form">
        <label>Email:</label>
        <input
          type="email"
          placeholder="sahil@gmail.com"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default Unsubscribe;
