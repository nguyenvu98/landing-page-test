"use client";

import React from "react";
import HowToPlay from "@/assets/image/HowToPlay.png";
import Cashback from "@/assets/image/Cashback.png";
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
    <nav className="w-full overflow-x-auto no-scrollbar py-4">
      <div
        className="
          flex 
          items-center 
          justify-center 
          gap-2 
          sm:gap-4 
          md:gap-8 
          lg:gap-24
          xl:gap-36

          px-2 sm:px-4 md:px-6
          whitespace-nowrap
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
              p-2
            "
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
              <Image
                src={item.icon as any}
                alt={item.label}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="mt-1 text-[10px] sm:text-xs text-gray-400 text-center">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
