import React from "react";
import SingleSwiper from "./SIngleSwiper";
import MultipleSwiper from "./MutipleSwiper";

interface SwiperComponentProps {
  type?: "single" | "multiple";
}

export default function SwiperComponent({
  type = "single",
}: SwiperComponentProps) {
  return <>{type === "single" ? <SingleSwiper /> : <MultipleSwiper />}</>;
}
