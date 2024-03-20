import Image from "next/image";

export default function ContactUs() {
  return (
    <div>
     
      {/* <div className="relative h-80 w-full bg-purple-900 opacity-80 blur-sm">
        <Image src={"/aboutbg.jpg"} alt="img" fill />
      </div> */}
      
      <div className="flex flex-col relative items-center justify-center h-80 overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500">
  
  <div className="h-full">
  map
  </div>
</div>

<div className="grid grid-rows-2 grid-flow-col gap-4">
  <div className="row-span-2 col-span-2 p-20 w-3/4">Contact us</div>
  <div className="row-span-2 col-span-2 p-20 w-1/4">01</div>
 
</div>


    </div>
  );
}
