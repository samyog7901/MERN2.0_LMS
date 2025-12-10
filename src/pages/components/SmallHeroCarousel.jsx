import React, { useEffect, useRef } from "react";

const SmallHeroCarousel = ({ slides }) => {
  const containerRef = useRef(null);

  // Duplicate for smooth looping
  const duplicatedSlides = [...slides, ...slides];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let index = 0;

    const slideWidth = container.firstChild?.offsetWidth || 200;

    const interval = setInterval(() => {
      index++;

      if (index >= duplicatedSlides.length) {
        index = 0;
      }

      container.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }, 3000); // slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div
      ref={containerRef}
      className="flex gap-6 overflow-x-hidden hide-scrollbar"
    >
      {duplicatedSlides.map((url, idx) => (
        <div
          key={idx}
          className="
            flex-none 
            w-[75%]       /* mobile: shows 1 */
            sm:w-[40%]    /* tablet: shows 2 */
            md:w-[30%]    /* desktop: shows 3 */
            lg:w-[28%]    
            h-52 sm:h-60 
            rounded-xl overflow-hidden shadow-md bg-gray-100
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
