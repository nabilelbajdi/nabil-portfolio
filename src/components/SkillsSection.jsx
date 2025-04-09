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
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-700 dark:text-zinc-300">
              My Skills
            </h2>
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"></span>
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
              className="bg-white dark:bg-zinc-900/90 rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 relative z-40"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-500 bg-clip-text text-transparent">
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
      </div>
    </section>
  );
} 