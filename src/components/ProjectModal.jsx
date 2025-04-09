import { useEffect, useRef, useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/Button";

export function ProjectModal({ project, isOpen, onClose }) {
  const { title, description, tags, image, demoLink, codeLink, longDescription, features, additionalImages } = project;
  const modalRef = useRef(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  
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
      if (e.key === 'Escape') {
        if (fullscreenImage) {
          setFullscreenImage(null);
        } else {
          onClose();
        }
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, fullscreenImage]);
  
  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleImageClick = (img) => {
    setFullscreenImage(img);
  };
  
  if (!isOpen) return null;
  
  return (
    <>
      <div 
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10"
        onClick={handleBackdropClick}
      >
        <div 
          ref={modalRef}
          className="bg-white dark:bg-zinc-800 border border-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Hero Image with Gradient Overlay */}
          <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => handleImageClick(image)}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            
            {/* Close button */}
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="absolute top-4 right-4 bg-gray-100/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-gray-100/30 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Tags and action buttons */}
            <div className="flex flex-wrap justify-between items-center mb-6">
              {tags && (
                <div className="flex flex-wrap gap-2">
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
              
              <div className="flex gap-2 ml-2">
                {codeLink && (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full
                              bg-gray-800 dark:bg-gray-200
                              border border-gray-200 dark:border-gray-700
                              text-white dark:text-gray-800
                              hover:bg-gray-900 dark:hover:bg-white
                              transition-colors duration-300"
                    title="View Source Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                
                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full
                              bg-gradient-to-r from-purple-600 to-blue-500
                              text-white
                              hover:from-purple-700 hover:to-blue-600
                              transition-all duration-300 shadow-sm hover:shadow-md"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            
            {/* Project Overview */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-stone-700 dark:text-zinc-300">Project Overview</h3>
              <p className="text-stone-600 dark:text-zinc-400 leading-relaxed">
                {longDescription || description}
              </p>
            </div>
            
            {/* Features list */}
            {features && features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-stone-700 dark:text-zinc-300">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 text-purple-600 dark:text-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="text-stone-600 dark:text-zinc-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Additional screenshots */}
            {additionalImages && additionalImages.length > 0 && (
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-stone-700 dark:text-zinc-300">More Screenshots</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {additionalImages.map((img, index) => (
                    <div 
                      key={index} 
                      className="rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-300 aspect-video cursor-pointer group"
                      onClick={() => handleImageClick(img)}
                    >
                      <div className="relative h-full">
                        <img 
                          src={img} 
                          alt={`${title} screenshot ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to expand
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setFullscreenImage(null)}
        >
          <button 
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 bg-gray-100/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-gray-100/30 transition-colors z-20"
            aria-label="Close fullscreen"
          >
            <X className="w-5 h-5" />
          </button>
          <img 
            src={fullscreenImage} 
            alt="Fullscreen view" 
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  );
} 