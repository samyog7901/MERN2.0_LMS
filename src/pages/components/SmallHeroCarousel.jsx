import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SmallHeroCarousel = ({ slides }) => {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const currentIndexRef = useRef(0);
  const userInteractedRef = useRef(false);

  const navigate = useNavigate();

  // Clone only enough slides for seamless infinite effect
  const slidesExtended = [
    slides[slides.length - 1], // prepend last slide
    ...slides,
    slides[0], // append first slide
  ];

  const getCardWidth = () => containerRef.current?.firstChild?.offsetWidth + 24 || 0;

  // Auto-scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = getCardWidth();
    currentIndexRef.current = 1; // start at first real slide
    container.scrollLeft = currentIndexRef.current * cardWidth;

    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (userInteractedRef.current) return;

        currentIndexRef.current++;
        container.scrollTo({
          left: currentIndexRef.current * cardWidth,
          behavior: "smooth",
        });

        // Infinite jump
        if (currentIndexRef.current >= slides.length + 1) {
          setTimeout(() => {
            container.scrollLeft = cardWidth; // jump to first real slide
            currentIndexRef.current = 1;
          }, 300);
        }
      }, 5000);
    };

    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [slides]);

  // Snap to nearest slide after swipe/drag
  const snapToSlide = () => {
    const container = containerRef.current;
    const cardWidth = getCardWidth();
    let index = Math.round(container.scrollLeft / cardWidth);
    currentIndexRef.current = index;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    if (index === 0) {
      setTimeout(() => {
        container.scrollLeft = slides.length * cardWidth;
        currentIndexRef.current = slides.length;
      }, 300);
    } else if (index === slides.length + 1) {
      setTimeout(() => {
        container.scrollLeft = cardWidth;
        currentIndexRef.current = 1;
      }, 300);
    }
  };

  // Swipe support
  const drag = useRef({ startX: 0, scrollLeft: 0, isDragging: false });

  const onMouseDown = (e) => {
    drag.current.isDragging = true;
    drag.current.startX = e.clientX;
    drag.current.scrollLeft = containerRef.current.scrollLeft;
    clearInterval(intervalRef.current);
  };
  const onMouseMove = (e) => {
    if (!drag.current.isDragging) return;
    const dx = drag.current.startX - e.clientX;
    containerRef.current.scrollLeft = drag.current.scrollLeft + dx;
  };
  const onMouseUp = () => {
    if (!drag.current.isDragging) return;
    drag.current.isDragging = false;
    snapToSlide();
    userInteractedRef.current = true;
  };

  const onTouchStart = (e) => {
    drag.current.isDragging = true;
    drag.current.startX = e.touches[0].clientX;
    drag.current.scrollLeft = containerRef.current.scrollLeft;
    clearInterval(intervalRef.current);
  };
  const onTouchMove = (e) => {
    if (!drag.current.isDragging) return;
    const dx = drag.current.startX - e.touches[0].clientX;
    containerRef.current.scrollLeft = drag.current.scrollLeft + dx;
  };
  const onTouchEnd = () => {
    if (!drag.current.isDragging) return;
    drag.current.isDragging = false;
    snapToSlide();
    userInteractedRef.current = true;
  };

  return (
    <div
      ref={containerRef}
      className="flex gap-6 overflow-x-hidden hide-scrollbar touch-pan-x cursor-grab"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slidesExtended.map((slide, idx) => (
        <div
          key={idx}
          onClick={() => {
            userInteractedRef.current = true;
            clearInterval(intervalRef.current);
            navigate(slide.link);
          }}
          className="group cursor-pointer relative flex-none w-[80%] sm:w-[45%] md:w-[32%] lg:w-[28%] h-[260px] sm:h-[280px] md:h-[300px] rounded-xl overflow-hidden shadow-md dark:shadow-gray-700 transition-transform duration-300 hover:scale-[1.02]"
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
            <button className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-white/90 text-gray-900 rounded-full text-sm font-semibold group-hover:bg-white transition">
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
