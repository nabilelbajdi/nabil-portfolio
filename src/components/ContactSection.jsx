import { Button } from "./ui/Button";

export function ContactSection() {
  const handleContactClick = () => {
    window.open("mailto:nabilelbajdii@gmail.com", "_blank");
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-700 dark:text-zinc-300">
              Contact Me
            </h2>
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-gradient leading-tight">
            Let's Work Together
          </h3>
          <p className="text-stone-600 dark:text-zinc-400 max-w-2xl mx-auto animate-fade-in opacity-0 mb-8" style={{ animationDelay: "0.1s" }}>
            Have a project in mind, something you want to build together, or simply want to connect? 
            Feel free to reach out! I'm always open to a good conversation.
          </p>
          <Button 
            onClick={handleContactClick}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium animate-fade-in opacity-0 px-8 cursor-pointer"
            style={{ animationDelay: "0.2s" }}
          >
            Say Hello!
          </Button>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="mt-12 flex flex-row md:grid md:grid-cols-2 gap-4 md:gap-6 animate-fade-in opacity-0 relative z-40" style={{ animationDelay: "0.3s" }}>
            <div className="text-center flex-1">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-4 h-4 md:w-6 md:h-6 text-foreground/80 dark:text-zinc-300"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-foreground/80 dark:text-zinc-300">Email</h3>
              <p className="text-xs md:text-base text-stone-600 dark:text-zinc-400">nabilelbajdii@gmail.com</p>
            </div>
            
            <div className="text-center flex-1">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 10"
                  className="w-4 h-3 md:w-6 md:h-4"
                >
                  <rect width="16" height="10" fill="#006AA7" />
                  <rect x="5" width="2" height="10" fill="#FECC00" />
                  <rect y="4" width="16" height="2" fill="#FECC00" />
                </svg>
              </div>
              <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 text-foreground/80 dark:text-zinc-300">Location</h3>
              <p className="text-xs md:text-base text-stone-600 dark:text-zinc-400">Stockholm, Sweden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 