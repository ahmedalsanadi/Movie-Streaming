import TrendingSection from "@/components/TrendingSection"
import Welcome from "@/components/Welcome"
import Image from "next/image"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <div className=" flex flex-col gap-12"> 
      <HeroSection />
      {/* <Welcome /> */}
      <TrendingSection />
    </div>
  )
}
