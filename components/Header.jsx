"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu visibility

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  }

  return (
    <>
      <header className="flex gap-2.5 justify-between px-12 py-4 items-center text-center mb-0 bg-white border-b-2 xs:px-4 fixed top-0 left-0 right-0 z-10">
        {/* Logo Section */}
        <div className="logo hover:cursor-pointer flex gap-3 text-center items-center xs:gap-1">
          <div className="w-16 md:w-20 lg:w-16">
            <Image
              src="/images/ignou_backbenchers_logo.webp"
              alt="IGNOU Backbenchers Logo"
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
        {/* Hamburger Menu Icon */}
        {isMenuOpen ? (
          <i
            onClick={handleMenuClick}
            className="bi bi-x hidden text-4xl cursor-pointer xs:block text-black"
          ></i>
        ) : (
          <i
            onClick={handleMenuClick}
            className="bi bi-list hidden text-4xl cursor-pointer xs:block  text-black"
          ></i>
        )}
      </header>

      {/* Mobile Menu Section */}
      {isMenuOpen && (
        <div className="xs:block fixed top-16 left-0 right-0 bg-white shadow-md p-4 z-20">
          <ul className="list-none">
            <li>
              <Link
                href="/my-orders"
                className="block text-gray-700 hover:text-gray-900 py-2"
                onClick={handleMenuClick}
              >
                MY ORDERS
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/919053442043"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-gray-900 py-2"
                onClick={handleMenuClick}
              >
                WHATSAPP US
              </a>
            </li>
            <li>
              <Link
                href="/login"
                className="block text-gray-700 hover:text-gray-900 py-2"
                onClick={handleMenuClick}
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Padding for content below fixed header */}
      <div className="pt-[85px]"></div>
    </>
  );
};

export default Header;
