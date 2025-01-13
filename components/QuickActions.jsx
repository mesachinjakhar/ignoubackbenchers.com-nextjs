import Image from "next/image";
import Link from "next/link";

const QuickActions = () => {
  return (
    <div className="flex gap-2.5 p-[70px] flex-wrap justify-between xs:p-[45px]">
      {/* Solved Assignments */}
      <Link href="/order" aria-label="Order Solved Assignments">
        <div className="w-[300px] h-[230px] text-center transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
          <div className="bg-teal-950 rounded-[15px] p-[15px] h-[170px] flex justify-center mb-3 ">
            {" "}
            <div>
              <Image
                src="/images/document2.png"
                alt="Solved Assignments Document Preview"
                width={130}
                height={0}
                className=""
              />
            </div>
          </div>
          <p className=" text-lg">IGNOU Solved Assignments</p>
        </div>
      </Link>

      {/* Handwritten Assignments */}
      <Link href="/order" aria-label="Order Handwritten Assignments">
        <div className="w-[300px] h-[230px] text-center transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
          <div className="bg-teal-950 rounded-[15px] p-[15px] h-[170px] flex justify-center mb-3 ">
            {" "}
            <div>
              <Image
                src="/images/document2.png"
                alt="Solved Assignments Document Preview"
                width={130}
                height={0}
              />
            </div>
          </div>
          <p className=" text-lg">IGNOU Solved Assignments</p>
        </div>
      </Link>

      {/* Customized Project */}
      <Link
        href="/order"
        aria-label="Order Customized Project & Synopsis Guidance"
      >
        <div className="w-[300px] h-[230px] text-center transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
          <div className="bg-teal-950 rounded-[15px] p-[15px] h-[170px] flex justify-center mb-3 ">
            <div>
              <Image
                src="/images/document2.png"
                alt="Solved Assignments Document Preview"
                width={130}
                height={0}
              />
            </div>
          </div>
          <p className=" text-lg">IGNOU Solved Assignments</p>
        </div>
      </Link>
    </div>
  );
};

export default QuickActions;
