import AboutMeAnimation from "@/components/ParagraphFadeIn";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-2xl text-center">
        <AboutMeAnimation>
          <h1 className="text-3xl font-bold">About Me</h1>
          <div className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            <p className="mb-6">
              Hi, I’m <span className="font-semibold">Rohit</span> — a web
              developer passionate about crafting seamless digital experiences
              through robust and scalable web solutions.
            </p>
            <p className="mb-6">
              With hands-on experience in both front-end and back-end
              technologies, I specialize in full-stack development using PHP,
              CodeIgniter, and MySQL. I have a strong command of responsive web
              design with HTML, CSS, and JavaScript, along with a focus on clean
              UI implementation and efficient debugging.
            </p>
            <p className="mb-6">
              My development approach is rooted in a solid understanding of the
              MVC architecture and RESTful CRUD systems. I enjoy working in
              collaborative environments where learning, problem-solving, and
              continuous innovation drive the process.
            </p>

            <h2 className="text-xl font-bold mt-10 mb-4">Tech Stack</h2>
            <p className="mb-2">
              <span className="font-medium">Languages & Tools:</span> HTML, CSS,
              JavaScript, Python, Java, PHP, MySQL, CodeIgniter, Git, Visual
              Studio Code, AWS (Basic)
            </p>
            <p>
              <span className="font-medium">Concepts & Patterns:</span>{" "}
              Responsive Design, MVC, Object-Oriented Programming (OOP), CRUD
              Operations
            </p>
          </div>
        </AboutMeAnimation>
      </div>
    </div>
  );
}
