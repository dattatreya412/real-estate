import React, { useEffect, useState } from "react";
import PropertyDimensionDetails from "./PropertyDimensionDetails";

import loop1 from "../../property-assets/38A/exterior/videos/loop/loop1.mp4";

const PropertyDescription = ({ properties, handleProperties }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger sliding effect when the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for smooth transition

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section className="relative min-w-5/12 h-screen px-4 pb-16 bg-black overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 z-20`}
      ></div>
      <video
        autoPlay
        loop
        muted
        key={loop1}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0`}
      >
        <source src={loop1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-full h-full z-30">
        <div className="h-16"></div>
        <div className="overflow-hidden mb-4">
          <h1
            className={`py-3 text-white text-6xl transform transition-transform duration-700 ease-in-out ${
              isVisible ? "translate-y-0" : "-translate-y-20"
            }`}
          >
            Select your house
          </h1>
        </div>

        <div className="flex w-full h-5/6 gap-5">
          <ul className="relative w-96 h-full overflow-hidden">
            {properties.map((propertie, index) => (
              <PropertyDimensionDetails
                key={index}
                index={index}
                handleProperties={handleProperties}
                propertie={propertie}
              />
            ))}
          </ul>
          <div className="border border-white w-24 h-5/6 py-2 my-2 rounded-md opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDescription;
