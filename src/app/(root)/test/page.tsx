import { FaAngleLeft, FaAngleRight, FaLock } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { CiClock2, CiMoneyBill } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

export default function Test() {
  return (
    <>
      <section className="mt-10 p-8 z-10 max-w-7xl mx-auto">
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
        <div>
          <div className="border-b pb-2 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Recent Jobs</h1>

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
                  <CiMoneyBill />
                  <span>$27500</span>
                </h2>
                <h2 className="flex items-center gap-2 text-gray-800">
                  <CiClock2 className="text-yellow-600" />
                  <span>Part Time</span>
                </h2>
              </div>

              <div className="flex items-center justify-end">
                <button className="uppercase border-2 px-4 py-2 rounded-md border-[#4e007a] hover:bg-[#4e007a] transition-all duration-300 hover:text-white font-semibold text-sm tracking-widest">
                  View More
                </button>
              </div>
            </div>

            <div className="p-4 hover:bg-gray-100 transition-all duration-300">
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
                  <CiClock2 className="text-yellow-600" />
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
            <button className="px-6 py-2  bg-[#4e007a] text-white transition-all duration-300 tracking-wide font-semibold rounded-md">
              Load More
            </button>
          </div>
        </div>

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
        </div>
      </section>

      <section className="p-4 bg-gray-100"></section>
    </>
  );
}
