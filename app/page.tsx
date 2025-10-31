import CustomButton from "@/components/Base/button-custom-component";
import MainSlider from "@/components/MainSlider";
import MenuBar from "@/components/MenuBar";
import SwiperComponent from "@/components/SwiperComponent";
import Image from "next/image";

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
