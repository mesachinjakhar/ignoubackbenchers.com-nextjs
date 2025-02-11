import Image from "next/image";
import Link from "next/link";

const QuickActions = () => {
  return (
    <div className="flex gap-2.5 p-[70px] flex-wrap justify-between xs:p-[45px]">
      {/* IGNOU Solved Assignments */}
      <Link
        href="/order/solved-assignments"
        aria-label="Order IGNOU Solved Assignments Online"
      >
        <div className="w-[300px] h-[230px] text-center transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
          <div className="bg-teal-950 rounded-[15px] p-[15px] h-[170px] flex justify-center mb-3">
            <div>
              <Image
                src="/images/document2.png"
                alt="Order IGNOU Solved Assignments Online"
                width={130}
                height={130}
              />
            </div>
          </div>
          <p className="text-base font-semibold">IGNOU Solved Assignments</p>
        </div>
      </Link>

      {/* IGNOU Previous Year Solved Papers */}
      <Link
        href="/order/previous-year-solved-papers"
        aria-label="Download IGNOU Previous Year Solved Papers"
      >
        <div className="w-[300px] h-[230px] text-center transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
          <div className="bg-teal-950 rounded-[15px] p-[15px] h-[170px] flex justify-center mb-3">
            <div>
              <Image
                src="/images/document2.png"
                alt="Download IGNOU Previous Year Solved Papers"
                width={130}
                height={130}
              />
            </div>
          </div>
          <p className="text-base font-semibold">Previous Year Solved Papers</p>
        </div>
      </Link>

      {/* IGNOU Handwritten Assignments */}
      <Link
        href="/order/handwritten-assignments"
        aria-label="Order IGNOU Handwritten Assignments Online"
      >
        <div className="w-[300px] h-[230px] text-center transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
          <div className="bg-teal-950 rounded-[15px] p-[15px] h-[170px] flex justify-center mb-3">
            <div>
              <Image
                src="/images/document2.png"
                alt="Order IGNOU Handwritten Assignments Online"
                width={130}
                height={130}
              />
            </div>
          </div>
          <p className="text-base font-semibold">
            IGNOU Handwritten Assignments
          </p>
        </div>
      </Link>
    </div>
  );
};

export default QuickActions;
