import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SmallHeroCarousel = ({ slides }) => {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const currentIndexRef = useRef(0);
  const userInteractedRef = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const navigate = useNavigate();
  const infiniteSlides = Array(10).fill(slides).flat();

  // Start auto-scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    currentIndexRef.current = 0;
    container.scrollLeft = 0;

    const cardWidth = container.firstChild?.offsetWidth + 22;

    const start = () => {
      intervalRef.current = setInterval(() => {
        if (userInteractedRef.current) return; // Stop if user clicked or swiped

        currentIndexRef.current++;
        container.scrollTo({
          left: currentIndexRef.current * cardWidth,
          behavior: "smooth",
        });

        if (currentIndexRef.current > infiniteSlides.length - 8) {
          currentIndexRef.current = 0;
          container.scrollLeft = 0;
        }
      }, 5000);
    };

    start();

    return () => clearInterval(intervalRef.current);
  }, [infiniteSlides]);

  // Swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    clearInterval(intervalRef.current); // stop auto-scroll during swipe
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.firstChild?.offsetWidth + 24;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) currentIndexRef.current++; // swipe left → next
    if (diff < -50) currentIndexRef.current = Math.max(0, currentIndexRef.current - 1); // swipe right → prev

    container.scrollTo({
      left: currentIndexRef.current * cardWidth,
      behavior: "smooth",
    });

    userInteractedRef.current = true; // stop auto-scroll permanently after swipe
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="flex gap-6 overflow-x-hidden hide-scrollbar touch-pan-x"
    >
      {infiniteSlides.map((slide, idx) => (
        <div
          key={idx}
          onClick={() => {
            userInteractedRef.current = true; // stop auto-scroll after click
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            navigate(slide.link);
          }}
          className="group cursor-pointer relative flex-none 
            w-[80%] sm:w-[45%] md:w-[32%] lg:w-[28%] 
            h-[260px] sm:h-[280px] md:h-[300px] 
            rounded-xl overflow-hidden shadow-md 
            dark:shadow-gray-700 transition-transform duration-300
            hover:scale-[1.02]"
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Text Content */}
          <div className="absolute bottom-0 p-5 text-white">
            <h2 className="text-xl font-bold leading-tight">{slide.title}</h2>
            <p className="text-sm text-gray-200 mt-1">{slide.subtitle}</p>
            <button
              className="mt-3 inline-flex items-center gap-2 
                px-4 py-2 bg-white/90 text-gray-900 
                rounded-full text-sm font-semibold
                group-hover:bg-white transition"
            >
              Explore
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallHeroCarousel;
