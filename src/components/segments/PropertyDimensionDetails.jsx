import React, { useEffect, useState } from 'react';

const PropertyDimensionDetails = ({ propertie, index, handleProperties }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Apply a delay based on the index to animate items one by one
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [index]);

  return (
    <li
      className={`bg-black text-white flex justify-between mx-5 w-11/12 px-4 py-2 border border-white my-2 rounded-md opacity-50  hover:bg-opacity-60 select-none transform transition-transform duration-700 ease-in-out ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
      onClick={() => handleProperties(propertie)}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleProperties(propertie);
        }
      }}
    >
      <span>
        <p>House</p>
        <p>{propertie.houseNumber}</p>
      </span>
      <span className="border-l-2 border-white h-12"></span>
      <span>
        <p>PLOT, M<sup>2</sup></p>
        <p>{propertie.plotSize}</p>
      </span>
      <span>
        <p>House, M<sup>2</sup></p>
        <p>{propertie.houseSize}</p>
      </span>
      <span>
        <p>Price, Eur</p>
        {propertie.isSold ? (
          <span className="rounded-md h-fit w-fit px-4 py-0.5 my-1 bg-white bg-opacity-50">
            <small>SOLD</small>
          </span>
        ) : (
          <p>{propertie.price}</p>
        )}
      </span>
    </li>
  );
};

export default PropertyDimensionDetails;
