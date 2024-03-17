import { CiClock2, CiMoneyBill } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight, FaGlobeAsia, FaLock } from "react-icons/fa";

export default function Recentjobs() {
  return (
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
  );
}
