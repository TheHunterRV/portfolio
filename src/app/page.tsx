"use client";
import Intro from "./sections/intro/page";
import About from "./sections/about/page";
import Contact from "./sections/contact/page";
import Projects from "./sections/projects/page";
import Menu from "@/components/Menu";
import { ModeToggle } from "@/components/Theme-button";

// font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20
export default function Home() {
  return (
    <div>
      <div className="fixed top-4 right-4 z-50  rounded-md">
        <Menu />
      </div>
      <div className="fixed top-6 left-6 z-50  rounded-md">
        <ModeToggle />
      </div>
      <Intro />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
