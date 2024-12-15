import { Rive } from "@rive-app/canvas";
import useRivFile from "../hooks/useRivFile";
import { FIRST_RIV_FILE_CONFIG, popUpImgUrlList } from "../Utils/constant";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const HeroWrapper = () => {
  const canvasRef = useRivFile(FIRST_RIV_FILE_CONFIG);

  const heroContainerRef = useRef(null);
  const renderImgRef = useRef(null);

  

  function eventExecutor(event, renderImgRef) { 

    console.log(event)

      const randomNumber = Math.floor(Math.random() * 40);
      const { x, y } = event;
      const randomImg = popUpImgUrlList[randomNumber];
      const img = document.createElement("img");
      img.src = randomImg;
      renderImgRef.appendChild(img);
      img.style.position = "absolute";
      img.style.left = `${x}px`;
      img.style.zIndex = "50";
      img.style.top = `${y}px`;
      img.style.transform = `translate(-100%, -100%)`;
      img.style.width = "300px";
      img.style.height = "300px";
      img.style.objectFit = "cover";

      var t1 = gsap.timeline();
      t1.to(img, {
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }).to(img, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete:()=>{
          renderImgRef.removeChild(img);
        }
      });
    }
  

  useEffect(() => {
    const { current } = heroContainerRef;

    current.addEventListener("mousemove", (event) => eventExecutor(event, renderImgRef.current));
  }, []);

  return (

    <>
    
    
    
    <div
      ref={heroContainerRef}
      className="w-full z-[60]  -mt-[3vw] px-[1.5vw] h-screen relative  overflow-hidden  "
    >
      <canvas style={{ width: "100%" }} ref={canvasRef}></canvas>

      <div className="small-text font-sharp absolute left-1/2 -translate-x-1/2 z-[60]  top-1/2 -translate-y-1/2">
        <h2 className="text-center text-white leading-snug pt-8 uppercase text-[2.2vw] lg:text-[1.1vw] tracking-wide">
          Lead the <br /> Change, don’t <br /> let the change <br /> lead you
        </h2>
      </div>

      <div className="small-text absolute z-[60] p-[1.2vw] font-sharp bottom-[4%] left-[1.5vw]">
        <h2 className=" text-white  leading-snug pt-8 uppercase text-[2.6vw] lg:text-[1.14vw] tracking-wide">
          Brand, creative and <br /> development partners to
          <br /> tech and cultural <br /> changemakers
        </h2>
      </div>

      
    </div>
    <div
    ref={renderImgRef}
    className="current w-full  h-screen   z-[40] absolute top-0 left-0"
  ></div>

</>
  );
};

export default HeroWrapper;
