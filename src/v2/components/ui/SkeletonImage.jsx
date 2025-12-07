import { useState } from 'react';

/**
 * Image component with skeleton loading state
 */
export function SkeletonImage({
  src,
  alt,
  className = '',
  _containerClassName = '',
  skeletonClassName = '',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {/* Skeleton placeholder */}
      {!isLoaded && !hasError && (
        <div
          className={`absolute inset-0 bg-[var(--v2-bg-tertiary)] animate-pulse ${skeletonClassName}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skeleton-shimmer" />
        </div>
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        {...props}
      />

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-[var(--v2-bg-tertiary)] flex items-center justify-center">
          <span className="text-[var(--v2-text-muted)] text-sm">Failed to load</span>
        </div>
      )}
    </>
  );
}
