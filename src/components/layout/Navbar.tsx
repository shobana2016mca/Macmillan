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

            <Link
              href={"/contact-us"}
              className="hover:text-blue-500 transition-all duration-300">
              Contact Us
            </Link>
          </ul>
        </div>

        <div className="flex items-center gap-8">
          <div className="hover:text-blue-500 flex items-center gap-2 transition-all duration-300 cursor-pointer">
            <span>LOGIN/REGISTER</span>
            <Image
              src={
                "https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/themes/wp-recruitment/assets/images/icon-login.png"
              }
              alt="login"
              height={30}
              width={30}
            />
          </div>

          <div className="hover:text-blue-500 flex items-center gap-2 transition-all duration-300 cursor-pointer relative">
            <span>JOB BASKET</span>
            <Image
              src={
                "https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/themes/wp-recruitment/assets/images/icon-cart.png"
              }
              alt="login"
              height={30}
              width={30}
            />

            <div className="flex items-center justify-center absolute border-2 rounded-full -top-3 -right-2 w-5 h-5 text-xs border-[#4e007a]">
              0
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
