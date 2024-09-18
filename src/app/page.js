import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-12"> 
          <HeroSection />
          <TrendingSection />
    </div>
  );
}
