"use client";

import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const updateIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faq = [
    {
      question: "How to Download IGNOU Solved Assignments?",
      answer:
        "To download IGNOU Solved Assignments, navigate to the IGNOU Solved Assignment page, click the 'Download PDF' button, enter basic details, and proceed to download.",
    },
    {
      question: "What are the Features of IGNOU Solved Assignments?",
      answer:
        "IGNOU Solved Assignments are prepared by past-year toppers and reviewed by retired IGNOU professors to ensure high quality.",
    },
    {
      question: "What is IGNOU Handwritten Assignment Courier Service?",
      answer:
        "This service is tailored for busy students, working professionals, and defense personnel. Assignments are written by experienced content writers, ensuring quality and high scores (90+).",
    },
    {
      question:
        "Do Your IGNOU Handwritten Assignments Follow the Marking Scheme?",
      answer:
        "Yes, we adhere to the standard IGNOU marking scheme and word limits. Additionally, front pages are provided with assignments.",
    },
    {
      question: "What is IGNOU Project and Synopsis Service?",
      answer:
        "We provide premium, uniquely customized projects. After placing an order, our experts offer topic suggestions and deliver a well-crafted synopsis.",
    },
  ];

  return (
    <section className="px-16">
      <h1 className="text-2xl mb-8">Frequently Asked Questions</h1>
      <div>
        {faq.map((item, index) => (
          <div
            className={`bg-[#f5deb3] px-[35px] py-[25px] text-black items-center cursor-pointer mb-[20px] ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
            onClick={() => updateIndex(index)}
            role="button"
            tabIndex={0}
            aria-expanded={activeIndex === index}
          >
            <div className="flex items-center justify-between">
              <h3 className="w-[100%] text-lg font-bold mb-1">
                {item.question}
              </h3>
              <span>
                {activeIndex === index ? (
                  <i className="bi bi-x text-4xl" aria-hidden="true"></i>
                ) : (
                  <i className="bi bi-plus-lg text-4xl" aria-hidden="true"></i>
                )}
              </span>
            </div>
            {activeIndex === index && (
              <div className=" font-bold">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
