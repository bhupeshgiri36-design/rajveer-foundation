import { Hero } from "@/src/components/home/Hero"
import { MissionCards } from "@/src/components/home/MissionCards"
import { AboutSection } from "@/src/components/home/AboutSection"
import { AlbumPreview } from "@/src/components/home/AlbumPreview"
import { ImpactStats } from "@/src/components/home/ImpactStats"
import { HelpCTA } from "@/src/components/home/HelpCTA"

export function Home() {
  return (
    <div>
      <Hero />
      <MissionCards />
      <AboutSection />
      <AlbumPreview />
      <ImpactStats />
      <HelpCTA />
    </div>
  )
}
