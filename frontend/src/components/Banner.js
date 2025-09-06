import React from "react"; 
import banner from "../assets/banner-6.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex items-center px-4 md:px-10 overflow-hidden relative h-[500px] sm:h-[600px] md:h-[800px] w-full"
    >
      {/* Graphics bars */}
      <div className="absolute -bottom-32 left-1/2 md:left-2/3 -translate-x-1/2 flex items-end gap-3 scale-75 sm:scale-90 md:scale-100">
        {/* Left bar (shorter) */}
        <div className="w-[60px] sm:w-[80px] md:w-[100px] h-[450px] sm:h-[600px] md:h-[750px] bg-gradient-to-b from-red-500 to-black rotate-[-30deg] translate-x-4 md:translate-x-9 rounded-tl-2xl rounded-tr-2xl" />
        {/* Middle bar (tallest) */}
        <div className="w-[60px] sm:w-[80px] md:w-[100px] h-[550px] sm:h-[750px] md:h-[900px] bg-gradient-to-b from-red-600 to-black rotate-[-30deg] rounded-tl-2xl rounded-tr-2xl" />
        {/* Right bar (medium) */}
        <div className="w-[60px] sm:w-[80px] md:w-[100px] h-[500px] sm:h-[680px] md:h-[820px] bg-gradient-to-b from-red-600 to-black rotate-[-30deg] rounded-tl-2xl rounded-tr-2xl" />
      </div>

      {/* Text block over graphics */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-2 sm:px-4 z-20 left-1/2 md:left-[58%] -translate-x-1/2 md:translate-x-0 text-center md:text-left">
        <p className="text-base sm:text-lg tracking-widest font-semibold">SHARE</p>

        {/* Teared paper effect for FIND YOUR ENERGY */}
        <div className="relative my-3 sm:my-4">
          <span className="relative z-10 text-xl sm:text-2xl md:text-3xl font-extrabold px-3 sm:px-4 py-1 sm:py-2 text-black">
            FIND YOUR <span className="">ENERGY</span>
          </span>
          <span className="absolute inset-0 bg-white -z-0 clip-path-paper" />
        </div>

        {/* Big text */}
        <h2 className="text-xl sm:text-3xl md:text-6xl font-extrabold protest-riot-regular my-2 leading-snug sm:leading-tight">
          MAKE YOUR BODY <br /> FIT &amp; PERFECT
        </h2>

        {/* Small paragraph */}
        <p className="max-w-xs sm:max-w-sm md:max-w-md text-xs sm:text-sm md:text-base mt-3 sm:mt-4 leading-relaxed">
          Gymhen an unknown printer took a galley of type and scrambled.
          It has survived unknown printer centuries.
        </p>

        <button className="bg-white text-black text-lg sm:text-xl md:text-2xl font-bold px-6 sm:px-8 py-3 sm:py-4 mt-4 sm:mt-6">
          Our Classes
        </button>
      </div>
    </div>
  );
};

export default Banner;
