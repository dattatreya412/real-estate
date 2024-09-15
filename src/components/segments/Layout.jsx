import React from "react";

import vedio12 from '../../property-assets/38A/exterior/videos/live/vedio12.mp4';
import vedio23 from '../../property-assets/38A/exterior/videos/live/vedio23.mp4';
import vedio31 from '../../property-assets/38A/exterior/videos/live/vedio31.mp4';

// import loop1 from '../../property-assets/38A/exterior/videos/loop/loop1.mp4';
import loop2 from '../../property-assets/38A/exterior/videos/loop/loop2.mp4';
import loop3 from '../../property-assets/38A/exterior/videos/loop/loop3.mp4';
import loop4 from '../../property-assets/38A/exterior/videos/loop/loop4.mp4';
import loop1 from '../../property-assets/38A/exterior/videos/live/new.mp4';

const Layout = () => {
  const [loopIndex, setLoopIndex] = useState(0);
  const [vedioIndex, setVedioIndex] = useState(0);
  const [pushQuickVideo, setPushQuickVideo] = useState(false);

  // Memoize the video arrays so they are not recreated on every render
  const loop = useMemo(() => [loop1, loop2, loop3, loop4], []);
  const vedio = useMemo(() => [vedio12, vedio23, vedio31], []);

  const switchImage = (vedioIndex, loopIndex) => {
    setVedioIndex(vedioIndex);
    setLoopIndex(loopIndex);
    setPushQuickVideo(true);
  };

  const handleQuickVideoEnd = () => {
    setPushQuickVideo(false);
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        key={loop[loopIndex]}
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          pushQuickVideo ? "z-10" : "z-20"
        }`} 
      >
        <source src={loop[loopIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Quick Video */}
      {pushQuickVideo && (
        <video
          autoPlay
          muted
          key={vedio[vedioIndex]}
          className={`absolute top-0 left-0 w-full h-full object-cover ${
            pushQuickVideo ? "z-20" : "z-10"
          }`}
          onEnded={handleQuickVideoEnd} // Call this function when the video ends
        >
          <source src={vedio[vedioIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </section>
  );
};

export default Layout;
