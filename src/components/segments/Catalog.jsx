import React from "react";

import view1 from "../../property-assets/38A/exterior/images/view1.png";
import view2 from "../../property-assets/38A/exterior/images/view2.png";
import view3 from "../../property-assets/38A/exterior/images/view3.png";
import view4 from "../../property-assets/38A/exterior/images/view4.png";

// import vedio12 from '../../property-assets/38A/exterior/videos/live/vedio12.mp4'
// import vedio23 from '../../property-assets/38A/exterior/videos/live/vedio23.mp4'
// import vedio31 from '../../property-assets/38A/exterior/videos/live/vedio31.mp4'

// import loop1 from '../../property-assets/38A/exterior/videos/loop/loop1.mp4'
// import loop2 from '../../property-assets/38A/exterior/videos/loop/loop2.mp4'
// import loop3 from '../../property-assets/38A/exterior/videos/loop/loop3.mp4'
// import loop4 from '../../property-assets/38A/exterior/videos/loop/loop4.mp4'


const Catalog = ({switchImage}) => {
  return (
    <section className="flex justify-center">
      <div className="p-2  w-1/2 h-28 flex flex-row items-center justify-between text-white">
        <div className="w-10 h-10 m-2 bg-blue-300"></div>
        <div className="flex gap-2">
          <div>
            <h3>EXTERIOR</h3>
            <hr />
            <div className="flex gap-1">
              <button className="w-12 h-12 m-2 hover:border-2 hover:border-neutral-50 rounded-sm">
                <img
                  src={view1}
                  alt=""
                  className="w-full h-full object-cover object-left-bottom"
                  onClick={()=>{switchImage(1, 0)}}
                />
              </button>
              <button className="w-12 h-12 m-2 hover:border-2 hover:border-neutral-50 rounded-sm">
                <img
                  src={view2}
                  alt=""
                  className="w-full h-full object-cover object-center"
                  onClick={()=>{switchImage(0, 1)}}
                />
              </button>
              <button className="w-12 h-12 m-2 hover:border-2 hover:border-neutral-50 rounded-sm">
                <img
                  src={view3}
                  alt=""
                  className="w-full h-full object-cover object-center"
                  onClick={()=>{switchImage(3, 2)}}
                />
              </button>
              <button className="w-12 h-12 m-2 hover:border-2 hover:border-neutral-50 rounded-sm">
                <img
                  src={view4}
                  alt=""
                  className="w-full h-full object-cover object-center"
                  onClick={()=>{switchImage(2,3)}}
                />
              </button>
            </div>
          </div>
          <div>
            <h3>INTERIOR</h3>
            <hr />
            <div className="flex gap-1">
              <div className="w-12 h-12 bg-blue-300 m-2"></div>
              <div className="w-12 h-12 bg-blue-300 m-2"></div>
            </div>
          </div>
          <div>
            <h3>GALLERY</h3>
            <hr />
            <div className="flex gap-1">
              <div className="w-12 h-12 bg-blue-300 m-2"></div>
            </div>
          </div>
        </div>
        <div className="w-10 h-10  m-2 bg-blue-300"></div>
      </div>
    </section>
  );
};

export default Catalog;
