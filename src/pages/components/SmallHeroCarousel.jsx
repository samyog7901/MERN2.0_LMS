import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SmallHeroCarousel = ({ slides }) => {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const currentIndexRef = useRef(0);
  const userInteractedRef = useRef(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  const navigate = useNavigate();

  // Duplicate slides for seamless infinite effect
  const slidesExtended = [
    ...slides.slice(-slides.length), // prepend clone
    ...slides,
    ...slides.slice(0, slides.length), // append clone
  ];

  const getCardWidth = () => containerRef.current?.firstChild?.offsetWidth + 24 || 0;

  // Auto-scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = getCardWidth();
    currentIndexRef.current = slides.length; // start at real first slide
    container.scrollLeft = currentIndexRef.current * cardWidth;

    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (userInteractedRef.current) return;

        currentIndexRef.current++;
        container.scrollTo({
          left: currentIndexRef.current * cardWidth,
          behavior: "smooth",
        });

        // Handle infinite jump
        if (currentIndexRef.current >= slides.length * 2) {
          setTimeout(() => {
            container.scrollLeft = slides.length * cardWidth;
            currentIndexRef.current = slides.length;
          }, 300); // wait for smooth scroll to finish
        }
      }, 5000);
    };

    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [slides]);

  // Snap to nearest slide
  const snapToSlide = () => {
    const container = containerRef.current;
    const cardWidth = getCardWidth();
    const index = Math.round(container.scrollLeft / cardWidth);
    currentIndexRef.current = index;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    // Handle infinite jump
    if (currentIndexRef.current < slides.length) {
      setTimeout(() => {
        container.scrollLeft = (slides.length + currentIndexRef.current) * cardWidth;
        currentIndexRef.current += slides.length;
      }, 300);
    } else if (currentIndexRef.current >= slides.length * 2) {
      setTimeout(() => {
        container.scrollLeft = (currentIndexRef.current - slides.length) * cardWidth;
        currentIndexRef.current -= slides.length;
      }, 300);
    }
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    clearInterval(intervalRef.current);
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    scrollStartX.current = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
    const dx = dragStartX.current - touchEndX.current;
    containerRef.current.scrollLeft = scrollStartX.current + dx;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) currentIndexRef.current++; // swipe left → next
    if (diff < -50) currentIndexRef.current--; // swipe right → prev

    snapToSlide();
    userInteractedRef.current = true;
  };

  // Mouse drag support
  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    scrollStartX.current = containerRef.current.scrollLeft;
    clearInterval(intervalRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = dragStartX.current - e.clientX;
    containerRef.current.scrollLeft = scrollStartX.current + dx;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    snapToSlide();
    userInteractedRef.current = true;
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="flex gap-6 overflow-x-hidden hide-scrollbar touch-pan-x cursor-grab"
    >
      {slidesExtended.map((slide, idx) => (
        <div
          key={idx}
          onClick={() => {
            userInteractedRef.current = true;
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
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
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
