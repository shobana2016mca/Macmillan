import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
     
      {/* <div className="relative h-80 w-full bg-purple-900 opacity-80 blur-sm">
        <Image src={"/aboutbg.jpg"} alt="img" fill />
      </div> */}
      
      <section className="relative pt-[112px] min-h-[50vh] overflow-y-hidden pb-[90px] bg-[rgba(78,0,122,0.6)] xl:px-40">
        <div className="z-20 grid grid-cols-1 md:grid-cols-1 relative place-items-center">
          
          <div className="text-white text-center">
            <div className="pr-30">
              <h1 className="text-5xl font-bold">
                About us
              </h1>

             
            </div>

           
          </div>
        </div>

        <div className="bg-inherit absolute left-0 top-0 z-[1]"></div>
        <div
          className="h-[200%] absolute inset-0 bg-fixed z-[-1] bg-cover"
          style={{
            backgroundImage:
              "url('/aboutbg.jpg')",
            backgroundPosition: "50% 0",
          }}
        ></div>
      </section>

   
 
{/* <div className="grid grid-rows-3 grid-flow-col-2 gap-4">
  <div className="row-start-2 row-span-2">01</div>
  <div className="row-end-3 row-span-2">02</div>
  
</div> */}
<div className="flex flex-wrap items-center p-8">
  
  <div className="w-full md:w-1/2 p-4">
    <h2 className="text-xl md:text-3xl lg:text-3xl font-bold mb-4">About Macmillan HR</h2>
    <h2 className="text-xl md:text-3xl lg:text-3xl font-bold mb-4">Helping people all around the world bag their dream job.
    </h2>
    <p className="text-base md:text-sm lg:text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
    <p className="text-base md:text-sm lg:text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
  </div>
  <div className="w-full md:w-1/2 p-4">
  <Image src={"/MapsAboutUs.jpg"}  height={800} width={800} alt="img"/>
  </div>
</div>
{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
  <div className="flex flex-col sm:flex-row">
  <div className="bg-gray-200 p-4 w-20">Column 1</div>
  <div className="bg-gray-200 p-4 w-80">Column 2 Column 2 Column 2 </div>
</div>
<div className="flex flex-col sm:flex-row">
  <div className="bg-gray-200 p-4 w-30">Column 1</div>
  <div className="bg-gray-200 p-4 w-70">Column 2 Column 2 Column 2</div>
</div>
<div className="flex flex-col sm:flex-row">
  <div className="bg-gray-200 p-4 w-30">Column 1</div>
  <div className="bg-gray-200 p-4 w-70">Column 2 Column 2 Column 2</div>
</div>  
</div> */}
<div className="grid grid-cols-1 md:grid-cols-3 p-10">
  <div className="bg-white-200 p-4 border-r border-gray"><div className="flex items-center rounded-lg p-2">
  <div className="mr-2">
  <Image src={"/About-Icon-6.png"}  height={200} width={200} alt="img"/>
  </div>
  <div>
    <p className="text-lg font-semibold">
JOB POSTING</p>
    <p className="text-sm text-gray-500">Pellentesque posuere in erat sed tempor. Mauris lectus lorem, vehicula in sapien id, mattis hendrerit elit.</p>
  </div>
</div>
</div>
<div className="bg-white-200 p-4 border-r border-gray"><div className="flex items-center rounded-lg p-2  border-gray-300 shadow-gray-500">
  <div className="mr-2">
  <Image src={"/About-Icon-5.png"}  height={200} width={200} alt="img"/>
  </div>
  <div>
    <p className="text-lg font-semibold">
JOB APPLICATION</p>
    <p className="text-sm text-gray-500">Pellentesque posuere in erat sed tempor. Mauris lectus lorem, vehicula in sapien id, mattis hendrerit elit.</p>
  </div>
</div>
</div>
<div className="bg-white-200 p-4"><div className="flex items-center rounded-lg p-2  border-gray-300 shadow-gray-500">
  <div className="mr-2">
  <Image src={"/About-Icon-4.png"}  height={200} width={200} alt="img"/>
  </div>
  <div>
    <p className="text-lg font-semibold">
CV UPLOAD</p>
    <p className="text-sm text-gray-500">Pellentesque posuere in erat sed tempor. Mauris lectus lorem, vehicula in sapien id, mattis hendrerit elit.</p>
  
  </div>
</div>
</div>
<div className="bg-white-200 p-4 border-r border-gray"><div className="flex items-center rounded-lg p-2  border-gray-300 shadow-gray-500">
  <div className="mr-2">
  <Image src={"/About-Icon-3.png"}  height={200} width={200} alt="img"/>
  </div>
  <div>
    <p className="text-lg font-semibold">
PROFILES</p>
    <p className="text-sm text-gray-500">Pellentesque posuere in erat sed tempor. Mauris lectus lorem, vehicula in sapien id, mattis hendrerit elit.</p>
  
  </div>
</div>
</div>
<div className="bg-white-200 p-4 border-r border-gray"><div className="flex items-center rounded-lg p-2  border-gray-300 shadow-gray-500">
  <div className="mr-2">
  <Image src={"/About-Icon-4.png"}  height={200} width={200} alt="img"/>
  </div>
  <div>
    <p className="text-lg font-semibold">FIND JOBS</p>
    <p className="text-sm text-gray-500">Pellentesque posuere in erat sed tempor. Mauris lectus lorem, vehicula in sapien id, mattis hendrerit elit.</p>
  
  </div>
</div>
</div>
<div className="bg-white-200 p-4"><div className="flex items-center rounded-lg p-2  border-gray-300 shadow-gray-500">
  <div className="mr-2">
  <Image src={"/About-Icon-1.png"}  height={200} width={200} alt="img"/>
  </div>
  <div>
    <p className="text-lg font-semibold">INDUSTRY SEARCH</p>
    <p className="text-sm text-gray-500">Pellentesque posuere in erat sed tempor. Mauris lectus lorem, vehicula in sapien id, mattis hendrerit elit.</p>
  
  </div>
</div>
</div>
  {/* <div className="bg-gray-200 p-4">Column 2</div>
  <div className="bg-gray-200 p-4">Column 3</div>
   */}
  
</div>

{/* <div className="flex items-center bg-gray-200 rounded-lg p-4 border border-gray-300 shadow-gray-500">
  <div className="mr-4">
  <Image src={"/About-Icon-1.png"}  height={80} width={80} alt="img"/>
  </div>
  <div>
    <p className="text-lg font-semibold">Your Text Here</p>
    <p className="text-sm text-gray-500">Additional Description</p>
  </div>
</div> */}


    </div>

  
    
  );
}
