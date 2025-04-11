import { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Plus } from 'lucide-react';

export function ProjectsSection() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Scroll-based animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);
  
  const projects = [
    {
      id: 1,
      title: "GameGloom",
      description: "Interactive platform for discovering video games with personalized recommendations based on user preferences.",
      tags: ["Python", "JavaScript", "React", "Tailwind CSS", "PostgreSQL", "AWS", "Nginx", "GitHub Actions"],
      image: "src/assets/images/screenshots/gamegloom/gamegloom-gamepage.jpg",
      imagePosition: "110% center",
      demoLink: "https://gamegloom.com",
      codeLink: "https://github.com/nabilelbajdi/gameloom-labb3",
      status: "wip"
    },
    {
      id: 2,
      title: "Mental Health Dashboard",
      description: "Interactive data visualization tool analyzing mental health trends across demographics using Streamlit and Plotly.",
      tags: ["Python", "Pandas", "Streamlit", "Plotly", "Data Analysis", "Data Visualization", "Statistics"],
      image: "src/assets/images/screenshots/mental-health-dashboard/mhd-dashboard.jpg",
      imagePosition: "left center",
      demoLink: "https://mental-health-dashboard.streamlit.app/",
      codeLink: "https://github.com/nabilelbajdi/mental-health-dashboard",
      status: "completed"
    },
    {
      id: 3,
      title: "DevOps-Enhanced Resume",
      description: "A modern resume website with comprehensive DevOps practices, automated CI/CD pipeline, and performance monitoring.",
      tags: ["Jekyll", "GitHub Actions", "Docker", "CI/CD", "DevOps", "Ruby", "HTML", "YAML"],
      image: "src/assets/images/screenshots/resume/resume-bg.svg",
      imagePosition: "center center",
      demoLink: "https://nabilelbajdi.github.io/resume/",
      codeLink: "https://github.com/nabilelbajdi/resume/tree/main",
      status: "completed"
    },
    {
      id: 4,
      title: "This Portfolio",
      description: "Yep, this very site. Built with React, styled with Tailwind, and sprinkled with clean code, smart design, and just the right amount of nerdiness.",
      tags: ["React", "Vite", "Tailwind CSS", "JavaScript", "Responsive Design", "Vercel"],
      image: "src/assets/images/logo.png",
      imagePosition: "center center",
      codeLink: "https://github.com/nabilelbajdi/nabil-portfolio",
      status: "youarehere"
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={`max-w-4xl mx-auto mb-16 px-4 transition-all duration-700 ${
            hasAnimated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-700 dark:text-zinc-300">
              My Projects
            </h2>
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient text-center leading-tight">
            Notable Projects
          </h3>
          <p className="text-stone-600 dark:text-zinc-400 text-center max-w-2xl mx-auto">
            Projects built with thoughtful code, clean structure, and a hint of creativity. Each one of these taught me something new and helped me grow as a developer.
          </p>
        </div>
        
        {/* Projects list with hover dimming effect */}
        <div className="max-w-4xl mx-auto project-list px-6">
          {/* Regular projects */}
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-item mb-2"
            >
              <ProjectCard 
                project={project} 
                index={index}
              />
            </div>
          ))}
          
          {/* Coming Soon Project */}
          <div className="project-item mb-2 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            <div className="py-6 -mx-6 px-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Placeholder Image */}
                <div className="md:w-1/3 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-200/40 dark:border-indigo-800/40">
                  <div className="aspect-video relative flex items-center justify-center">
                    <Plus className="w-12 h-12 text-indigo-400 dark:text-indigo-500 opacity-70" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2 text-stone-700 dark:text-zinc-300">
                    More Projects Coming Soon
                  </h3>
                  
                  <p className="text-stone-600 dark:text-zinc-400 text-sm">
                    Stay tuned for more to come! I'm currently working on a machine learning project that applies natural language processing techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 