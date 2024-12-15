

import React from 'react'
import { THIRD_RIV_FILE_CONFIG } from '../Utils/constant';
import useRivFile from '../hooks/useRivFile';
import ProjectListWrapper from './ProjectListWrapper';

const ProjectShowecase = () => {
    const canvasRef = useRivFile(THIRD_RIV_FILE_CONFIG);
  return (
    <div className="w-full relative py-[6rem] ">
    <div className="sticky top-[8rem]  left-0 w-full  overflow-x-hidden">
        <canvas  style={{width: "100%" , height:"100%"}} ref={canvasRef}></canvas>

        <div className="content-wrapper">
            <div className="px-[1.5vw] flex justify-center">
                <p className="text-center w-full  lg:w-2/3 font-space text-[2.8vw] lg:text-[1.8vw] leading-none">
                    We believe the best work is born out of collaboration. Getting
                    to know you intimately. Becoming as invested in your future as
                    you are. If that’s the kind of relationship you’re looking for,
                    we should talk.
                </p>
            </div>
            <button className="mx-auto border-2 border-[#404cd6] font-sharp transition-all duration-100 about-us-btn flex hover:flex-row-reverse items-center rounded-full gap-2 mt-10 text-[2vw] lg:text-[1.2vw] text-[#404cd6] px-[1.4vw] py-1">
                OUR WORKS
                <i className="ri-arrow-right-line font-extralight"></i>
            </button>
        </div>
    </div>

    <ProjectListWrapper />

    
</div>
  )
}

export default ProjectShowecase