/**
 * Image carousel data for GameGloom screenshots
 */
export const CAROUSEL_IMAGES = [
  {
    src: "/assets/images/screenshots/gamegloom/gamegloom-homepage.jpg",
    position: "left center",
  },
  {
    src: "/assets/images/screenshots/gamegloom/gamegloom-gamepage.jpg",
    position: "center center",
  },
  {
    src: "/assets/images/screenshots/gamegloom/gamegloom-category.jpg",
    position: "70% left",
  },
  {
    src: "/assets/images/screenshots/gamegloom/gamegloom-reviews.jpg",
    position: "left center",
  },
];

/**
 * Calculate transform properties for a carousel card based on its position
 */
export const getCardTransform = (index, currentIndex, totalImages) => {
  const baseAngle = 10;
  const fanRadius = 15;

  const distance = Math.min(
    Math.abs(index - currentIndex),
    Math.abs(index - currentIndex + totalImages),
    Math.abs(index - currentIndex - totalImages)
  );

  if (distance === 0) {
    return { rotate: 0, translateX: 0, translateY: 0, zIndex: 30, scale: 1, opacity: 1, blur: 0 };
  } else if (index < currentIndex) {
    return { rotate: -baseAngle, translateX: -fanRadius, translateY: 3, zIndex: 20, scale: 0.95, opacity: 0.9, blur: 2 };
  } else {
    return { rotate: baseAngle, translateX: fanRadius, translateY: 3, zIndex: 20, scale: 0.95, opacity: 0.9, blur: 2 };
  }
};
