"use client";

import Link from "next/link";
import { IoMdClose } from "react-icons/io";

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

export default function Sidebar({ open, toggleOpen }: Props) {
  return (
    <div
      className={`fixed min-h-screen top-0 bg-white shadow right-0 transition-all duration-300 overflow-hidden ${
        open ? "w-44" : "w-0"
      }`}
    >
      <div className=" z-10">
        <button onClick={toggleOpen} className=" w-10 h-10 m-4">
          <IoMdClose size={24} />
        </button>

        <ul className="flex flex-col items-center gap-4 mt-8">
          <Link
            href={"/"}
            className="hover:text-blue-500 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href={"/about-us"}
            className="hover:text-blue-500 transition-all duration-300"
          >
            About
          </Link>

          <Link
            href={"/contact-us"}
            className="hover:text-blue-500 transition-all duration-300"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
}
