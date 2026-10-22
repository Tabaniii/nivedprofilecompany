import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCurtain } from "@/components/layout/HeroCurtain";
import { Hero } from "@/components/sections/Hero";
import { MakeItKnown } from "@/components/sections/MakeItKnown";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-blue-500/20 selection:text-blue-500">
      <Navbar />
      <main id="main-content" className="flex-1">
        <div className="relative">
          <HeroCurtain>
            <Hero />
          </HeroCurtain>
          <MakeItKnown />
        </div>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
