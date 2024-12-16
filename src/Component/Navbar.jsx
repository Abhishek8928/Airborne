import React, { useRef, useState } from "react";
import { NAV_LINK_CONFIG } from "../Utils/constant";
import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const topNavPanel = useRef(null);

  

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(topNavPanel.current , {
        right:0,
        duration:1,
        ease:"power1.inOut"
      })
    } else {
      gsap.to(topNavPanel.current , {
        right:'-100%',
        duration:2,
        ease:"power1.inOut"
      })
    }
  }, [isMenuOpen]);

  return (
    <div>
      <div
        ref={topNavPanel}
        className={`top-nav top-nav-panel -right-[100%]   bg-[#404CD6] fixed z-[100]   md:sticky md:bg-[rgba(0,0,0,0.5)]   top-0 p-[1.2vw] w-full flex-col h-screen md:h-auto  md:flex-row justify-center font-gravity  flex md:justify-between items-center md:font-sharp text-white `}
      >
        {NAV_LINK_CONFIG.map((item) => (
          <a
            key={item?.name}
            href=""
            className="uppercase  text-[6vw] md:text-[1.2vw]"
          >
            {item.name}
          </a>
        ))}

        <div
          className={`visible mob-cta md:hidden absolute bottom-[4%] left-1/2 size-[16vw] -translate-x-1/2   bg-white text-[#404cd6]  flex justify-center items-center  rounded-full`}
        >
          <small className=" text-[2.8vw]   font-sharp leading-none  text-center uppercase">
            Let's work
          </small>
        </div>
      </div>

      <div className="mob-only   relative z-[120]  py-[3%] visible md:hidden   text-white">
        <p
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="uppercase text-center  font-sharp text-[3vw]"
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
