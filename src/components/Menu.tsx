"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { useRef, useState, useEffect } from "react";

export default function Page() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  
  useEffect(() => {
    if (isTransitioning) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isTransitioning]);

  const handleNavigate = (id: string) => {
    setIsTransitioning(true); 
    closeRef.current?.click(); 

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      } else {
        window.location.hash = `#${id}`;
      }

      setTimeout(() => {
        setIsTransitioning(false); 
      }, 500); 
    }, 400); 
  };

  return (
    <div className="p-2 rounded-md relative">

     
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center transition-all duration-300">
          <span className="text-white text-xl animate-pulse">Hang on...</span>
        </div>
      )}

      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button ref={closeRef}>Menu</Button>
        </DrawerTrigger>

        <DrawerContent className="pt-10 rounded-l-3xl">
          <DrawerHeader className="gap-3">
            <Button onClick={() => handleNavigate("intro")}>Introduction</Button>
            <Button onClick={() => handleNavigate("projects")}>Projects</Button>
            <Button onClick={() => handleNavigate("about")}>About Me</Button>
            <Button onClick={() => handleNavigate("contacts")}>Contact Me</Button>
          </DrawerHeader>
          <DrawerFooter className="flex flex-col items-start">
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
