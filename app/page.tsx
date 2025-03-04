"use client";

import FloatingBar from "@/components/ui/FloatingBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ResearchProject from "@/components/ResearchProjects";
import Certification from "@/components/CertificationsList";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavBar from "@/components/ui/NavBar";

const Home = () => {
  return (
    <main className="h-screen bg-[#000810] flex">
      <NavBar />
      <div className="w-full overflow-y-auto mx-auto overflow-hidden">
        <div className="px-5 sm:px-40">
          <FloatingBar />
          <Hero />
          <About />
          <Projects />
          <ResearchProject/>
          <Certification/>
          <Contact />
        </div>
        <Footer />
      </div>
    </main>

  );
};

export default Home;