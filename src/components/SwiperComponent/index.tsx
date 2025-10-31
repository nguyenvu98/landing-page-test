import MultipleSwiper from "./MultipleSwiper";
import SingleSwiper from "./SIngleSwiper";

interface SwiperComponentProps {
  type?: "single" | "multiple";
}

export default function SwiperComponent({
  type = "single",
}: SwiperComponentProps) {
  return <>{type === "single" ? <SingleSwiper /> : <MultipleSwiper />}</>;
}
