import assets from "./assets/assets";
import AboutManage from "./components/AboutManage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Slider from "./components/Slider";
import Work from "./components/Work";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Navbar />
        <Header />
        <Image
          src={assets.bgTabletPattern}
          alt="bgTabletPattern"
          className="absolute -top-52 -z-30 -right-44"
        />
        <Image
          src={assets.bgTabletPattern}
          alt="bgTabletPattern"
          className="absolute sm:top-[48%] -z-40 sm:-left-[30%] h-[600px] object-contain top-[10%] -right-[70%]"
        />
        <AboutManage />
        <Slider />
        <Work />
        <Footer />
      </div>
    </>
  );
}
