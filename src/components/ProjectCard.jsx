import { useState } from 'react';
import { ExternalLink, Github } from "lucide-react";

// Custom Wrench icon component
function WrenchIcon({ className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" 
      className={className}
      fill="currentColor"
    >
      <path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </svg>
  );
}

export function ProjectCard({ project, index }) {
  const { title, description, tags, image, imagePosition, demoLink, codeLink, status } = project;
  
  return (
    <div 
      className="group relative bg-transparent hover:bg-slate-300/20 dark:bg-transparent dark:hover:bg-zinc-900/30 py-6 animate-fade-in opacity-0 transition-colors duration-300 -mx-6 px-6"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Project Image */}
        <div className="md:w-1/3 rounded-lg overflow-hidden flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300">
          <div className="aspect-video relative">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
              style={{ objectPosition: imagePosition || "center center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* WIP badge */}
            {status === "wip" && (
              <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-[10px] font-medium rounded-md flex items-center gap-1 shadow-sm">
                <WrenchIcon className="w-2.5 h-2.5" />
                WIP
              </div>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-stone-700 dark:text-zinc-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-indigo-500 dark:group-hover:from-indigo-400 dark:group-hover:to-indigo-500 group-hover:bg-clip-text transition-colors duration-300">
            {title}{status === "wip" && <span className="text-stone-500 dark:text-zinc-500 font-normal text-lg ml-2">(work in progress)</span>}
          </h3>
          
          {/* Description */}
          <p className="text-stone-600 dark:text-zinc-400 text-sm mb-4">
            {description}
          </p>
          
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags && tags.slice(0, 5).map((tag, i) => (
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
          
          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            {codeLink && (
              <a 
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md
                          bg-white dark:bg-zinc-800
                          border border-gray-200 dark:border-gray-700
                          text-gray-800 dark:text-gray-200
                          hover:bg-gray-100 dark:hover:bg-zinc-700
                          transition-colors duration-300"
              >
                <Github className="w-3.5 h-3.5" />
                Code
              </a>
            )}
            
            {demoLink && (
              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md
                          bg-gradient-to-r from-purple-600 to-blue-500
                          text-white
                          hover:from-purple-700 hover:to-blue-600
                          transition-all duration-300 shadow-sm hover:shadow"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 