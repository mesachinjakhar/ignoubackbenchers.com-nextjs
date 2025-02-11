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
              src="https://imgs.search.brave.com/pYDZLr3BOVbbPwYuKH7hdNja8aTVcNJ6wjQfi9CEluk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d3BiZWdpbm5lci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMTEvdG9vbHMt/dG8tY3JlYXRlLWJl/dHRlci1pbWFnZXMt/Zm9yLXlvdXItYmxv/Zy1wb3N0cy1vZy5w/bmc"
              alt="Tools to create better assignments"
            />
            <h3 className=" font-bold mt-4 mb-3 text-green-500">
              How We Made the Assignments?
            </h3>
            <p className="text-sm mb-5 ">
              See detailed blog about how we create the assigments for you. From
              taking orders and delivering to your address
            </p>
            <a
              aria-label="Read more about how we made the assignments"
              className=" flex justify-end hover:cursor-pointer"
            >
              <i className="bi bi-caret-right-fill"></i> Read here
            </a>
          </div>

          {/* Blog Card 2 */}
          <div className="flex-shrink-0 w-[350px] p-[15px] bg-white rounded-bl-[25px] transition-transform duration-300 ease-out">
            <img
              src="https://imgs.search.brave.com/pYDZLr3BOVbbPwYuKH7hdNja8aTVcNJ6wjQfi9CEluk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d3BiZWdpbm5lci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMTEvdG9vbHMt/dG8tY3JlYXRlLWJl/dHRlci1pbWFnZXMt/Zm9yLXlvdXItYmxv/Zy1wb3N0cy1vZy5w/bmc"
              alt="Tools to create better assignments"
            />
            <h3 className=" font-bold mt-4 mb-3 text-green-500">
              How We Made the Assignments?
            </h3>{" "}
            <p className="text-sm mb-5">
              See detailed blog about how we create the assigments for you. From
              taking orders and delivering to your address
            </p>
            <a
              aria-label="Read more about how we made the assignments"
              className=" flex justify-end hover:cursor-pointer"
            >
              <i className="bi bi-caret-right-fill"></i>Read here
            </a>
          </div>

          {/* Blog Card 3 */}
          <div className="flex-shrink-0 w-[350px] p-[15px] bg-white rounded-bl-[25px] transition-transform duration-300 ease-out">
            <img
              src="https://imgs.search.brave.com/pYDZLr3BOVbbPwYuKH7hdNja8aTVcNJ6wjQfi9CEluk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d3BiZWdpbm5lci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMTEvdG9vbHMt/dG8tY3JlYXRlLWJl/dHRlci1pbWFnZXMt/Zm9yLXlvdXItYmxv/Zy1wb3N0cy1vZy5w/bmc"
              alt="Tools to create better assignments"
            />
            <h3 className=" font-bold mt-4 mb-3 text-green-500">
              How We Made the Assignments?
            </h3>{" "}
            <p className="text-sm mb-5">
              See detailed blog about how we create the assigments for you. From
              taking orders and delivering to your address
            </p>
            <a
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
