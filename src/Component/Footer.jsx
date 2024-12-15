import React from "react";
import CallToAction from "./CallToAction";
import useRivFile from "../hooks/useRivFile";
import { FIRST_RIV_FILE_CONFIG } from "../Utils/constant";

const Footer = () => {

   const canvasRef = useRivFile(FIRST_RIV_FILE_CONFIG)
  return (
    <div className="bg-black  w-full py-[2.5vw] px-[1.5vw] overflow-hidden  text-white">
      <div className="footer-top flex justify-between px-[2.5vw] items-center">
        <p className="font-space text-[2.4vw] lg:text-[1.6vw] leading-none text-white w-1/2 lg:w-[34%]">
          It’s not client and supplier. It’s equals; partners. Teamwork –
          smooth, enjoyable and incredibly productive. And from experience, the
          results are so much better for it.
        </p>

        <CallToAction fixed={false} />
      </div>

      <div className="h-[6vw] w-full"></div>
      <div className="footer-mid flex px-[2.5vw] justify-between">
        <div className="first-links">
          <h3 className="uppercase font-sharp opacity-75 text-[2.4vw] lg:text-[1.4vw]">
            studio
          </h3>
          <ul className="font-space text-[2vw] lg:text-[1.2vw] mt-6">
            <li>About</li>
            <li>Work</li>
            <li>Journal</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="second-links">
          <h3 className="uppercase font-sharp opacity-75 text-[2.4vw] lg:text-[1.4vw]">
           SOCIALS
          </h3>
          <ul className="font-space text-[2vw] lg:text-[1.2vw] mt-6">
            <li>LinkedIn</li>
            <li>Dribbble</li>
            <li>Behance</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="second-links w-1/3 lg:w-[18%]">
          <h3 className="uppercase font-sharp opacity-75 text-[2.4vw] lg:text-[1.4vw]">
          STUDIO
          </h3>
          <div className="font-space text-[2vw] lg:text-[1.2vw] mt-6">
            <p className="pb-4" >Airborne Studio
Department Leeds Dock
4 The Boulevard
Leeds LS10 1PZ</p>
            <p>hello@airborne.studio</p>
          </div>
        </div>
      </div>

      <canvas style={{width: "100%",height: "100%"}}  ref={canvasRef}></canvas>

      <div className="px-[2.5vw] flex justify-between items-center">
        <p className="text-[1.2vw] opacity-75 font-sharp uppercase">© 2024 Airborne Studio Limited</p>
        <div className="flex justify-between">
            <p className="text-[1.2vw] flex gap-2 opacity-75 uppercase  font-sharp">
                <a href="">Privacy</a>
                *
                <a href="">Terms</a>

            </p>
            

        </div>

      </div>
    </div>
  );
};

export default Footer;
