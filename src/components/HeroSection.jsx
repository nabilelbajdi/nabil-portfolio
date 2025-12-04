import { ImageCarousel } from "./carousel";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <p
              className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-4 animate-fade-in opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              Hello, World! I'm
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="inline-block text-gradient animate-gradient-shift bg-[length:200%_auto] leading-tight">
                Nabil El Bajdi
              </span>
            </h1>
            <h2
              className="text-xl sm:text-2xl md:text-3xl text-stone-700 dark:text-zinc-300 mb-8 animate-fade-in opacity-0 font-normal"
              style={{ animationDelay: "0.6s" }}
            >
              AI Developer & Creative Problem Solver
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-stone-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in opacity-0"
              style={{ animationDelay: "0.8s" }}
            >
              I build systems that simplify complexity. Through automation, web development, and AI, I
              make technology smarter and life easier.
            </p>

            {/* Social Media Icons */}
            <div
              className="flex justify-center lg:justify-start gap-5 mb-10 animate-fade-in opacity-0"
              style={{ animationDelay: "0.9s" }}
            >
              <a
                href="https://github.com/nabilelbajdi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nabil-el-bajdi-51726b24b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <div className="w-px h-6 bg-stone-300 dark:bg-zinc-700"></div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Featured Project Carousel */}
          <div
            className="w-full lg:w-1/2 lg:flex-1 animate-fade-in opacity-0"
            style={{ animationDelay: "1.2s" }}
          >
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
