"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Slider1 from "@assets/image/image.png";
import Slider2 from "@assets/image/image.png";
import Slider3 from "@assets/image/image.png";
import Slider4 from "@assets/image/image.png";
import Adv1 from "@assets/image/image-1.png";
import Adv2 from "@assets/image/image-2.png";

import Next from "@assets/image/next.png";
import Prev from "@assets/image/prev.png";

import Image from "next/image";
import { useRef } from "react";

export default function MultipleSwiper() {
  const swiperRef = useRef<any>(null);

  const MENU_ITEMS = [Slider1, Slider2, Slider3, Slider4];

  return (
    <div className="bg-[#131415] pt-6 pb-0 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 xl:pt-16 xl:pb-16">
      <div className="w-[80%] mx-auto flex flex-col gap-2 mb-4">
        <div className="flex items-center justify-between">
          <span
            style={{ color: "var(--color-yellow)", fontStyle: "italic" }}
            className="font-black md:text-xl"
          >
            NFT DROPS CALENDAR
          </span>
          <div className="flex gap-2">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <Image src={Prev} alt="Prev" width={30} height={30} />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <Image src={Next} alt="Next" width={30} height={30} />
            </button>
          </div>
        </div>
      </div>

      <div
        className="
    w-[80%] mx-auto 
    h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] 
    flex flex-col lg:flex-row gap-4
    items-stretch
  "
      >
        <div className="w-full lg:w-2/3 h-full">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            modules={[Pagination]}
            className="w-full h-full"
          >
            {MENU_ITEMS.map((slide, idx) => (
              <SwiperSlide
                key={idx}
                className="w-full h-full flex justify-center items-center"
              >
                <Image
                  src={slide}
                  alt={`Slide ${idx + 1}`}
                  width={1000}
                  height={800}
                  className="w-full h-full object-cover rounded-md"
                  priority={idx === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full lg:w-1/3 h-full flex flex-row sm:flex-col gap-4">
          <div className="flex-1 overflow-hidden rounded-md">
            <Image
              src={Adv1}
              alt="Adv1"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 overflow-hidden rounded-md">
            <Image
              src={Adv2}
              alt="Adv2"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
