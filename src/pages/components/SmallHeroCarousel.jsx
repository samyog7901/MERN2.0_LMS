import React, { useEffect, useRef } from "react";

const SmallHeroCarousel = ({ slides }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    const speed = 1; // pixels per frame
    const interval = setInterval(() => {
      if (container) {
        scrollAmount += speed;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0; // loop
        }
        container.scrollLeft = scrollAmount;
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  // Duplicate slides for seamless scroll
  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides];

  return (
    <div
      ref={containerRef}
      className="flex gap-6 overflow-x-hidden hide-scrollbar"
    >
      {duplicatedSlides.map((url, idx) => (
        <div
          key={idx}
          className="flex-none w-40 sm:w-48 h-60 rounded-xl overflow-hidden shadow-md bg-gray-100"
        >
          <img
            src={url}
            alt={`slide-${idx}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default SmallHeroCarousel;
