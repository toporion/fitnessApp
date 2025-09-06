import React, { useState } from "react";
import aboutImg from "../assets/about-4.png";
import runningText from "../assets/shape-86.png";
import textImg from "../assets/textBg.png";

const WhoWePart = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const rotateX = (y / height - 0.5) * 20; // Max 20deg tilt
    const rotateY = (x / width - 0.5) * -20;
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="mt-20 md:mt-36 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
      {/* Left side text */}
      <div className="text-black w-full md:w-1/2">
        {/* Who We Are with background image */}
        <div
          className="inline-block relative"
          style={{
            backgroundImage: `url(${textImg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "16px 32px",
          }}
        >
          <p className="uppercase text-white font-semibold text-center text-sm sm:text-base">
            Who We Are
          </p>
        </div>

        <p className="font-bold text-2xl sm:text-3xl md:text-4xl leading-snug caprasimo-regular mt-4 text-center md:text-left">
          Take Your Health And Body To Next Level
        </p>
        <p className="mt-4 mb-6 text-gray-600 oleo-script-regular text-sm sm:text-base text-center md:text-left">
          Gymat an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries
          but also the leap into electronic typesetting.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 divide-y sm:divide-y-0 md:divide-x divide-gray-300">
          <div className="py-2 md:pr-4">
            <p className="font-bold text-lg sm:text-xl text-center md:text-left">
              Professional Trainers
            </p>
          </div>
          <div className="py-2 md:px-4">
            <p className="font-bold text-lg sm:text-xl text-center md:text-left">
              Modern Equipments
            </p>
          </div>
          <div className="py-2 md:pl-4">
            <p className="font-bold text-lg sm:text-xl text-center md:text-left">
              Body Building Machine
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <button className="px-5 sm:px-6 py-2 sm:py-3 bg-red-500 text-white font-semibold rounded-none shadow hover:bg-red-600 transition text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* Right side design */}
      <div
        className="w-full md:w-1/2 relative flex items-center justify-center mt-8 md:mt-0"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{ perspective: "1000px" }}
      >
        {/* Running text image (vertical) */}
        <img
          src={runningText}
          alt="running text"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 sm:w-12 md:w-16"
        />

        {/* Big red D-shape */}
        <div className="absolute w-[150px] sm:w-[200px] md:w-[250px] h-[300px] sm:h-[380px] md:h-[450px] rounded-r-full bg-[#FF0336]"></div>

        {/* About image with tilt effect */}
        <img
          src={aboutImg}
          alt="who we are"
          className="relative z-10 w-[280px] sm:w-[400px] md:w-[620px] h-auto transition-transform duration-200 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        />
      </div>
    </div>
  );
};

export default WhoWePart;
