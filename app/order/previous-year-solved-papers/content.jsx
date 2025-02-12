import React from "react";
const Link = require("next/link");

const SolvedQuestionPapers = () => {
  return (
    <div className="px-16 xs:px-7 py-10 ">
      <h2 className="text-2xl font-bold text-center mb-6">
        IGNOU Previous Year Solved Question Papers
      </h2>
      <p className="text-gray-700 text-lg">
        Get an immediate PDF download of our most up-to-date IGNOU Previous Year
        Solved Papers for just <span className="font-bold">₹49</span>. We use
        educated specialists to ensure that you get 90+ on your IGNOU exams.
        Using IGNOU Previous Year Solved Question Papers to prepare is the most
        effective way to study in a methodical manner.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
        <Link href="https://wa.me/919053442043">
          <p className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700">
            💬 WhatsApp Us
          </p>
        </Link>
        <Link href="https://wa.me/919053442043">
          <p className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
            <i class="bi bi-question-circle-fill"></i>
            Check Availability
          </p>
        </Link>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Available Solved Papers:</h3>
        <ul className="mt-4 text-gray-800">
          <li className="py-2">
            📘 IGNOU Master Degree Previous Year Solved Paper
          </li>
          <li className="py-2">
            📗 IGNOU Bachelor Degree Previous Year Solved Paper
          </li>
          <li className="py-2">
            📙 IGNOU Diploma Programmes Previous Year Solved Paper
          </li>
          <li className="py-2">
            📕 IGNOU Certificate Programmes Previous Year Solved Paper
          </li>
        </ul>
      </div>

      <div className="mt-8 max-w-3xl text-gray-700">
        <h3 className="text-xl font-semibold">
          How to Use Solved Papers Effectively:
        </h3>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Simulate exam conditions while solving past papers.</li>
          <li>
            Compare your answers with model solutions to improve accuracy.
          </li>
          <li>
            Identify important topics based on frequently asked questions.
          </li>
          <li>
            Revise effectively by practicing questions from previous exams.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SolvedQuestionPapers;
