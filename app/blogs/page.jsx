import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div className="px-10">
      <h1 className="text-center mt-8 underline xs:text-xl">Read our blogs</h1>
      <div className="flex gap-5 mb-20 xs:block">
        <img
          src="/images/solved-assignments.jpg"
          alt=""
          className="w-[40%] xs:w-[100%]"
        />
        <div>
          <h1 className="text-xl mb-3 mt-0 xs:mt-2">
            IGNOU Solved Assignments: Your Ultimate Guide to Scoring High
          </h1>
          <p className="text-xl">
            This blog provides a comprehensive guide on IGNOU solved
            assignments, explaining their importance, evaluation criteria, and
            submission process. Learn how well-prepared handwritten assignments
            can help you secure higher marks and where to get IGNOU solved
            assignments for different courses.
          </p>
          <Link href="/blogs/The-Ultimate-Guide-to-IGNOU-Solved-Assignments-2024">
            <p className="absolute underline right-10 cursor-pointer hover:text-green-700">
              Read here
            </p>
          </Link>
        </div>
      </div>

      <div className="flex gap-5 mb-20 xs:block">
        <img
          src="/images/previous-year-question-papers.jpg"
          alt=""
          className="w-[40%] xs:w-[100%]"
        />
        <div>
          <h1 className="text-xl mb-3 mt-0 xs:mt-2">
            IGNOU Previous Year Question Papers: Why They Matter & How to Use
            Them
          </h1>
          <p className="text-xl">
            Past question papers are a goldmine for exam preparation. This blog
            discusses the significance of IGNOU previous year question papers,
            how they help in understanding exam patterns, and where to find
            solved question papers with answers to boost your confidence before
            exams.
          </p>
          <Link href="/blogs/The-Ultimate-Guide-to-IGNOU-Solved-Assignments-2024">
            <p className="absolute underline right-10 cursor-pointer hover:text-green-700">
              Read here
            </p>
          </Link>
        </div>
      </div>

      <div className="flex gap-5 mb-20 xs:block">
        <img
          src="/images/handwritten-assignments.jpg"
          alt=""
          className="w-[40%] xs:w-[100%]"
        />
        <div>
          <h1 className="text-xl mb-3 mt-0 xs:mt-2">
            Everything You Need to Know About IGNOU Handwritten Assignments
          </h1>
          <p className="text-xl">
            Handwritten assignments are an essential part of IGNOU’s evaluation
            system. This blog explains why handwritten submissions are
            mandatory, tips to write high-scoring assignments, and how to order
            professionally written IGNOU handwritten assignments for timely
            submission.
          </p>
          <Link href="/blogs/The-Ultimate-Guide-to-IGNOU-Solved-Assignments-2024">
            <p className="absolute underline right-10 cursor-pointer hover:text-green-700">
              Read here
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
