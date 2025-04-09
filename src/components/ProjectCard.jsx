import { useState } from 'react';
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/Button";

export function ProjectCard({ project, onOpenModal, index }) {
  const { title, description, tags, image, demoLink, codeLink } = project;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white dark:bg-zinc-900/90 rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in opacity-0 transform hover:-translate-y-1 h-full z-40"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Overlay */}
      <div 
        className="relative overflow-hidden aspect-video cursor-pointer" 
        onClick={() => onOpenModal(project)}
      >
        {/* Project Image */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        
        {/* View Details Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
          <button
            onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
            className="text-xs font-medium text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-md transition-colors duration-300 cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Tech Stack Tags */}
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-2.5 py-0.5 text-xs font-medium rounded-full 
                          bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                          dark:from-purple-500/20 dark:to-blue-500/20
                          text-purple-700 dark:text-purple-300
                          border border-purple-200 dark:border-purple-800/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex justify-between">
          {codeLink && (
            <a 
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg
                        border border-gray-200 dark:border-gray-700
                        text-gray-800 dark:text-gray-200
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg
                        bg-gradient-to-r from-purple-600 to-blue-500
                        text-white
                        hover:from-purple-700 hover:to-blue-600
                        transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          
          {!demoLink && !codeLink && (
            <button 
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg
                        bg-gradient-to-r from-purple-600 to-blue-500
                        text-white
                        hover:from-purple-700 hover:to-blue-600
                        transition-all duration-300 shadow-md hover:shadow-lg
                        w-full justify-center"
              onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 