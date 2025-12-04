import { useState, useEffect, useRef } from "react";
import { CarouselCard } from "./CarouselCard";
import { CAROUSEL_IMAGES, getCardTransform } from "./carouselUtils";

/**
 * Auto-rotating image carousel with fan card effect
 */
export function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const intervalRef = useRef(null);

  const images = CAROUSEL_IMAGES;

  // Auto-rotate with progress bar
  useEffect(() => {
    const stepTime = 40;
    const totalTime = 4000;
    const steps = totalTime / stepTime;
    let currentStep = 0;

    setProgress(0);

    intervalRef.current = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(intervalRef.current);
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    }, stepTime);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentImageIndex, images.length]);

  const goToImage = (index) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageTap = (e) => {
    if (e.target.closest("a")) return;
    e.preventDefault();
    setIsOverlayActive(!isOverlayActive);
  };

  return (
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full mx-auto perspective mb-12">
      {images.map((img, index) => (
        <CarouselCard
          key={index}
          image={img}
          index={index}
          isActive={index === currentImageIndex}
          transform={getCardTransform(index, currentImageIndex, images.length)}
          progress={progress}
          isOverlayActive={isOverlayActive}
          onTap={handleImageTap}
        />
      ))}

      {/* Navigation indicators */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
        <button
          onClick={goToPrevious}
          className="text-gray-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {images.map((_, index) => (
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
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
