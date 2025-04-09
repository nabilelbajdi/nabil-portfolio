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
      description: "An interactive platform for discovering and rating video games, with personalized recommendations based on user preferences.",
      longDescription: "GameGloom is an interactive web application that helps gamers discover new titles based on their preferences and play history. The platform provides detailed game information, user reviews, and a sophisticated recommendation engine powered by collaborative filtering algorithms.",
      features: [
        "Personalized game recommendations based on user activity",
        "Detailed game information with screenshots and trailers",
        "User-generated reviews and ratings system",
        "Social features to connect with other gamers",
        "Cross-platform game tracking and wishlist functionality"
      ],
      tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Game API"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Real-time weather application with forecast data, location-based services, and interactive visualizations.",
      longDescription: "A comprehensive weather tracking application that provides real-time forecasts, historical weather data, and location-based services. The app features interactive visualizations including radar maps, temperature charts, and precipitation forecasts.",
      features: [
        "Real-time weather data from multiple reliable sources",
        "7-day and hourly forecasts with detailed conditions",
        "Interactive radar and satellite maps",
        "Location-based services with GPS integration",
        "Custom alerts for severe weather conditions"
      ],
      tags: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Fully functional online store with product catalog, shopping cart, and secure checkout functionality.",
      longDescription: "A complete e-commerce solution built from scratch that handles product listings, inventory management, user accounts, and secure payment processing. The platform includes an intuitive admin dashboard, detailed analytics, and a responsive design optimized for all devices.",
      features: [
        "Comprehensive product catalog with advanced filtering",
        "Secure payment processing with multiple gateways",
        "User account management and order history",
        "Inventory tracking and management system",
        "Responsive design for mobile and desktop devices",
        "Admin dashboard with sales analytics"
      ],
      tags: ["React", "Node.js", "MongoDB", "Stripe API", "Redux"],
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
            These projects highlight the kind of work I enjoy—combining thoughtful code, backend structure, and a bit of creativity. From full-stack systems to AI integrations, each one helped me grow my skills and build something that feels purposeful.
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