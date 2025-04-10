import { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
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
      longDescription: "GameGloom is an interactive web application that helps gamers discover new titles based on their preferences and play history. Built with Python backend and React frontend, the platform runs on AWS cloud infrastructure with an RDS PostgreSQL database. The application uses GitHub Actions for CI/CD, ensuring smooth deployments and testing. The platform provides detailed game information, user reviews, and a sophisticated recommendation system.",
      features: [
        "Personalized game recommendations based on user activity",
        "Detailed game information with screenshots and trailers",
        "User-generated reviews and ratings system",
        "Social features to connect with other gamers",
        "Cross-platform game tracking and wishlist functionality"
      ],
      tags: ["Python", "JavaScript", "React", "Tailwind CSS", "PostgreSQL", "AWS", "Nginx", "GitHub Actions"],
      image: "src/assets/images/screenshots/gamegloom/gamegloom-gamepage.jpg",
      additionalImages: [
        "src/assets/images/screenshots/gamegloom/gamegloom-homepage.jpg",
        "src/assets/images/screenshots/gamegloom/gamegloom-category.jpg"
      ],
      demoLink: "https://gamegloom.com",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Mental Health Dashboard",
      description: "Interactive data visualization tool analyzing mental health trends across demographics using Streamlit and Plotly.",
      longDescription: "This dashboard analyzes a comprehensive mental health dataset to identify trends and patterns in mental health experiences across different demographics, regions, and occupations. The interactive dashboard allows users to filter data by various parameters and explore visualizations that reveal insights about global distribution of mental health concerns, correlations between lifestyle factors and outcomes, impact of work environments, and treatment access patterns.",
      features: [
        "Interactive filtering by gender, country, occupation, and time period",
        "Multi-tab organization for exploring different aspects of mental health data",
        "Diverse visualizations including maps, charts, and interactive graphs",
        "Real-time calculations based on filtering choices",
        "Statistical analysis and data insights"
      ],
      tags: ["Python", "Pandas", "Streamlit", "Plotly", "Data Analysis", "Data Visualization", "Statistics"],
      image: "src/assets/images/screenshots/mental-health-dashboard/mental-health-dashboard-sc1.jpg",
      additionalImages: [
        "src/assets/images/screenshots/mental-health-dashboard/mental-health-dashboard-sc2.jpg",
        "src/assets/images/screenshots/mental-health-dashboard/mental-health-dashboard-sc3.jpg"
      ],
      demoLink: "https://mental-health-dashboard.streamlit.app/",
      codeLink: "https://github.com/nabilelbajdi/mental-health-dashboard"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-featured online store with product catalog, secure checkout, and admin dashboard for inventory and analytics.",
      longDescription: "A complete e-commerce solution built from scratch that handles product listings, inventory management, user accounts, and secure payment processing. The platform includes an intuitive admin dashboard, detailed analytics, and a responsive design optimized for all devices.",
      features: [
        "Comprehensive product catalog with advanced filtering",
        "Secure payment processing with multiple gateways",
        "User account management and order history",
        "Inventory tracking and management system",
        "Responsive design for mobile and desktop devices",
        "Admin dashboard with sales analytics"
      ],
      tags: ["React", "Node.js", "MongoDB", "Stripe API", "Redux", "JavaScript", "Tailwind CSS", "JWT Auth"],
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1526570207772-784d36084510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      ],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-24 section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Main content */}
      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div 
          className={`max-w-3xl mx-auto mb-16 transition-all duration-700 ${
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
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient text-center">
            Featured Work
          </h3>
          <p className="text-stone-600 dark:text-zinc-400 text-center mb-12">
            Projects built with thoughtful code, clean structure, and a hint of creativity. Each one of these taught me something new and helped me grow as a developer.
          </p>
        </div>
        
        {/* Projects grid with staggered appearance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onOpenModal={openModal}
            />
          ))}
        </div>
      </div>
      
      {/* Project details modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
} 