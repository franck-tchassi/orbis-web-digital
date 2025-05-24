import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo"
import GlobalPartners from "@/components/GlobalPartners"
import Hero from "@/components/Hero"
import Process from "@/components/Process"
import Services from "@/components/Services"


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background décoratif (position fixed pour ne pas interférer) */}
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      
      <main className="flex-grow">
        <Hero />
        <GlobalPartners />
        <Services />
        <Process />
        <ShootingStarsAndStarsBackgroundDemo />
      </main>

    </div>
  )
}