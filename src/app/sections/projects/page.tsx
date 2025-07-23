"use client";

import FadeInSection from "@/components/FadeInSection";
import FlipSkewUp from "@/components/FlipSkewUp";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 py-20">
      <div className="text-center mb-12">
        <FadeInSection>
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        </FadeInSection>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <FadeInSection>
          <div className="max-w-3xl text-lg leading-relaxed text-center md:text-left px-4">
            <h2 className="text-2xl font-semibold mb-4">
              Employee Management System
            </h2>
            <p className="mb-3">
              Built using <strong>CodeIgniter 4</strong> and{" "}
              <strong>MySQL</strong>, this full-stack web application enables
              secure and efficient management of employee data. Following the
              <strong> MVC pattern</strong>, it ensures clean code organization
              and scalability.
            </p>
            <p className="mb-3">
              The backend features session-based authentication, input
              validation, flash messaging, and database migrations for managing
              tables like <code>emp_details</code> and{" "}
              <code>login_details</code>. It supports complete{" "}
              <strong>CRUD functionality</strong>.
            </p>
            <p>
              The frontend uses responsive HTML/CSS forms with real-time flash
              messages for feedback. Future upgrades include{" "}
              <strong>Bootstrap</strong> integration and modular UI components
              such as a header, footer, and sidebar.
            </p>
          </div>
        </FadeInSection>

        <FlipSkewUp>
          <div className="group p-6 rounded-xl bg-black text-white dark:bg-white dark:text-black transition duration-500 hover:scale-105 hover:shadow-xl">
            <a
              href="https://github.com/TheHunterRV/Employee-Management-System"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <h3 className="text-xl font-medium mb-4 text-center transition-colors duration-300">
                View on GitHub
              </h3>
              <Image
                src="/images/My-projects.png"
                alt="Employee Management System preview"
                width={400}
                height={400}
                className="rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>
        </FlipSkewUp>
      </div>
    </section>
  );
}