import React from "react";
import Image from "next/image";
import Link from "next/link";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[85vh]">
      <div className="logo flex gap-3 text-center">
        <div className="w-16 md:w-20 lg:w-16">
          <Image
            src="/images/ignou_backbenchers_logo.webp"
            alt="IGNOU Backbenchers"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <Link href="/" aria-label="Go to Ignou BackBenchers Home">
          <h2 className="text-2xl text-center text-black xs:text-lg">
            Ignou BackBenchers
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Loading;
