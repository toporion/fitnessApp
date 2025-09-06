import React from "react";
import bg from "../assets/shape-47.jpg";
import sape51 from "../assets/shape-51.png";
import sape52 from "../assets/shape-52.png";
import sape53 from "../assets/shape-53.png";
import bg1 from "../assets/new.jpg";
import WhoWePart from "./WhoWePart";

const cards = [
  {
    id: 1,
    title: "Our Mission",
    desc: "We focus on delivering value and excellence.",
    shape: sape51,
  },
  {
    id: 2,
    title: "Our Vision",
    desc: "Shaping the future with innovative solutions.",
    shape: sape52,
  },
  {
    id: 3,
    title: "Our Values",
    desc: "Integrity, creativity, and collaboration.",
    shape: sape53,
  },
];

const WhoWeAre = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="relative bg-cover bg-center py-20 px-4 min-h-[600px] md:min-h-[800px]"
    >
      {/* Cards container (overlapping the banner) */}
      <div className="absolute -top-20 md:-top-40 left-1/2 -translate-x-1/2 w-full max-w-6xl flex flex-col sm:flex-row gap-6 justify-center px-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative w-full sm:w-1/2 md:w-1/3 h-64 md:h-80 bg-white shadow-lg rounded-tl-3xl rounded-br-3xl overflow-hidden transition-all duration-500 hover:scale-105 flex flex-col items-center justify-center text-center"
          >
            {/* Hover background image */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/65"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4">
              {/* Icon with red background */}
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={card.shape} alt="shape" className="w-14 h-14" />
              </div>
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-white text-black">
                {card.title}
              </h3>
              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 group-hover:text-white transition-colors duration-500">
                {card.desc}
              </p>
            </div>

            {/* Read More button on hover */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <button className="px-4 py-2 md:px-5 md:py-2 bg-red-500 text-white font-semibold rounded-none shadow-md hover:bg-red-600 transition">
                Read More
              </button>
            </div>

            {/* White overlay (hides on hover) */}
            <div className="absolute inset-0 bg-white opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      <WhoWePart />
    </div>
  );
};

export default WhoWeAre;
