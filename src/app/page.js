
import styles from "./page.module.css";
import Mainsection from '@/Home/MainSection/MainSection'
import WhyChooseUs from '@/Home/whyChooseUs/whyChooseUs'
import CardSlider from '@/Home/CardSlider/CardSlider'
import VosoCarousel from "@/Home/vosocarousel/Vosocarousel";
import Vosopage from "@/Home/Vosofirstpage/Vosopage";

export default function Home() {
  return (
    <div>
      {/* <h1>home page</h1>/ */}
      <Vosopage/>
      <Mainsection/>
      <VosoCarousel/>
      <WhyChooseUs/>
      <CardSlider/>
  
    </div>
  );
}
