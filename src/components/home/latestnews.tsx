"use client";

import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { useState } from "react";

export default function LatestNews() {
  const [mySwiper, setMySwiper] = useState<SwiperCore>();

  return (
    <>
      <div className="border-b pb-2 flex items-center justify-between p-10">
        <h1 className="text-xl font-semibold">Latest News</h1>

        <div className="flex items-center gap-4">
          <button
            className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300"
            onClick={() => mySwiper?.slidePrev()}>
            <FaAngleLeft />
          </button>
          <button
            className="bg-[#4e007a] rounded-[4px] p-2 text-white hover:bg-black transition-all duration-300"
            onClick={() => mySwiper?.slideNext()}>
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="my-4  p-4 md:p-10 gap-4">
        <Swiper
          navigation={true}
          slidesPerView={2}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={true}
          modules={[Autoplay]}
          loop={true}
          onInit={(e) => setMySwiper(e)}
          className="w-full">
          {[1, 2, 3, 4, 5].map((idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white border rounded-md">
                <div className="p-4 flex items-center gap-4 font-semibold">
                  <h1 className="uppercase text-[#4e007a]">Featured</h1>
                  <h2 className="text-gray-600">October 20, 201{idx}</h2>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet, quam!
                  </p>

                  <button className="uppercase text-[#4e007a] mt-2 font-semibold">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
