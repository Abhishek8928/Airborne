import React from "react";
import {
 
  SECOND_RIV_FILE_CONFIG,
} from "../Utils/constant";
import useRivFile from "../hooks/useRivFile";

export const TagLineWrapper = () => {
  const canvasRef = useRivFile(SECOND_RIV_FILE_CONFIG);
  return (
    <div className=" pt-[20vw]  md:pt-[12vw]  relative bg-black  pb-[4vw] px-[1.5vw] overflow-x-hidden">
      <canvas style={{width: "100%" , height:"100%"}}  ref={canvasRef}></canvas>

      <div className="small-text lg:w-1/3 w-[80%] text-white leading-none lg:absolute top-[55%]  left-[45%] ">
        <p className=" font-space text-[3vw]  lg:text-[1.6vw]">
          Airborne interweaves strategy, design and tech to transform brands,
          and businesses. We help our partners lead change, not be led by it.
        </p>
      </div>

      <button className="bg-[#404cd6] font-sharp transition-all duration-100  about-us-btn flex hover:flex-row-reverse items-center rounded-full gap-2 mt-10 text-[2vw] lg:text-[1.2vw] text-white px-[1.4vw] py-1">
        ABOUT US
        <i className="ri-arrow-right-line font-extralight"></i>
      </button>
    </div>
  );
};
