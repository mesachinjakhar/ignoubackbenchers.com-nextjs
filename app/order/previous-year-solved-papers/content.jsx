import React from "react";
import Head from "next/head";
const Link = require("next/link");

const SolvedQuestionPapers = () => {
  return (
    <>
      <Head>
        <title>IGNOU Previous Year Solved Question Papers - Download PDF</title>
        <meta
          name="description"
          content="Get IGNOU solved question papers for previous years. Download PDFs instantly for ₹49 and improve your IGNOU exam preparation with expert solutions."
        />
        <meta
          name="keywords"
          content="IGNOU solved question papers, IGNOU previous year papers, IGNOU exam preparation, IGNOU PDF downloads, IGNOU study material"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="px-16 xs:px-7 py-10">
        <h1 className="text-2xl font-bold text-center mb-6">
          IGNOU Previous Year Solved Question Papers - Download PDF
        </h1>
        <p className="text-gray-700 text-lg">
          Prepare smarter with IGNOU Previous Year Solved Question Papers! Get
          an immediate PDF download of the latest solved papers for just{" "}
          <span className="font-bold">₹49</span>. Our expertly crafted solutions
          help you score 90+ in your IGNOU exams by following the latest IGNOU
          marking scheme.
        </p>

        <h2 className="text-xl font-semibold mt-8">
          ✅ Why Choose Our Solved Papers?
        </h2>
        <ul className="mt-4 text-gray-800 list-disc list-inside">
          <li>📌 Accurate Solutions – Prepared by IGNOU subject experts.</li>
          <li>
            📂 Instant PDF Download – No waiting, access papers immediately.
          </li>
          <li>
            📖 Available for All IGNOU Courses – UG, PG, Diploma & Certificate.
          </li>
          <li>
            🚀 Boost Your Exam Preparation – Learn key concepts efficiently.
          </li>
        </ul>

        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
          <Link href="https://wa.me/919053442043">
            <p className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700">
              💬 WhatsApp Us
            </p>
          </Link>
          <Link href="https://wa.me/919053442043">
            <p className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
              🔍 Check Availability
            </p>
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">
            📚 Available IGNOU Solved Papers:
          </h2>
          <ul className="mt-4 text-gray-800">
            <li className="py-2">
              📘 IGNOU Master Degree Previous Year Solved Papers
            </li>
            <li className="py-2">
              📗 IGNOU Bachelor Degree Previous Year Solved Papers
            </li>
            <li className="py-2">📙 IGNOU Diploma Programmes Solved Papers</li>
            <li className="py-2">
              📕 IGNOU Certificate Programmes Solved Papers
            </li>
          </ul>
        </div>

        <div className="mt-8 max-w-3xl text-gray-700">
          <h2 className="text-xl font-semibold">
            📌 How to Use IGNOU Solved Papers Effectively:
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              📝 Simulate Exam Conditions – Time yourself while solving past
              papers.
            </li>
            <li>
              🔍 Compare with Model Answers – Learn from expert solutions.
            </li>
            <li>
              🎯 Identify Important Topics – Focus on frequently asked
              questions.
            </li>
            <li>
              📖 Revise Smarter – Use solved papers as a strategic study guide.
            </li>
          </ul>
        </div>

        <p className="text-center text-lg text-gray-800 font-semibold mt-6">
          📩 Order your IGNOU solved papers now and ace your exams!
        </p>
      </div>
    </>
  );
};

export default SolvedQuestionPapers;
