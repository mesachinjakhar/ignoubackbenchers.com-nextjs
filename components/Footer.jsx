import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-[50px] px-[50px] py-[25px] bg-black text-white xs:px-[25px]">
      <p className="mb-[40px] underline">
        Questions? Call <a href="tel:+919053442043">+91 9053442043</a>
      </p>
      <div className="flex justify-between mb-3 xs:block">
        <div className="footer-menu xs:mb-8">
          <nav className="">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              <li>
                <Link href="/order/solved-assignments">
                  IGNOU Solved Assignments
                </Link>
              </li>
              <li>
                <Link href="/order/previous-year-solved-papers">
                  IGNOU Handwritten Assignments
                </Link>
              </li>
              <li>
                <Link href="/order/handwritten-assignments">
                  IGNOU Last Year Question Papers
                </Link>
              </li>
              <li>
                <Link href="/order/ignou-projects">
                  IGNOU Project and IGNOU Synopsis
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-menu  xs:mb-8">
          <nav>
            <h3 className="mb-3">Menu</h3>
            <ul>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/return-refund-policy">Return & Refunds</Link>
              </li>
              <li>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-menu">
          <nav>
            <h3 className="mb-3">Address</h3>
            <ul>
              <li>K-110, Basement, Hauz Khas Enclave, New Delhi</li>
              <li>Pincode: 110016</li>
              <li>
                Phone: <a href="tel:+919053442043">+91 9053442043</a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:care@ignoubackbenchers.com">
                  care@ignoubackbenchers.com
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Link
        className=" text-[20px] underline hover:cursor-pointer text-green-500"
        href={"/unsubscribe"}
      >
        Unsubscribe here
      </Link>
      <p className="mt-[30px] text-white text-[12px]">
        &copy; {new Date().getFullYear()} IgnouBackBenchers.com. All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
