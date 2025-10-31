"use client";

import Cashback from "@/assets/image/Cashback.png";
import HowToPlay from "@/assets/image/HowToPlay.png";
import NewImg from "@/assets/image/New.png";
import Race from "@/assets/image/Race.png";
import Roadmaps from "@/assets/image/Roadmaps.png";
import Video from "@/assets/image/Video.png";
import Image from "next/image";

const MENU_ITEMS = [
  { label: "Free To Earn", icon: Cashback },
  { label: "Ranking", icon: Race },
  { label: "Video NFT", icon: Video },
  { label: "How to Buy", icon: HowToPlay },
  { label: "New NFT", icon: NewImg },
  { label: "Roadmaps", icon: Roadmaps },
];

export default function MenuBar() {
  return (
    <nav className="w-full overflow-x-hidden py-4">
      <div className="w-[80%] max-w-full mx-auto px-1 sm:px-2 md:px-4 lg:px-6">
        <div
          className="
          flex 
          items-center 
          justify-center 
            gap-6
          sm:gap-16
          md:gap-20
          lg:gap-28
		  xl:gap-36
          2xl:gap-50

          flex-nowrap
        "
        >
          {MENU_ITEMS.map((item, idx) => (
            <button
              key={idx}
              className="
              flex 
              flex-col 
              items-center 
              justify-center 
              shrink-0
              transition-transform 
              hover:scale-105 
          
            "
            >
              <div className="relative w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12">
                <Image
                  src={item.icon as any}
                  alt={item.label}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="mt-0.5 sm:mt-1 text-[12px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-gray-400 text-center whitespace-nowrap">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
