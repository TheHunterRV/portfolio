"use client";
import FadeInSection from "@/components/FadeInSection";
import SlideInZoom from "@/components/SlideInZoom";
import Image from "next/image";

export default function Page() {
  return (
    <SlideInZoom>
      <div
        id="intro"
        className="flex flex-col md:flex-row md:justify-between justify-center h-dvh p-5 md:p-40  
        transition-opacity duration-1000 ease-in-out"
      >
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-light">
            Hey. I’m <span className="font-bold">Rohit,</span>
          </h3>
          <h1 className="text-4xl font-medium">A FULL-STACK</h1>
          <h1 className="text-5xl font-bold">WEB DEVELOPER</h1>
          <p className="text-2xl font-medium">
            Crafting responsive, full-stack web solutions with clean UI &
            scalable code.
          </p>
        </div>
        <FadeInSection>
          <Image
            src="/images/Intro-img.svg"
            alt="Profile photo"
            height={400}
            width={400}
          />
        </FadeInSection>
      </div>
    </SlideInZoom>
  );
}
