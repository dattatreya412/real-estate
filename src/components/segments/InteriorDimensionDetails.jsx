import React from "react";
import BookACall from "./BookACall";

const InteriorDimensionDetails = ({ interiorSizing }) => {
  return (
    <section className="h-80  mx-4 my-4 py-4 px-8 pl-4 bg-black bg-opacity-50 rounded-md border border-white">
      <div className="flex ">
      <div className="w-28 text-white">
        <p className="text-sm">DATE</p>
        <h3 className="text-2xl">30/2023</h3>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-3 place-items-center px-5">
          {Object.entries(interiorSizing).map(([key, value], index) => (
            <div
              key={index}
              className="text-white h-16 w-24 flex flex-col px-2 py-1"
            >
              <p>{key}</p>
              <p>
                {value} M<sup>2</sup>
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
      <BookACall/>
    </section>
  );
};

export default InteriorDimensionDetails;
