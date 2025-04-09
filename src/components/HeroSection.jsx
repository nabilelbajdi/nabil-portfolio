import { Button } from "./ui/Button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              Hello, World! I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              <span className="inline-block text-gradient animate-gradient-shift bg-[length:200%_auto]">Nabil</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-stone-700 dark:text-zinc-300 mb-8 animate-fade-in opacity-0 font-normal" style={{ animationDelay: "0.6s" }}>
              AI Developer & Creative Problem Solver
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-stone-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
              I craft elegant, efficient, and user-friendly digital experiences
              that solve real-world problems through clean code and thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
              <Button 
                size="lg" 
                className="gradient-bg font-medium text-base text-white dark:text-gray-900 cursor-pointer"
              >
                View My Work
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-4 h-4 ml-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" className="font-medium text-base cursor-pointer">
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="flex-1 max-w-md lg:max-w-none animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
            <div className="glow relative z-40">
              <div className="gradient-border rounded-2xl">
                <div className="p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                    alt="Developer Workspace" 
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 