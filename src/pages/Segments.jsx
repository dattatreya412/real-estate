import React, { useState } from "react";

import PropertyDescription from "../components/segments/PropertyDescription";
import PropertyBriefDescription from "../components/segments/PropertyBriefDescription";
import properties from "../data/properties";

import Counter from "./Counter";

const Segments = () => {
  const [isDetailed, setIsDetailed] = useState(false);
  const [propertie, setPropertie] = useState(null)
  function handleProperties(propertie){
    setPropertie(propertie)
    setIsDetailed(true)
  }
  function navigateBack(){
    setIsDetailed(false)
  }
  return (
    <section>
      {isDetailed ? (
        <PropertyBriefDescription propertie={propertie} navigateBack={navigateBack}/>
      ) : (
        <PropertyDescription properties={properties} handleProperties={handleProperties}/>
      )}
    </section>
  );
};

export default Segments;
