"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Slider1 from "@assets/image/Slider-1.png";
import Slider2 from "@assets/image/Slider-2.png";
import Slider3 from "@assets/image/Slider-3.png";
import Slider4 from "@assets/image/Slider-4.png";
import Slider5 from "@assets/image/Slider-5.png";

import Next from "@assets/image/next.png";
import Prev from "@assets/image/prev.png";

import Image from "next/image";
import { useRef } from "react";

export default function SingleSwiper() {
  const swiperRef = useRef<any>(null);

  const MENU_ITEMS = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider1,
    Slider3,
  ];

  return (
    <div className="bg-[#131415] pt-6 pb-0 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 xl:pt-16 xl:pb-16">
      <div className="w-[80%] mx-auto flex flex-col gap-2 mb-4">
        <div className="flex items-center justify-between">
          <span
            style={{ color: "var(--color-yellow)", fontStyle: "italic" }}
            className="font-black md:text-xl"
          >
            NEW NFT COLLECTIONS
          </span>

          <div className="flex gap-2">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <Image
                src={Prev}
                alt="Prev"
                width={30}
                height={30}
                className="object-cover object-center rounded-md"
              />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <Image
                src={Next}
                alt="Next"
                width={30}
                height={30}
                className="object-cover object-center rounded-md"
              />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={6}
        loop={true}
        spaceBetween={10}
        modules={[Pagination]}
        className="w-[80%] mx-auto"
        breakpoints={{
          320: { spaceBetween: 10 },
          640: { spaceBetween: 15 },
          768: { spaceBetween: 20 },
          1024: { spaceBetween: 25 },
          1280: { spaceBetween: 30 },
        }}
      >
        {MENU_ITEMS.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className="relative w-full h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[35vh]"
          >
            <Image
              src={slide}
              alt={`Slide ${idx + 1}`}
              width={300}
              className="object-contain object-center rounded-md"
              priority={idx === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
