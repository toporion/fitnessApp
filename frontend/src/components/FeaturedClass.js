import React from "react";
import textImg from "../assets/textBg.png";
import g1 from "../../src/assets/c1-1024x665.jpg";
import g2 from "../../src/assets/blog-6-768x470.jpg";
import g3 from "../../src/assets/c3.jpg";
import g4 from "../../src/assets/gallery3-150x150.jpg";
import g5 from "../../src/assets/blog-4.jpg";
import g8 from "../../src/assets/c8-768x618.jpg";
import serviceImg from "../../src/assets/service-2.png"; // left-side image

const FeaturedClass = () => {
  const galleryItems = [
    { img: g1, title: "Yoga", time: "7:00 AM - 8:00 AM" },
    { img: g2, title: "Meditation", time: "8:30 AM - 9:30 AM" },
    { img: g3, title: "Cycling", time: "5:00 PM - 6:00 PM", col: "col-span-2" },
    { img: g8, title: "Power Training", time: "6:30 PM - 7:30 PM", col: "col-span-2" },
    { img: g4, title: "Zumba", time: "10:00 AM - 11:00 AM" },
    { img: g5, title: "Cardio", time: "11:30 AM - 12:30 PM" },
  ];

  return (
    <div className="bg-[#FFFFFF] py-10">
      {/* Title section with background */}
      <div
        className="relative mx-auto mb-8"
        style={{
          backgroundImage: `url(${textImg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "25px 40px",
        }}
      >
        <p className="uppercase text-white font-semibold text-center">
          Our Featured Class
        </p>
      </div>

      {/* Container with service image and gallery */}
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* Left side */}
        <div className="lg:w-1/4 w-full">
          <img
            src={serviceImg}
            alt="Service"
            className="object-fill w-full h-full"
          />
        </div>

        {/* Right side - Gallery */}
        <div className="lg:w-3/4 w-full flex justify-center px-4 lg:px-0">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg ${item.col || ""}`}
              >
                {/* Image wrapper */}
                <div className="overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-60 transform transition-transform duration-500 hover:scale-150"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  {/* Text */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClass;
