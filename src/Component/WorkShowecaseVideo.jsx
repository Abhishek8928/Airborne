import React from "react";

const WorkShowecaseVideo = () => {
  return (
    <div className="w-full flex justify-center items-center h-[70vh] lg:h-screen">
      <div className=" w-[90vw] rounded-md  h-[90vh]  lg:w-[80vw] lg:h-[80vh]  overflow-hidden">
        <iframe
          className="w-full h-full block rounded-lg"
          src="https://player.vimeo.com/video/1018321383?controls=0&autoplay=1&muted=1"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WorkShowecaseVideo;
