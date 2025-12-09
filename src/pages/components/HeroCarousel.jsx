import React, { useEffect, useState } from "react";

const slides = [
  "https://i.imgur.com/UlQJQ9x.jpeg",
  "https://i.imgur.com/3SJc9jC.jpeg",
  "https://i.imgur.com/N8oK4JP.jpeg"
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden rounded-xl shadow-lg">

      {slides.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="banner"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay for premium feel */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};

export default HeroCarousel;
