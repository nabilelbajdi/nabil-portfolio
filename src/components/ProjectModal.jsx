import { useEffect, useRef } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/Button";

export function ProjectModal({ project, isOpen, onClose }) {
  const { title, description, tags, image, demoLink, codeLink, longDescription, features, additionalImages } = project;
  const modalRef = useRef(null);
  
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="bg-white dark:bg-zinc-800 border border-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Hero Image with Gradient Overlay */}
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          
          {/* Title Overlay */}
          <div className="absolute top-6 left-6 z-20">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">{title}</h2>
          </div>
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-100/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-gray-100/30 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Tags */}
          {tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 text-xs font-medium rounded-full 
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
          
          {/* Project Overview */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Project Overview</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {longDescription || description}
            </p>
          </div>
          
          {/* Features list */}
          {features && features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-purple-600 dark:text-purple-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Additional screenshots */}
          {additionalImages && additionalImages.length > 0 && (
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">More Screenshots</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {additionalImages.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img 
                      src={img} 
                      alt={`${title} screenshot ${index + 1}`} 
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                          border border-gray-200 dark:border-gray-700
                          text-gray-800 dark:text-gray-200
                          hover:bg-gray-100 dark:hover:bg-gray-800
                          transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            )}
            
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                          bg-gradient-to-r from-purple-600 to-blue-500
                          text-white
                          hover:from-purple-700 hover:to-blue-600
                          transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 