import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCurtain } from "@/components/layout/HeroCurtain";
import { Hero } from "@/components/sections/Hero";
import { MakeItKnown } from "@/components/sections/MakeItKnown";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { getProjects } from "@/lib/server/projects";

export default async function Home() {
  const projects = await getProjects();

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
        <Skills />
        <Projects items={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
