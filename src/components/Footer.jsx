import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 py-23 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row justify-between gap-10">
        <div>
          <h1 className="text-3xl font-extrabold tracking-wider">SHOP.CO</h1>
          <p className="text-gray-600 mt-4 max-w-sm">
            We have clothes that suit your style and which you're proud to wear.
            From women to men.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="border border-black p-2 rounded-full hover:bg-black hover:text-white transition"
            >
              <CiFacebook className="text-1xl" />
            </a>
            <a
              href="#"
              className="border border-black p-2 rounded-full hover:bg-black hover:text-white transition"
            >
              <FaInstagram className="text-1xl" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          <div>
            <h3 className="text-sm font-bold tracking-widest text-gray-800 mb-3">
              HELP
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Statement
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
