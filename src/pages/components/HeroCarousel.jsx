import React, { useEffect, useState } from "react";

// Hero/banner images (put them in public folder)
const slides = [
  "/bgasitis.jpg",
  "/giftbtgod.jpg",
  "/meditation.jpg",
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative h-[50vh] overflow-hidden">
      {slides.map((url, idx) => (
        <img
          key={idx}
          src={url}
          alt={`slide-${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* optional overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg mb-2">
          Spiritual Books & Wisdom
        </h1>
        <p className="text-md md:text-lg drop-shadow">
          Explore Vedas, Bhagavad Gita, Upanishads, Yoga & Meditation
        </p>
      </div>
    </div>
  );
}
