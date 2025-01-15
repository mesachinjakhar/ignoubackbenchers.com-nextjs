"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const UnsubscribeConfirmation = () => {
  const [response, setResponse] = useState(null);
  const { email } = useParams();
  console.log(email);

  function handleUnsubscribe() {
    setResponse({ status: "unsubscribed" });
  }

  function handleSubscribeAgain() {
    setResponse(null);
  }

  return (
    <div>
      {response === null ? (
        <div className="container px-[300px] mt-[7%] xs:px-[30px]">
          <h1>Unsubscribe</h1>
          <div className="unsubscribe">
            <h3>We're Sorry to See You Go</h3>
            <p className="mt-2">Please select the reason to unsubscribe: </p>
            <select>
              <option value="">Please select a reason</option>
              <option value="no_longer_needed">No longer needed</option>
              <option value="did_not_subscribe">Did not subscribe</option>
              <option value="unwanted_emails">Unwanted emails</option>
              <option value="other">Other</option>
            </select>
            <button className="subscribe-btn" onClick={handleUnsubscribe}>
              Unsubscribe
            </button>
          </div>
        </div>
      ) : (
        <div className="container px-[300px] mt-[7%] xs:px-[30px]">
          <h1>Unsubscribe</h1>
          <div className="unsubscribe">
            <h3>We're Sorry to See You Go</h3>
            <p className="mt-2">
              You've successfully unsubscribed. We respect your decision and
              will make sure no further emails are sent to your inbox.
            </p>
            <p className="mt-2 text-green-700">
              If you change your mind, you can easily subscribe again by
              clicking the button below:
            </p>
            <button
              className="subscribe-btn mt-4"
              onClick={handleSubscribeAgain}
            >
              Subscribe Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnsubscribeConfirmation;
