import React from "react";
import { NAV_LINK_CONFIG } from "../Utils/constant";

const Navbar = () => {
  return (
    <div className="top-nav  sticky bg-[rgba(0,0,0,0.5)]  z-[10] top-0 p-[1.2vw] w-full flex justify-between items-center font-sharp text-white">
      {NAV_LINK_CONFIG.map((item) => (
        <a key={item?.name} href="" className="uppercase text-[1.8vw] md:text-[1.2vw]">
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
