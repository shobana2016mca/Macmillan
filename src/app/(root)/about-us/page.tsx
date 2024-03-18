import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      AboutUs
      <div className="relative h-80 w-full">
        <Image src={"/hero-bg.jpeg"} alt="img" fill />
      </div>
    </div>
  );
}
