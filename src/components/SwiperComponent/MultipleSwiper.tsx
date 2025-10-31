// "use client";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import Adv1 from "@assets/image/image-1.png";
// import Adv2 from "@assets/image/image-2.png";
// import {
//   default as Slider1,
//   default as Slider2,
//   default as Slider3,
//   default as Slider4,
// } from "@assets/image/image.png";

// import Next from "@assets/image/next.png";
// import Prev from "@assets/image/prev.png";

// import Image from "next/image";
// import { useRef } from "react";

// export default function MultipleSwiper() {
//   const swiperRef = useRef<any>(null);

//   const MENU_ITEMS = [Slider1, Slider2, Slider3, Slider4];
//   return (
//     <div className="bg-[#131415] max-[100%] pt-6 pb-0 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12 xl:pt-16 xl:pb-16">
//       <div
//         className="
// 			w-[80%] mx-auto
// 			flex flex-col lg:flex-row gap-4
// 			items-stretch
// 		"
//       >
//         <div className="w-full lg:w-1/2 h-full flex flex-col">
//           <div className="flex justify-between mb-2 shrink-0">
//             <span
//               style={{ color: "var(--color-yellow)", fontStyle: "italic" }}
//               className="font-black md:text-xl items-center"
//             >
//               NFT DROPS CALENDAR
//             </span>
//             <div className="flex gap-2">
//               <button onClick={() => swiperRef.current?.slidePrev()}>
//                 <Image
//                   src={Prev}
//                   alt="Prev"
//                   width={30}
//                   height={30}
//                   className="object-cover object-center rounded-md"
//                 />
//               </button>
//               <button onClick={() => swiperRef.current?.slideNext()}>
//                 <Image
//                   src={Next}
//                   alt="Next"
//                   width={30}
//                   height={30}
//                   className="object-cover object-center rounded-md"
//                 />
//               </button>
//             </div>
//           </div>

//           <div className="flex-1 min-h-0 w-full">
//             <Swiper
//               onSwiper={(swiper) => (swiperRef.current = swiper)}
//               slidesPerView={1}
//               centeredSlides={true}
//               loop={true}
//               spaceBetween={30}
//               modules={[Pagination]}
//               className="w-full h-full"
//             >
//               {MENU_ITEMS.map((slide, idx) => (
//                 <SwiperSlide key={idx} className="w-full h-full">
//                   <div className="w-full h-full rounded-md overflow-hidden">
//                     <Image
//                       src={slide}
//                       alt={`Slide ${idx + 1}`}
//                       width={800}
//                       height={800}
//                       className="w-full h-full object-cover"
//                       priority={idx === 0}
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 h-full flex flex-col lg:flex-row gap-4">
//           <div className="flex-1 flex flex-col h-full">
//             <span
//               style={{ color: "var(--color-yellow)", fontStyle: "italic" }}
//               className="font-black md:text-xl mb-2 shrink-0"
//             >
//               HOT NFT
//             </span>
//             {/* Giới hạn chiều cao để bằng với Swiper container */}
//             <div
//               className="flex-1 min-h-0 w-full rounded-md overflow-hidden"
//               style={{ maxHeight: "100%" }}
//             >
//               <Image
//                 src={Adv1}
//                 alt="Adv1"
//                 width={600}
//                 height={600}
//                 className="w-full h-full object-cover"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </div>
//           </div>

//           <div className="flex-1 flex flex-col h-full">
//             <span
//               style={{ color: "var(--color-yellow)", fontStyle: "italic" }}
//               className="font-black md:text-xl mb-2 shrink-0"
//             >
//               PROMOTION
//             </span>
//             {/* Giới hạn chiều cao để bằng với Swiper container */}
//             <div
//               className="flex-1 min-h-0 w-full rounded-md overflow-hidden"
//               style={{ maxHeight: "100%" }}
//             >
//               <Image
//                 src={Adv2}
//                 alt="Adv2"
//                 width={600}
//                 height={600}
//                 className="w-full h-full object-cover"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Adv1 from "@assets/image/image-1.png";
import Adv2 from "@assets/image/image-2.png";
import {
  default as Slider1,
  default as Slider2,
  default as Slider3,
  default as Slider4,
} from "@assets/image/image.png";

import Next from "@assets/image/next.png";
import Prev from "@assets/image/prev.png";

import Image from "next/image";
import { useRef } from "react";

export default function MultipleSwiper() {
  const swiperRef = useRef<any>(null);

  const MENU_ITEMS = [Slider1, Slider2, Slider3, Slider4];
  return (
    <div className="w-full bg-[#131415] py-10 sm:py-12 md:py-16">
      <div className="w-[80%] mx-auto">
        <div
          className="
            h-[45vh] lg:h-[35vh] xl:h-[40vh]
            flex flex-col lg:flex-row gap-4 items-stretch
          "
        >
          <div className="w-full lg:w-1/2 flex flex-col h-full">
            <div className="flex justify-between mb-2 shrink-0">
              <span
                style={{ color: "var(--color-yellow)", fontStyle: "italic" }}
                className="font-black md:text-xl items-center"
              >
                NFT DROPS CALENDAR
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

            <div className="flex-1 min-h-0 w-full">
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
                  <SwiperSlide key={idx} className="w-full h-full">
                    <div className="w-full h-full rounded-md overflow-hidden">
                      <Image
                        src={slide}
                        alt={`Slide ${idx + 1}`}
                        width={800}
                        height={800}
                        className="w-full h-full object-cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        priority={idx === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-row gap-4 h-full md:mt-0 mt-10">
            <div className="flex-1 flex flex-col h-full min-h-0">
              <span
                style={{ color: "var(--color-yellow)", fontStyle: "italic" }}
                className="font-black md:text-xl items-center"
              >
                HOT NFT
              </span>
              <div className="flex-1 min-h-0 w-full rounded-md overflow-hidden">
                <Image
                  src={Adv1}
                  alt="Adv1"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col h-full min-h-0">
              <span
                style={{ color: "var(--color-yellow)", fontStyle: "italic" }}
                className="font-black md:text-xl items-center"
              >
                PROMOTION
              </span>
              <div className="flex-1 min-h-0 w-full rounded-md overflow-hidden">
                <Image
                  src={Adv2}
                  alt="Adv2"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
