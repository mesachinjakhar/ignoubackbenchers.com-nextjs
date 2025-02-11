const Link = require("next/link");
const Blog = () => {
  return (
    <section className="bg-black px-[50px] py-[35px] mb-[60px] xs:px-[25px]">
      <div>
        <h2 className="text-white text-2xl">Read Our Blogs</h2>
        <div className="flex flex-nowrap justify-between mt-[30px] mb-[30px] gap-[20px] overflow-x-auto pb-[10px]">
          {/* Blog Card 1 */}
          <div className="flex-shrink-0 w-[350px] p-[15px] bg-white rounded-bl-[25px] transition-transform duration-300 ease-out">
            <img
              src="/images/solved-assignments.jpg"
              alt="Tools to create better assignments"
            />
            <h3 className=" font-bold mt-4 mb-3 text-green-500">
              IGNOU Solved Assignments: Your Ultimate Guide to Scoring High
            </h3>
            <p className="text-sm mb-5 ">
              This blog provides a comprehensive guide on IGNOU solved
              assignments, explaining their importance, evaluation criteria, and
              submission process. Learn how well-prepared handwritten
              assignments can help you secure higher marks and where to get
              IGNOU solved assignments for different courses.
            </p>
            <a
              href="/blogs/The-Ultimate-Guide-to-IGNOU-Solved-Assignments-2024"
              aria-label="Read more about how we made the assignments"
              className=" flex justify-end hover:cursor-pointer"
            >
              <i className="bi bi-caret-right-fill"></i> Read here
            </a>
          </div>

          {/* Blog Card 2 */}
          <div className="flex-shrink-0 w-[350px] p-[15px] bg-white rounded-bl-[25px] transition-transform duration-300 ease-out">
            <img
              src="/images/previous-year-question-papers.jpg"
              alt="Tools to create better assignments"
            />
            <h3 className=" font-bold mt-4 mb-3 text-green-500">
              IGNOU Previous Year Question Papers: How to Use Them
            </h3>{" "}
            <p className="text-sm mb-5">
              Past question papers are a goldmine for exam preparation. This
              blog discusses the significance of IGNOU previous year question
              papers, how they help in understanding exam patterns, and where to
              find solved question papers with answers to boost your confidence
              before exams.
            </p>
            <a
              href="blogs/Ignou-Previous-Year-Question-Papers"
              aria-label="Read more about how we made the assignments"
              className=" flex justify-end hover:cursor-pointer"
            >
              <i className="bi bi-caret-right-fill"></i>Read here
            </a>
          </div>

          {/* Blog Card 3 */}
          <div className="flex-shrink-0 w-[350px] p-[15px] bg-white rounded-bl-[25px] transition-transform duration-300 ease-out">
            <img
              src="/images/handwritten-assignments.jpg"
              alt="Tools to create better assignments"
            />
            <h3 className=" font-bold mt-4 mb-3 text-green-500">
              Everything You Need to Know About IGNOU Handwritten Assignments
            </h3>{" "}
            <p className="text-sm mb-5">
              Handwritten assignments are an essential part of IGNOU’s
              evaluation system. This blog explains why handwritten submissions
              are mandatory, tips to write high-scoring assignments, and how to
              order professionally written IGNOU handwritten assignments for
              timely submission.
            </p>
            <a
              href="blogs/Everything-You-Need-to-Know-About-IGNOU-Handwritten-Assignments"
              aria-label="Read more about how we made the assignments"
              className="flex justify-end hover:cursor-pointer"
            >
              <i className="bi bi-caret-right-fill"></i>Read here
            </a>
          </div>
        </div>
        <Link href="/blogs">
          <p
            className="text-white hover:text-green-500 mb-8 underline hover:cursor-pointer"
            aria-label="See all blogs about IGNOU assignments and projects"
          >
            See All Blogs Here
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
