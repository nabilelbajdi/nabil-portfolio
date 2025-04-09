import { CheckCircle2 } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Full-Stack Development",
      skills: [
        "Python",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "FastAPI",
      ],
    },
    {
      title: "Database & Data Analysis",
      skills: [
        "PostgreSQL",
        "SQLAlchemy",
        "Alembic",
        "Pandas / NumPy",
        "Database Design",
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Docker",
        "GitHub Actions",
        "AWS (EC2, RDS, S3)",
        "Ansible / Terraform",
        "Linux & Bash",
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "PyTorch",
        "Scikit-learn",
        "Matplotlib / Seaborn",
        "Hugging Face",
        "Generative AI (RAG / LLMs)",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-30%] right-[-20%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-purple-500/10 to-blue-500/10 blur-3xl dark:opacity-20 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 dark:to-secondary/10 -z-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              My Skills
            </h2>
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient">
            Technical Expertise
          </h3>
          <p className="text-stone-600 dark:text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Here's my core stack—the tools I use to build full-stack applications, automate workflows, and explore the intersection of development and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-zinc-900/90 rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <h4 className="text-lg font-bold mb-4 text-purple-600 dark:text-purple-400">
                {category.title}
              </h4>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-500 dark:text-green-400 w-4 h-4 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800/30 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Looking for a skilled developer?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                I'm currently available for freelance work and full-time positions.
              </p>
            </div>
            
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white dark:text-zinc-900 font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 