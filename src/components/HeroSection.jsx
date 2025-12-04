import { useState, useEffect, useRef } from "react";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  
  // GameGloom screenshots for the carousel with custom positioning
  const projectImages = [
    {
      src: "/assets/images/screenshots/gamegloom/gamegloom-homepage.jpg",
      position: "left center"
    },
    {
      src: "/assets/images/screenshots/gamegloom/gamegloom-gamepage.jpg",
      position: "center center"
    },
    {
      src: "/assets/images/screenshots/gamegloom/gamegloom-category.jpg",
      position: "70% left"
    },
    {
      src: "/assets/images/screenshots/gamegloom/gamegloom-reviews.jpg",
      position: "left center"
    }
  ];
  
  // Auto-rotate images with progress bar
  useEffect(() => {
    const startProgressBar = () => {
      setProgress(0);
      
      // Update progress every 40ms (100 steps for smooth animation)
      const stepTime = 40;
      const steps = 4000 / stepTime; // 4000ms total time
      
      let currentStep = 0;
      
      intervalRef.current = setInterval(() => {
        currentStep++;
        setProgress((currentStep / steps) * 100);
        
        if (currentStep >= steps) {
          clearInterval(intervalRef.current);
          setCurrentImageIndex(prevIndex => 
            prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, stepTime);
    };
    
    startProgressBar();
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentImageIndex, projectImages.length]);
  
  // Handle manual navigation - also resets the progress bar
  const goToImage = (index) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentImageIndex(index);
  };
  
  const goToPrevious = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentImageIndex(prevIndex => 
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Helper to get index with wrapping
  const getIndexWithWrap = (targetIndex) => {
    const len = projectImages.length;
    // Use modulo to wrap around if needed
    return ((targetIndex % len) + len) % len;
  };
  
  // Handle tap/click on current image
  const handleImageTap = (e) => {
    if (e.target.closest('a')) {
      return;
    }
    e.preventDefault();
    setIsOverlayActive(!isOverlayActive);
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              Hello, World! I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              <span className="inline-block text-gradient animate-gradient-shift bg-[length:200%_auto] leading-tight">Nabil El Bajdi</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-stone-700 dark:text-zinc-300 mb-8 animate-fade-in opacity-0 font-normal" style={{ animationDelay: "0.6s" }}>
              AI Developer & Creative Problem Solver
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-stone-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
              I build systems that simplify complexity. 
              Through automation, web development, and AI, I make technology smarter and life easier.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start gap-5 mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
              <a href="https://github.com/nabilelbajdi" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-6 h-6 fill-current">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/nabil-el-bajdi-51726b24b/" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              {/* <a href="https://www.youtube.com/mraquary" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6 fill-current">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                </svg>
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://www.instagram.com/nabilelbajdi" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.goodreads.com/nabilelbajdi" target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                  <path d="M299.9 191.2c5.1 37.3-4.7 79-35.9 100.7-22.3 15.5-52.8 14.1-70.8 5.7-37.1-17.3-49.5-58.6-46.8-97.2 4.3-60.9 40.9-87.9 75.3-87.5 46.9-.2 71.8 31.8 78.2 78.3zM448 88v336c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V88c0-30.9 25.1-56 56-56h336c30.9 0 56 25.1 56 56zM330 313.2s-.1-34-.1-217.3h-29v40.3c-.8 .3-1.2-.5-1.6-1.2-9.6-20.7-35.9-46.3-76-46-51.9 .4-87.2 31.2-100.6 77.8-4.3 14.9-5.8 30.1-5.5 45.6 1.7 77.9 45.1 117.8 112.4 115.2 28.9-1.1 54.5-17 69-45.2 .5-1 1.1-1.9 1.7-2.9 .2 .1 .4 .1 .6 .2 .3 3.8 .2 30.7 .1 34.5-.2 14.8-2 29.5-7.2 43.5-7.8 21-22.3 34.7-44.5 39.5-17.8 3.9-35.6 3.8-53.2-1.2-21.5-6.1-36.5-19-41.1-41.8-.3-1.6-1.3-1.3-2.3-1.3h-26.8c.8 10.6 3.2 20.3 8.5 29.2 24.2 40.5 82.7 48.5 128.2 37.4 49.9-12.3 67.3-54.9 67.4-106.3z"/>
                </svg>
                <span className="sr-only">Goodreads</span>
              </a> */}
              <div className="w-px h-6 bg-stone-300 dark:bg-zinc-700"></div>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-stone-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                <span>Resume</span>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:flex-1 animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
            {/* Featured Project Showcase */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full mx-auto perspective mb-12">
              {/* Deck of cards effect */}
              {projectImages.map((img, index) => {
                const distance = Math.min(
                  Math.abs(index - currentImageIndex),
                  Math.abs(index - currentImageIndex + projectImages.length),
                  Math.abs(index - currentImageIndex - projectImages.length)
                );
                
                // Simplified fan effect
                const baseAngle = 10; // Reduced angle for subtler effect
                const fanRadius = 15; // Controls how spread out the fan is
                
                // Calculate card transform properties based on position
                const getCardTransform = () => {
                  if (distance === 0) {
                    // Center card (current)
                    return { rotate: 0, translateX: 0, translateY: 0, zIndex: 30, scale: 1, opacity: 1, blur: 0 };
                  } else if (index < currentImageIndex) {
                    // Card to the left
                    return { rotate: -baseAngle, translateX: -fanRadius, translateY: 3, zIndex: 20, scale: 0.95, opacity: 0.9, blur: 2 };
                  } else {
                    // Card to the right
                    return { rotate: baseAngle, translateX: fanRadius, translateY: 3, zIndex: 20, scale: 0.95, opacity: 0.9, blur: 2 };
                  }
                };
                
                const { rotate, translateX, translateY, zIndex, scale, opacity, blur } = getCardTransform();
                
                // Create the fan effect - cards appear to originate from a point at the bottom
                const transformOrigin = "bottom center";
                
                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-500 ease-in-out rounded-xl overflow-hidden shadow-lg touch-manipulation"
                    style={{
                      zIndex,
                      transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale}) rotate(${rotate}deg)`,
                      opacity,
                      transformOrigin,
                      filter: `blur(${blur}px)`,
                      height: '100%',
                    }}
                    onClick={index === currentImageIndex ? handleImageTap : undefined}
                    onTouchEnd={index === currentImageIndex ? handleImageTap : undefined}
                  >
                    <img 
                      src={img.src} 
                      alt={`Project Screenshot ${index + 1}`} 
                      className="w-full h-full object-cover rounded-xl"
                      style={{ objectPosition: img.position }}
                    />
                    
                    {/* Show hover info and progress bar on the top card */}
                    {index === currentImageIndex && (
                      <>
                        {/* Featured badge - always visible */}
                        <div className="absolute top-0 right-0">
                          <div className="flex items-center gap-1 py-2 px-3 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 rounded-bl-lg backdrop-blur-sm transform-gpu shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-yellow-300 animate-pulse-soft">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-medium text-white">Featured Project</span>
                          </div>
                        </div>
                        
                        {/* Hover info overlay */}
                        <div 
                          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 ${
                            isOverlayActive ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                          }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="text-white">
                            <a 
                              href="https://gamegloom.com" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-white hover:text-indigo-300 transition-colors duration-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View Project
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        
                        {/* Progress bar at the bottom of the active card */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 dark:bg-white/10 z-40">
                          <div 
                            className="h-full bg-indigo-500/80 dark:bg-indigo-400/80 transition-all duration-100 ease-linear"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
              
              {/* Indicators with subtle navigation arrows */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
                <button
                  onClick={goToPrevious}
                  className="text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {projectImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex 
                        ? "bg-indigo-600 dark:bg-indigo-400" 
                        : "bg-gray-300 dark:bg-zinc-600 hover:bg-indigo-300 dark:hover:bg-indigo-600"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
                
                <button
                  onClick={goToNext}
                  className="text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 