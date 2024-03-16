import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-white z-50">
      <div className="mx-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href={"/"}>
            <Image src={"/logo.jpeg"} alt="logo" height={80} width={80} />
          </Link>

          <ul className="flex items-center gap-8">
            <Link
              href={"/"}
              className="hover:text-blue-500 transition-all duration-300">
              Home
            </Link>
            <Link
              href={"/about-us"}
              className="hover:text-blue-500 transition-all duration-300">
              About
            </Link>
          </ul>
        </div>

        <div className="flex items-center gap-8">
          <div className="hover:text-blue-500 transition-all duration-300 cursor-pointer">
            LOGIN/REGISTER
          </div>

          <div className="hover:text-blue-500 transition-all duration-300 cursor-pointer">
            JOB BASKET
          </div>
        </div>
      </div>
    </nav>
  );
}
