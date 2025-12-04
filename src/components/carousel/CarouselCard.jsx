/**
 * Individual card in the image carousel with fan effect
 */
export function CarouselCard({
  image,
  index,
  isActive,
  transform,
  progress,
  isOverlayActive,
  onTap,
}) {
  const { rotate, translateX, translateY, zIndex, scale, opacity, blur } = transform;

  return (
    <div
      className="absolute inset-0 transition-all duration-500 ease-in-out rounded-xl overflow-hidden shadow-lg touch-manipulation"
      style={{
        zIndex,
        transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale}) rotate(${rotate}deg)`,
        opacity,
        transformOrigin: "bottom center",
        filter: `blur(${blur}px)`,
        height: "100%",
      }}
      onClick={isActive ? onTap : undefined}
      onTouchEnd={isActive ? onTap : undefined}
    >
      <img
        src={image.src}
        alt={`Project Screenshot ${index + 1}`}
        className="w-full h-full object-cover rounded-xl"
        style={{ objectPosition: image.position }}
      />

      {isActive && (
        <>
          {/* Featured badge */}
          <div className="absolute top-0 right-0">
            <div className="flex items-center gap-1 py-2 px-3 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 rounded-bl-lg backdrop-blur-sm transform-gpu shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5 text-yellow-300 animate-pulse-soft"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-medium text-white">Featured Project</span>
            </div>
          </div>

          {/* Hover info overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 ${
              isOverlayActive ? "opacity-100" : "opacity-0 hover:opacity-100"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 dark:bg-white/10 z-40">
            <div
              className="h-full bg-indigo-500/80 dark:bg-indigo-400/80 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      )}
    </div>
  );
}
