"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Layout1 from "@/assets/image/Layout.png";
import Layout2 from "@/assets/image/Layout.png";
import Layout3 from "@/assets/image/Layout.png";
export default function MainSlider() {
  const slides = [Layout1, Layout2, Layout3];

  return (
    <div className="w-full">
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full h-[20vh] sm:h-[40vh] md:h-[50vh] "
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="relative w-full h-full">
              <Image
                src={slide}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={idx === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
