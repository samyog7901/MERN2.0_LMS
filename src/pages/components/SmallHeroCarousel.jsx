import React from "react";

const SmallHeroCarousel = ({ slides }) => {
  // duplicate many times to avoid seeing gaps
  const infiniteSlides = [...slides, ...slides, ...slides, ...slides];

  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scrollInfinite gap-6">
        {infiniteSlides.map((url, idx) => (
          <div
            key={idx}
            className="
              flex-none 
              w-[75%]  
              sm:w-[40%]  
              md:w-[30%]  
              lg:w-[28%]
              h-52 sm:h-60
              rounded-xl overflow-hidden shadow-md bg-gray-100
            "
          >
            <img src={url} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallHeroCarousel;
