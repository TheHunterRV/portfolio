"use client";
import FadeInSection from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Page() {
  return (
    <FadeInSection>
      <div
        id="contacts"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold">Contact Me</h1>
          <p className="text-lg  max-w-xl mx-auto">
            Whether you’re looking to collaborate, hire, or just want to say
            hello — I’m always open to a conversation. Let’s connect!
          </p>

          <div className="flex flex-col items-center gap-4 mt-6 w-full">
            <a
              href="mailto:rohitvishwakarma.geek@gmail.com"
              target="_blank"
              className="w-full sm:w-64"
            >
              <Button variant="default" className="w-full gap-2">
                <Mail size={18} /> Email Me
              </Button>
            </a>

            <a
              href="https://wa.me/916297509099"
              target="_blank"
              className="w-full sm:w-64"
            >
              <Button variant="default" className="w-full gap-2">
                <MessageCircle size={18} /> WhatsApp Me
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/rohit-vishwakarma-57b0a6238"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-64"
            >
              <Button variant="default" className="w-full gap-2">
                <Linkedin size={18} /> LinkedIn
              </Button>
            </a>

            <a
              href="https://github.com/TheHunterRV"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-64"
            >
              <Button variant="default" className="w-full gap-2">
                <Github size={18} /> GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
