"use client";

import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { useState } from "react";

export default function Testimonial() {
  const [mySwiper, setMySwiper] = useState<SwiperCore>();

  return (
    <>
      <div className="my-10">
        <div className="flex items-center justify-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
            }}
            loop={true}
            className="mySwiper"
            onInit={(e) => setMySwiper(e)}>
            {[1, 2, 3, 4, 5].map((idx) => (
              <SwiperSlide key={idx}>
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
                    <h1 className="text-xl">Eddy U {idx + 1}</h1>
                    <p className="text-sm text-gray-600">CEO Pariatur, Ltd</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-center">
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
    </>
  );
}
