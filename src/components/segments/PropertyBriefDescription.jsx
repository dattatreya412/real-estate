// import React, { useState, useMemo, useCallback } from "react";
// import { GoArrowLeft } from "react-icons/go";
// import PropertyDimensionDetails from "./PropertyDimensionDetails";
// import InteriorDimensionDetails from "./InteriorDimensionDetails";
// import Catalog from "./Catalog";

// import vedio12 from '../../property-assets/38A/exterior/videos/live/vedio12.mp4';
// import vedio23 from '../../property-assets/38A/exterior/videos/live/vedio23.mp4';
// import vedio31 from '../../property-assets/38A/exterior/videos/live/vedio31.mp4';

// import loop1 from '../../property-assets/38A/exterior/videos/loop/loop1.mp4';
// import loop2 from '../../property-assets/38A/exterior/videos/loop/loop2.mp4';
// import loop3 from '../../property-assets/38A/exterior/videos/loop/loop3.mp4';
// import loop4 from '../../property-assets/38A/exterior/videos/loop/loop4.mp4';

// const PropertyBriefDescription = ({ propertie, navigateBack }) => {
//   const [loopIndex, setLoopIndex] = useState(0);
//   const [vedioIndex, setVedioIndex] = useState(0);
//   const [pushQuickVideo, setPushQuickVideo] = useState(false);
//   const [isInitial, setIsIntial] = useState(true)

//   // Memoize the video arrays so they are not recreated on every render
//   const loop = useMemo(() => [loop1, loop2, loop3, loop4], []);
//   const vedio = useMemo(() => [vedio12, vedio23, vedio31], []);

//   const switchImage = (vedioIndex, loopIndex) => {
//     setVedioIndex(vedioIndex);
//     // setLoopIndex(loopIndex);
//     setPushQuickVideo(true); 
//   }

//   const handleQuickVideoEnd = () => {
//     setPushQuickVideo(false); 
//   };

//   return (
//     <section className="relative w-screen h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         key={loop[loopIndex]}
//         className={`absolute top-0 left-0 w-full h-full object-cover ${pushQuickVideo ? "z-10" : "z-20"}`}
//       >
//         <source src={loop[loopIndex]} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Quick Video */}
//       {pushQuickVideo && (
//         <video
//           autoPlay
//           muted
//           key={vedio[vedioIndex]}
//           className={`absolute top-0 left-0 w-full h-full object-cover ${pushQuickVideo ? "z-20" : "z-10"}`}
//           onEnded={handleQuickVideoEnd} // Call this function when the video ends
//         >
//           <source src={vedio[vedioIndex]} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       )}

//       {/* Content Container */}
//       <div className="relative z-40 flex flex-col justify-between h-full px-4 py-5">
//         {/* Header Section */}
//         <div>
//           <div className="flex items-center space-x-2 py-4">
//             <button
//               onClick={navigateBack}
//               className="text-white flex items-center space-x-1 bg-white rounded-full p-0.5"
//             >
//               <GoArrowLeft size={20} color="black" />
//             </button>
//             <span className="text-white">TO HOUSE LIST</span>
//           </div>
//           <div className="max-w-xl">
//             <PropertyDimensionDetails propertie={propertie} />
//             <InteriorDimensionDetails interiorSizing={propertie.interiorSizing} />
//           </div>
//         </div>

//         {/* Footer Section */}
//         <Catalog switchImage={switchImage} />
//       </div>
//     </section>
//   );
// };

// export default PropertyBriefDescription;







import React, { useState, useMemo } from "react";
import { GoArrowLeft } from "react-icons/go";
import PropertyDimensionDetails from "./PropertyDimensionDetails";
import InteriorDimensionDetails from "./InteriorDimensionDetails";
import Catalog from "./Catalog";

import vedio12 from '../../property-assets/38A/exterior/videos/live/vedio12.mp4';
import vedio23 from '../../property-assets/38A/exterior/videos/live/vedio23.mp4';
import vedio31 from '../../property-assets/38A/exterior/videos/live/vedio31.mp4';

import loop1 from '../../property-assets/38A/exterior/videos/loop/loop1.mp4';
import loop2 from '../../property-assets/38A/exterior/videos/loop/loop2.mp4';
import loop3 from '../../property-assets/38A/exterior/videos/loop/loop3.mp4';
import loop4 from '../../property-assets/38A/exterior/videos/loop/loop4.mp4';

const PropertyBriefDescription = ({ propertie, navigateBack }) => {
  const [loopIndex, setLoopIndex] = useState(0);
  const [vedioIndex, setVedioIndex] = useState(0);
  const [pushQuickVideo, setPushQuickVideo] = useState(false);
  const [isReady, setIsReady] = useState({
    vedio1: true,
    vedio2: false,
    vedio3: false,
    vedio4: false,
  });

  // Memoize the video arrays so they are not recreated on every render
  const loop = useMemo(() => [loop1, loop2, loop3, loop4], []);
  const vedio = useMemo(() => [vedio12, vedio23, vedio31], []);

  // Handle video switch
  const switchImage = (vedioIndex, loopIndex) => {
    setVedioIndex(vedioIndex);

    // Reset all and set the current loopIndex to true
    setIsReady({
      vedio1: loopIndex === 0,
      vedio2: loopIndex === 1,
      vedio3: loopIndex === 2,
      vedio4: loopIndex === 3,
    });

    setPushQuickVideo(true); // Play quick video
  };

  const handleQuickVideoEnd = () => {
    setPushQuickVideo(false); // Go back to loop video after quick video ends
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Container for Overlay and Videos */}
      <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 `}>

      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {/* Looping Background Videos */}
        <video
          autoPlay
          loop
          muted
          preload="auto"
          key={loop[0]}
          className={`absolute top-0 left-0 w-full h-full object-cover ${isReady.vedio1 ? "z-20" : "hidden"}`}
        >
          <source src={loop[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          preload="auto"
          key={loop[1]}
          className={`absolute top-0 left-0 w-full h-full object-cover ${isReady.vedio2 ? "z-20" : "hidden"}`}
        >
          <source src={loop[1]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          preload="auto"
          key={loop[2]}
          className={`absolute top-0 left-0 w-full h-full object-cover ${isReady.vedio3 ? "z-20" : "hidden"}`}
        >
          <source src={loop[2]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          preload="auto"
          key={loop[3]}
          className={`absolute top-0 left-0 w-full h-full object-cover ${isReady.vedio4 ? "z-20" : "hidden"}`}
        >
          <source src={loop[3]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Semi-Transparent Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Quick Video */}
      {pushQuickVideo && (
        <video
          autoPlay
          muted
          key={vedio[vedioIndex]}
          className="absolute top-0 left-0 w-full h-full object-cover z-30"
          onEnded={handleQuickVideoEnd} // End quick video, return to loop
        >
          <source src={vedio[vedioIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Content Container */}
      <div className="relative z-40 flex flex-col justify-between h-full px-4 py-5">
        {/* Header Section */}
        <div>
          <div className="flex items-center space-x-2 py-4">
            <button
              onClick={navigateBack}
              className="text-white flex items-center space-x-1 bg-white rounded-full p-0.5"
            >
              <GoArrowLeft size={20} color="black" />
            </button>
            <span className="text-white">TO HOUSE LIST</span>
          </div>
          <div className="max-w-xl">
            <PropertyDimensionDetails propertie={propertie} />
            <InteriorDimensionDetails interiorSizing={propertie.interiorSizing} />
          </div>
        </div>

        {/* Footer Section */}
        <Catalog switchImage={switchImage} />
      </div>
    </section>
  );
};

export default PropertyBriefDescription;
