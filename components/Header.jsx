import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <header className="flex gap-2.5 justify-between px-12 py-4 item-center text-center mb-0 bg-white border-b-2 xs:px-4">
        {/* Logo Section */}
        <div className="logo hover:cursor-pointer flex gap-3 text-center items-center">
          <div className="w-16 md:w-20 lg:w-">
            <Image
              src="/images/ignou_backbenchers_logo.webp"
              alt="IGNOU Backbenchers Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <Link href="/" aria-label="Go to IGNOUBACKBENCHERS Home">
            <h2 className="text-2xl text-center text-black xs:text-xl">
              IgnouBackBenchers
            </h2>
          </Link>
        </div>

        {/* Navigation Section */}
        <nav aria-label="Primary Navigation" className="xs:hidden">
          <ul className="flex list-none gap-5 items-center m-0 p-0 text-center">
            <li>
              <Link
                href="/my-orders"
                aria-label="View Your Order"
                className="no-underline text-gray-700 text-base hover:cursor-pointer hover:text-gray-900"
              >
                MY ORDERS
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/919053442043"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="no-underline text-gray-700 text-base hover:cursor-pointer hover:text-gray-900"
              >
                WHATSAPP US
              </a>
            </li>
            <li>
              <Link href="/login" aria-label="Login to your account">
                <button>LOGIN</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
