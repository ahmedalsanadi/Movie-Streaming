import TrendingSection from "@/components/TrendingSection"
import Welcome from "@/components/Welcome"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Welcome />
      <TrendingSection />
    </div>
  )
}
