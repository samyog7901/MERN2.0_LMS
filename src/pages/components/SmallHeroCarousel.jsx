import React, { useEffect, useRef } from "react";

const SmallHeroCarousel = ({ slides }) => {
  const containerRef = useRef(null);
  const currentIndexRef = useRef(0); // store currentIndex persistently

  const infiniteSlides = Array(20).fill(slides).flat();  

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.firstChild?.offsetWidth + 24;

    const interval = setInterval(() => {
      currentIndexRef.current++;

      container.scrollTo({
        left: currentIndexRef.current * cardWidth,
        behavior: "smooth",
      });

      if (currentIndexRef.current > infiniteSlides.length - 10) {
        currentIndexRef.current = 0;
        container.scrollLeft = 0;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex gap-6 overflow-x-hidden hide-scrollbar"
    >
      {infiniteSlides.map((url, idx) => (
        <div
          key={idx}
          className="
            flex-none 
            w-[75%] sm:w-[40%] md:w-[30%] lg:w-[28%]
            h-75 sm:h-65
            rounded-xl overflow-hidden shadow-md
          "
        >
          <img src={url} alt={`slide-${idx}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default SmallHeroCarousel;
