
"use client";
import Image from "next/image";

export default function Footer() {
  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer className="border-t">
      <div className="container bg-grey-lighter p-16 justify-center pr-4">
        <div className="sm:flex mb-4">
          <div className="sm:w-50 sm:mt-0 mt-8 h-auto">
            <div className="text-[#4e007a] font-bold mb-2 text-2xl">
              <h2>
              Macmillan{" "}
                <span className="text-black text-2xl font-bold ">HR</span>
              </h2>
            </div>
            <p className="text-grey-darker leading-normal">
              Sed consequat sapien faucibus quam bibendum convallis quis in
              nulla. Pellentesque volutpat odio eget diam cursus semper. Sed
              consequat sapien faucibus quam.{" "}
            </p>
          </div>
          <div className="sm:w-1/2 h-auto">
            <div className="text-orange mb-2"></div>
            {/* <ul className="list-reset leading-normal">
        <li className="hover:text-orange text-grey-darker">One</li>
        <li className="hover:text-orange text-grey-darker">Two</li>
        <li className="hover:text-orange text-grey-darker">Three</li>
        <li className="hover:text-orange text-grey-darker">Four</li>
        <li className="hover:text-orange text-grey-darker">Five</li>
        <li className="hover:text-orange text-grey-darker">Six</li>
        <li className="hover:text-orange text-grey-darker">Seven</li>
        <li className="hover:text-orange text-grey-darker">Eight</li>
    </ul> */}
          </div>
          <div className="sm:w-3/4 h-auto">
            <div className="text-[#4e007a] font-bold mb-2">CANDIDATES</div>
            <ul className="list-reset leading-normal">
              <li className="hover:text-orange text-grey-darker mb-2">
                Browse Jobs
              </li>
              <li className="hover:text-orange text-grey-darker mb-2">
                Browse Categories
              </li>
              <li className="hover:text-orange text-grey-darker mb-2">
                Candidate Profile
              </li>
              <li className="hover:text-orange text-grey-darker mb-2">
                Edit Resume
              </li>
            </ul>
          </div>
          <div className="sm:w-3/4 h-auto sm:mt-0 mt-8">
            <div className="text-[#4e007a] mb-2 font-bold">OTHER</div>

            <ul className="list-reset leading-normal">
              <li className="hover:text-blue text-grey-darker text-sm">About Us</li>
              <li className="hover:text-blue text-grey-darker text-sm">Blog</li>
              <li className="hover:text-blue text-grey-darker text-sm">Basket</li>
              <li className="hover:text-blue text-grey-darker text-sm">Register</li>
              <li className="hover:text-blue text-grey-darker text-sm">Contact Us</li>
            </ul>
          </div>
          <div className="sm:w-3/4 h-auto sm:mt-0 mt-8">
            <div className="text-[#4e007a] font-bold mb-2">Contact us</div>
            <ul className="list-reset leading-normal">
              <li className="hover:text-green-dark text-grey-darker">
                44 534 643 2544
              </li>
              <li className="hover:text-green-dark text-grey-darker">
                contact@recruitment.com
              </li>
              <li className="hover:text-green-dark text-grey-darker">
                Facebook
              </li>
              <li className="hover:text-green-dark text-grey-darker">
                Instagram
              </li>
              <li className="hover:text-green-dark text-grey-darker">
                Twitter
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 pt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="bg-gray-200 flex pl-12">   <Image src={"/logo.jpeg"} alt="logo" height={80} width={90}/> <p className="pt-4  text-[#4e007a] text-sm md:pt-6 font-semibold">Macmillan HR © 2024. copyright</p>
               </div>
  <div className="bg-gray-200 text-right pr-12 pt-4"> <div
              className="text-[#4e007a] text-sm font-bold mb-2 cursor-pointer"
              onClick={handleGoTop}>
              Back to top
            </div></div>
</div>
</footer>
</footer>   
  );
}
