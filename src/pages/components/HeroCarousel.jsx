import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

// Hero images from public folder
const slides = [
  "/bgasitis.jpg",
  "/giftbtgod.jpg",
  "/meditation.jpg",
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [fade, setFade] = useState(true);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setFade(false); // fade out current
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      setNextIndex((prev) => (prev + 1) % slides.length);
      setFade(true); // fade in next
    }, 500); // match transition duration
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setNextIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 500);
  };

  const goToSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(index);
      setNextIndex((index + 1) % slides.length);
      setFade(true);
    }, 500);
  };

  // Swipe support
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full h-[60vh] md:h-screen overflow-hidden"
    >
      {slides.map((url, idx) => (
        <img
          key={idx}
          src={url}
          alt={`slide-${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            idx === activeIndex ? (fade ? "opacity-100 z-20" : "opacity-0 z-10") : "opacity-0 z-10"
          }`}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/20 z-30"></div>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-40">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Spiritual Books & Ancient Wisdom
        </h1>
        <p className="text-lg md:text-2xl drop-shadow">
          Discover treasures of Vedas, Bhagavad Gita, Upanishads, Yoga, Meditation …
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3 z-50">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === activeIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-50"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-50"
      >
        &#10095;
      </button>
    </div>
  );
}
