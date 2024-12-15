import { Rive } from "@rive-app/canvas";
import { useRef } from "react";
import { useEffect } from "react";
import { RIV_FILE_URL } from "../Utils/constant";

export default function useRivFile(rivConfig) {
  const canvasRef = useRef();

  
  const path = RIV_FILE_URL;

  useEffect(() => {
    reSizeCanvas(canvasRef);
    new Rive({
      ...rivConfig,
      src: path,
      canvas: canvasRef?.current,
    });
  }, []);


  return canvasRef;
}

function reSizeCanvas(canvasRef) {
  const normalizeValue = window.innerWidth > 768 ? 300 : 150;
  canvasRef.current.width = window.innerWidth;
  canvasRef.current.height = normalizeValue;
}
