import React, { useEffect, useState } from "react";

// Put your hero/banner image URLs here
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
    }, 5000); // slide change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative h-[60vh] md:h-screen overflow-hidden">
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

      {/* optional overlay / gradient if you want text over image */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* optional hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Spiritual Books & Ancient Wisdom
        </h1>
        <p className="text-lg md:text-2xl drop-shadow">
          Discover treasures of Vedas, Bhagavad Gita, Upanishads, Yoga, Meditation …
        </p>
      </div>
    </div>
  );
}
