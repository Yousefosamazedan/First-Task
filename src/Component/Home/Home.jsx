import img from "../../assets/home/avater.svg";
import MainHeader from "../MainHeaderLight/MainHeader";

export default function Home() {
  return (
    <div>
      <img src={img} className="w-full md:w-1/3  mx-auto mb-6" alt="avater-image" />
      <MainHeader>start framework</MainHeader>
      <p className="text-white text-center mt-6 text-sm">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
