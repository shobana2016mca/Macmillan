import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight, FaLock } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { CiClock2, CiMoneyBill } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import FaqAccordian from "@/components/home/faqaccordian";
import Recentjobs from "@/components/home/recentjobs";

export default function Home() {
  return (
    <>
      <section
        className="min-h-[130vh] w-full relative bg-fixed bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/hero-bg.jpeg')",
        }}
      >
        <div className="flex items-center pt-20 h-[80%] flex-col gap-4 z-10">
          <>
            <h1 className="font-bold text-xl md:text-2xl text-center">
              Join us & Explore Thousands of Jobs
            </h1>
            <p className="font-medium text-sm md:text-lg text-center ">
              Select your Industry and/or type your keyword, then click search
              to find your perfect job
            </p>
          </>
          <div className="p-4 bg-[#9B74AC] rounded-md  grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="E.G Digital Designer"
              className="py-2 px-4 rounded-md w-full col-span-2 md:col-span-1"
            />

            <select
              name="location"
              id="location"
              className="px-4 py-2 bg-white rounded-md col-span-2 md:col-span-1"
            >
              <option value="">Location</option>
              <option value="">Location 1</option>
              <option value="">Location 2</option>
            </select>

            <select
              name="specialism"
              id="specialism"
              className="px-4 py-2 bg-white rounded-md col-span-2 md:col-span-1"
            >
              <option value="">Location</option>
              <option value="">Location 1</option>
              <option value="">Location 2</option>
            </select>

            <button className="flex items-center  gap-4 text-xl font-semibold bg-blue-500 px-4 py-2 rounded-md text-white col-span-2 md:col-span-1">
              <FaSearch />
              <span>SEARCH</span>
            </button>

            <div className="border-t pt-4 col-span-2 text-white flex gap-4 flex-col md:flex-row">
              <h1 className="font-medium">Quick Searches: </h1>
              <div className="flex items-center justify-between">
                <span className="text-xs border-r pr-2 md:pr-4 cursor-pointer">
                  IT
                </span>
                <span className="text-xs border-r pr-2 md:pr-0 md:px-4 cursor-pointer">
                  Engineer
                </span>
                <span className="text-xs border-r pr-2 md:pr-0 md:px-4 cursor-pointer">
                  Car
                </span>
                <span className="text-xs border-r pr-2 md:pr-0 md:px-4 cursor-pointer">
                  Engine
                </span>
                <span className="text-xs cursor-pointer pl-2 md:pl-4">
                  Marketing
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-20 p-4 bg-gradient-to-b from-[#4E007A] to-[#3F0062] py-20 absolute bottom-[-250px] md:bottom-0 w-full">
          <ul className="flex items-center justify-center flex-col md:flex-row p-4 gap-4">
            <li className="px-4 flex items-center justify-center flex-col gap-4 text-white text-lg">
              <div className=" h-[90px] w-[90px] bg-[#370056] leading-[90px] text-center flex items-center justify-center rounded-full border-8 border-[#6f00ad] relative after:content-[''] after:h-[10px] after:w-[170px] after:bg-[#6f00ad] after:absolute after:top-1/2 after:left-[100%] after:hidden after:md:block ">
                <div className="relative h-[55px] w-[55px] flex items-center justify-center overflow-hidden">
                  <Image
                    fill
                    src="https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/uploads/2016/10/process_icon3.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                1. Register account
                <br />
                to begin applying{" "}
              </div>
            </li>

            <li className="px-4 flex items-center justify-center flex-col gap-4 text-white text-lg">
              <div className=" h-[90px] w-[90px] bg-[#370056] leading-[90px] text-center flex items-center justify-center rounded-full border-8 border-[#6f00ad] relative after:content-[''] after:h-[10px] after:w-[150px] after:bg-[#6f00ad] after:absolute after:top-1/2 after:left-[100%]  after:hidden after:md:block">
                <div className="relative h-[55px] w-[55px] flex items-center justify-center overflow-hidden">
                  <Image
                    fill
                    decoding="async"
                    src="https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/uploads/2016/10/process_icon2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                2. Upload your Resume
                <br />
                &amp; browse hundreds of jobs{" "}
              </div>
            </li>
            <li className="px-4 flex items-center justify-center flex-col gap-4 text-white text-lg">
              <div className=" h-[90px] w-[90px] bg-[#370056] leading-[90px] text-center flex items-center justify-center rounded-full border-8 border-[#6f00ad]">
                <div className="relative h-[55px] w-[55px] flex items-center justify-center">
                  <Image
                    fill
                    src="https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/uploads/2016/10/process_icon1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                3. Apply for jobs
                <br />
                in seconds{" "}
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-[15rem] md:mt-10 p-8 z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-semibold">
          Welcome to an <span className="text-[#4e007a]">Award Winning</span>{" "}
          Recuritment Agency
        </h1>

        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <p className="leading-7 text-sm text-[#212121] flex items-center justify-center">
            Bushwick Schlitz. Est Shoreditch small batch, dolor Schlitz sapiente
            twee stumptown ex. Duis Carles pickled, cornhole Thundercats{" "}
            {`McSweeney's`} minim PBR vegan Tumblr irony. Kogi eu Thundercats,
            sed scenester before they sold out et aesthetic.
          </p>
          <p className="leading-7 text-sm text-[#212121] flex items-center justify-center">
            Bushwick Schlitz. Est Shoreditch small batch, dolor Schlitz sapiente
            twee stumptown ex. Duis Carles pickled, cornhole Thundercats{" "}
            {`McSweeney's`} minim PBR vegan Tumblr irony. Kogi eu Thundercats,
            sed scenester before they sold out et aesthetic.
          </p>
          <div className="space-y-4">
            <div className="bg-[url(https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/uploads/2016/10/image-profile.jpg)] h-80 bg-cover relative rounded-md overflow-hidden font-medium">
              <div className=" absolute bottom-0 bg-[rgba(78_0_122/0.8)] w-full p-4 px-8 flex items-center justify-between text-white">
                <h1>Create your profile</h1>
                <FaAngleRight />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[url(https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/uploads/2016/10/image-CV.jpg)] h-80 bg-cover relative rounded-md overflow-hidden font-medium">
              <div className=" absolute bottom-0 bg-[rgba(78_0_122/0.8)] w-full p-4 px-8 flex items-center justify-between text-white">
                <h1>Upload your CV</h1>
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4 mt-10 grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 gap-4">
        <Recentjobs />

        <div>
          <div className="border-b pb-2 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Featured Jobs</h1>

            <div className="flex items-center gap-4">
              <button className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300">
                <FaAngleLeft />
              </button>
              <button className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300">
                <FaAngleRight />
              </button>
            </div>
          </div>
          <div className="border mt-4">
            <div className="p-4 hover:bg-gray-100 transition-all duration-300 border-b">
              <h1 className="uppercase text-xl font-semibold mb-2">
                Sales & Marketing Coordinator
              </h1>

              <div className="space-y-2 mt-4">
                <h2 className="flex items-center gap-2 text-gray-800">
                  <FaGlobeAsia />
                  <span className="font-semibold">Germany, Hanover</span>
                </h2>

                <h2 className="flex items-center gap-2 text-gray-800">
                  <FaLock className="text-red-500" />
                  <span>Expired</span>
                </h2>
                <h2 className="flex items-center gap-2 text-gray-800">
                  <CiMoneyBill />
                  <span>$31000</span>
                </h2>
                <h2 className="flex items-center gap-2 text-gray-800">
                  <CiClock2 className="text-green-600" />
                  <span>Full Time</span>
                </h2>
              </div>

              <div className="flex items-center justify-end">
                <button className="uppercase border-2 px-4 py-2 rounded-md border-[#4e007a] hover:bg-[#4e007a] transition-all duration-300 hover:text-white font-semibold text-sm tracking-widest">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-4">
            <button className="px-6 py-2  hover:bg-[#4e007a] border-2 border-[#4e007a] transition-all duration-300 tracking-wide font-semibold hover:text-white rounded-md">
              View More
            </button>
          </div>
        </div>
      </section>

      <section className="p-4 mt-10 max-w-7xl mx-auto">
        <div className="border-b pb-2 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Job of Interest</h1>

          <div className="flex items-center gap-4">
            <button className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300">
              <FaAngleLeft />
            </button>
            <button className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300">
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 gap-4">
          <div className="bg-[#4e007a] p-4 w-full rounded-md text-white space-y-2">
            <h1 className="text-xl">Sales & Marketing Coordin...</h1>
            <h2 className="flex items-center gap-2">
              <IoLocationOutline />
              <span>Germany, Hanover</span>
            </h2>

            <h2>$31000</h2>
          </div>
          <div className="bg-[#4e007a] p-4 w-full rounded-md text-white space-y-2">
            <h1 className="text-xl">Sales & Marketing Coordin...</h1>
            <h2 className="flex items-center gap-2">
              <IoLocationOutline />
              <span>Germany, Hanover</span>
            </h2>

            <h2>$31000</h2>
          </div>
          <div className="bg-[#4e007a] p-4 w-full rounded-md text-white space-y-2 hidden xl:block">
            <h1 className="text-xl">Sales & Marketing Coordin...</h1>
            <h2 className="flex items-center gap-2">
              <IoLocationOutline />
              <span>Germany, Hanover</span>
            </h2>

            <h2>$31000</h2>
          </div>
        </div>
      </section>

      <section className=" bg-gray-100 mt-20">
        <div className="p-4 max-w-7xl mx-auto">
          <div className="border-b pb-2 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Job of Category</h1>

            <div className="flex items-center gap-4">
              <button className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300">
                <FaAngleLeft />
              </button>
              <button className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300">
                <FaAngleRight />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
            <div className="bg-white border rounded-md p-4 flex gap-2">
              <h1 className="text-white bg-[#4e007a] flex items-center justify-center p-2 text-4xl font-bold w-20 rounded-md">
                D
              </h1>

              <div>
                <h2 className="text-xl">Digital</h2>
                <p className="text-[#4e007a]">2 Positions</p>
                <button className="hover:text-[#4e007a]">View</button>
              </div>
            </div>
            <div className="bg-white border rounded-md p-4 flex gap-2">
              <h1 className="text-white bg-[#4e007a] flex items-center justify-center p-2 text-4xl font-bold w-20 rounded-md">
                D
              </h1>

              <div>
                <h2 className="text-xl">Digital</h2>
                <p className="text-[#4e007a]">2 Positions</p>
                <button className="hover:text-[#4e007a]">View</button>
              </div>
            </div>
            <div className="bg-white border rounded-md p-4 flex gap-2">
              <h1 className="text-white bg-[#4e007a] flex items-center justify-center p-2 text-4xl font-bold w-20 rounded-md">
                D
              </h1>

              <div>
                <h2 className="text-xl">Digital</h2>
                <p className="text-[#4e007a]">2 Positions</p>
                <button className="hover:text-[#4e007a]">View</button>
              </div>
            </div>
            <div className="bg-white border rounded-md p-4 flex gap-2">
              <h1 className="text-white bg-[#4e007a] flex items-center justify-center p-2 text-4xl font-bold w-20 rounded-md">
                D
              </h1>

              <div>
                <h2 className="text-xl">Digital</h2>
                <p className="text-[#4e007a]">2 Positions</p>
                <button className="hover:text-[#4e007a]">View</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-[112px] min-h-[50vh] overflow-y-hidden pb-[90px] bg-[rgba(78,0,122,0.6)] xl:px-40">
        <div className="z-20 grid grid-cols-1 md:grid-cols-2 relative place-items-center">
          <div className="hidden md:block"></div>
          <div className="text-white space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">
                Recruitment Agency for Mobile
              </h1>

              <h3>Continue your job hunt on the go.</h3>
            </div>

            <p>
              Cosby sweater plaid shabby chic kitsch pour-over ex. Try-hard
              fanny pack mumblecore cornhole cray scenester. Assumenda narwhal
              occupy, Blue Bottle nihil culpa fingerstache. Meggings kogi vinyl
              meh, food truck banh mi Etsy magna {`90's`} duis typewriter banjo
              organic leggings Vice.
            </p>
          </div>
        </div>

        <div className="bg-inherit absolute left-0 top-0 z-[1]"></div>
        <div
          className="h-[200%] absolute inset-0 bg-fixed z-[-1] bg-cover"
          style={{
            backgroundImage:
              "url('https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/uploads/2016/10/bg-home-parallax1.jpg')",
            backgroundPosition: "50% 0",
          }}
        ></div>
      </section>

      <section className="max-w-7xl mx-auto my-10">
        <h1 className="text-3xl text-center font-semibold text-[#4e007a]">
          What Our Users Say
        </h1>

        <div className="my-10">
          <div className="flex items-center justify-center">
            <div className="w-[500px] relative">
              <div>
                <p className="text-sm text-center">
                  Really good. I am completely blown away. Recruitment Agency
                  Theme has got everything I need. Not able to tell you how
                  happy I am with Recruitment Agency Theme.
                </p>

                <div className="flex items-center justify-center mt-8 flex-col gap-2">
                  <div className="h-28 w-28 rounded-full overflow-hidden relative border-8 border-gray-200">
                    <Image
                      src={
                        "https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/uploads/2016/11/Testimonial_6-300x300.jpg"
                      }
                      alt="photo"
                      fill
                    />
                  </div>
                  <h1 className="text-xl">Eddy U</h1>
                  <p className="text-sm text-gray-600">CEO Pariatur, Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <button className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300">
            <FaAngleLeft />
          </button>
          <button className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300">
            <FaAngleRight />
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-10 bg-gray-100">
        <div className="border-b pb-2 flex items-center justify-between p-10">
          <h1 className="text-xl font-semibold">Latest News</h1>

          <div className="flex items-center gap-4">
            <button className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300">
              <FaAngleLeft />
            </button>
            <button className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300">
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 md:p-10 gap-4">
          <div className="bg-white border rounded-md">
            <div className="p-4 flex items-center gap-4 font-semibold">
              <h1 className="uppercase text-[#4e007a]">Featured</h1>
              <h2 className="text-gray-600">October 20, 2016</h2>
            </div>

            <div className="w-full h-44 relative">
              <Image
                src={
                  "https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/uploads/2016/10/new1-658x221.jpg"
                }
                alt="img"
                fill
              />
            </div>

            <div className="p-4">
              <h2 className="hover:text-[#4e007a] ">
                The SEO/data analyst hybrid: Why you should advocate for
                data-driven decision making in a content-driven field.
              </h2>

              <p className="text-sm mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                quam!
              </p>

              <button className="uppercase text-[#4e007a] mt-2 font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-white border rounded-md hidden md:block">
            <div className="p-4 flex items-center gap-4 font-semibold">
              <h1 className="uppercase text-[#4e007a]">Featured</h1>
              <h2 className="text-gray-600">October 20, 2016</h2>
            </div>

            <div className="w-full h-44 relative">
              <Image
                src={
                  "https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/uploads/2016/10/new1-658x221.jpg"
                }
                alt="img"
                fill
              />
            </div>

            <div className="p-4">
              <h2 className="hover:text-[#4e007a] ">
                The SEO/data analyst hybrid: Why you should advocate for
                data-driven decision making in a content-driven field.
              </h2>

              <p className="text-sm mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                quam!
              </p>

              <button className="uppercase text-[#4e007a] mt-2 font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-white border rounded-md hidden xl:block">
            <div className="p-4 flex items-center gap-4 font-semibold">
              <h1 className="uppercase text-[#4e007a]">Featured</h1>
              <h2 className="text-gray-600">October 20, 2016</h2>
            </div>

            <div className="w-full h-44 relative">
              <Image
                src={
                  "https://demo.cmssuperheroes.com/themeforest/wp-recruitment/wp-content/uploads/2016/10/new1-658x221.jpg"
                }
                alt="img"
                fill
              />
            </div>

            <div className="p-4">
              <h2 className="hover:text-[#4e007a] ">
                The SEO/data analyst hybrid: Why you should advocate for
                data-driven decision making in a content-driven field.
              </h2>

              <p className="text-sm mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                quam!
              </p>

              <button className="uppercase text-[#4e007a] mt-2 font-semibold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#4e007a] py-20 text-white">
        <h1 className="text-center font-semibold text-xl">
          Frequently Asked Questions
        </h1>

        <FaqAccordian />
      </section>
    </>
  );
}
