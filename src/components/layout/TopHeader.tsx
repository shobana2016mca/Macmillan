import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import { FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="md:mx-20 flex items-center justify-between flex-wrap">
        <h1 className="flex items-center gap-4">
          <IoMdCall />
          <span>+91 1234567890</span>
        </h1>

        <h1 className="flex items-center gap-4">
          <FaEnvelope />
          <span>enquiries@recuritment.com</span>
        </h1>

        <div className="flex items-center gap-4">
          <Link href={"/"} target="_blank">
            <FaFacebook />
          </Link>

          <Link href={"/"} target="_blank">
            <FaTwitter />
          </Link>

          <Link href={"/"} target="_blank">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}
