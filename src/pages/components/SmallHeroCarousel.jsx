import React, { useEffect, useRef } from "react";

const SmallHeroCarousel = ({ slides }) => {
  const containerRef = useRef(null);

  // duplicate LOTS of slides so the user never reaches the end
  const infiniteSlides = Array(20).fill(slides).flat();  
  // now you have 3 * 20 = 60 cards → enough for infinite feel

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentIndex = 0;

    const cardWidth =
      container.firstChild?.offsetWidth + 24; // slide width + gap (gap-6 = 24px)

    const interval = setInterval(() => {
      currentIndex++;

      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });

      // IMPORTANT: never reset -> allow infiniteSlides to absorb scroll
      if (currentIndex > infiniteSlides.length - 10) {
        // reset scroll without visible jump
        currentIndex = 0;
        container.scrollLeft = 0;
      }
    }, 2500); // every 2.5 seconds, move one slide

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
            h-52 sm:h-60 
            rounded-xl overflow-hidden shadow-md
          "
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
