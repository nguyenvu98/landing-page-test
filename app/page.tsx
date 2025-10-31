import MainSlider from "@/components/MainSlider";
import MenuBar from "@/components/MenuBar";
import SwiperComponent from "@/components/SwiperComponent";

export default function Home() {
  return (
    <div>
      <MainSlider />
      <MenuBar />
      <SwiperComponent type="single" />
      <SwiperComponent type="multiple" />
    </div>
  );
}
