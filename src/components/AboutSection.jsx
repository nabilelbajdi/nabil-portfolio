import { Code, GraduationCap, Briefcase } from "lucide-react";
import profileImage from '../assets/images/nabil-profile-3.jpg';

export function AboutSection() {
  return (
    <section id="about" className="py-24 section-padding relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Column */}
          <div className="lg:w-2/5 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-40">
              <div className="rounded-2xl overflow-hidden gradient-border">
                <div className="p-2">
                  <img 
                    src={profileImage}
                    alt="Nabil El Bajdi" 
                    className="rounded-xl object-cover w-full aspect-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:w-3/5 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
              <span className="text-stone-700 dark:text-zinc-300">About Me</span>
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient leading-tight">
              Where Logic Meets Creativity
            </h3>
            
            <div className="text-stone-600 dark:text-zinc-400 space-y-4 mb-10">
              <p>
                I'm a developer who enjoys the sweet spot between <span className="font-semibold">logic</span> and <span className="font-semibold">creativity</span>—where thoughtful code meets meaningful design. Whether it's architecting <span className="font-semibold">backend systems</span>, shaping <span className="font-semibold">clean user flows</span>, or experimenting with <span className="font-semibold">AI</span>, I find joy in building systems that are both <span className="font-semibold">intelligent</span> and <span className="font-semibold">intuitive</span>.
              </p>
              <p>
                I have a background in <span className="font-semibold">DevOps</span>, including a six-month internship as a DevOps engineer, where I developed a strong foundation in <span className="font-semibold">automation</span>, <span className="font-semibold">infrastructure</span>, and <span className="font-semibold">deployment workflows</span>. Right now, I'm diving deeper into <span className="font-semibold">AI</span> and <span className="font-semibold">machine learning</span> through ongoing studies, adding more intelligence to my skill set and exploring how these tools can enhance the products I build.
              </p>
              <p>
                One project I'm especially proud of is <span className="font-semibold">GameGloom</span>, a full-stack web app I created from the ground up to explore the intersection of <span className="font-semibold">gaming</span>, <span className="font-semibold">data</span>, and <span className="font-semibold">AI</span>. It started as a simple idea, and through it, I learned how to turn that idea into something <span className="font-semibold">real</span>, <span className="font-semibold">usable</span>, and <span className="font-semibold">polished</span>. That experience sparked a deeper passion for creating tools that people actually enjoy using.
              </p>
              <p>
                Outside of coding, I'm into <span className="font-semibold">gaming</span>, <span className="font-semibold">fitness</span>, and exploring new <span className="font-semibold">cultures</span>. These help me stay inspired and keep growing, both as a person and a developer.
              </p>
            </div>
            
            {/* TODO: Consider if to include or remove these info cards
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-white/50 dark:bg-zinc-900/90 border border-purple-100 dark:border-white/10 hover:shadow-md transition-shadow">
                <Code className="w-10 h-10 text-purple-600 dark:text-violet-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Development</h4>
                <p className="text-foreground/70 dark:text-zinc-400 text-sm">DevOps engineering with Python and emerging AI skills</p>
              </div>
              
              <div className="p-5 rounded-xl bg-white/50 dark:bg-zinc-900/90 border border-purple-100 dark:border-white/10 hover:shadow-md transition-shadow">
                <GraduationCap className="w-10 h-10 text-purple-600 dark:text-violet-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Education</h4>
                <p className="text-foreground/70 dark:text-zinc-400 text-sm">DevOps Engineering graduate with AI/ML studies</p>
              </div>
              
              <div className="p-5 rounded-xl bg-white/50 dark:bg-zinc-900/90 border border-purple-100 dark:border-white/10 hover:shadow-md transition-shadow">
                <Briefcase className="w-10 h-10 text-purple-600 dark:text-violet-400 mb-4" />
                <h4 className="font-bold text-lg mb-2">Experience</h4>
                <p className="text-foreground/70 dark:text-zinc-400 text-sm">DevOps Engineer internship experience in tech</p>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
} 