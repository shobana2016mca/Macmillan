"use client";

export default function Footer() {
  const handleGoTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer className="border-t p-4">
      <div className="container bg-grey-lighter p-16 justify-center">
        <div className="sm:flex mb-4">
          <div className="sm:w-50 sm:mt-0 mt-8 h-auto">
            <div className="text-[#4e007a] font-bold mb-2 text-2xl">
              <h2>
                Recruitment{" "}
                <span className="text-black text-2xl font-bold ">Agency</span>
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
              <li className="hover:text-blue text-grey-darker">About Us</li>
              <li className="hover:text-blue text-grey-darker">Blog</li>
              <li className="hover:text-blue text-grey-darker">Basket</li>
              <li className="hover:text-blue text-grey-darker">Register</li>
              <li className="hover:text-blue text-grey-darker">Contact Us</li>
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
      <div className="container bg-grey-lighter p-16 justify-center">
        <div className="sm:flex mb-4">
          <div className="sm:w-40 sm:mt-0 mt-8 h-auto">
            <div className="text-[#4e007a] font-bold mb-2 ">
              <h2>
                Macmillan{" "}
                <span className="text-black font-bold ">HR</span>
              </h2>
            </div>
          </div>
          <div className="sm:w-3/5 h-auto">
            <div className="text-[#4e007a] font-bold mb-2">
              © 2024. Theme by CMSSuperheroes
            </div>
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

          <div className="sm:w-3/5 h-auto sm:mt-0 mt-8">
            {/* <div className="text-[#4e007a] font-bold mb-2">back to top</div> */}
          </div>
          <div className="sm:w-3/5 h-auto sm:mt-0 mt-8">
            <div
              className="text-[#4e007a] font-bold mb-2 cursor-pointer"
              onClick={handleGoTop}>
              Back to top
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
