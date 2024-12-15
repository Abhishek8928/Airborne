


import React from 'react'

const ProjectCard = ({imgUrl, title, position}) => {
  return (
    <div className={`w-[40%]  lg:w-1/4 absolute  ${position} `}>
            <div className='w-full'>
            <img className='w-full' src={imgUrl} alt="project-img" />
            </div>
            <div className="project-card-content py-2">

            <h2 className=' text-[3vw]  lg:text-[1.2vw] font-gravity'>{title}</h2>
            <button className="  font-sharp transition-all duration-100 about-us-btn flex hover:flex-row-reverse items-center rounded-full gap-2  text-[2vw] lg:text-[1.2vw] text-[#404cd6] ">
                VIEW CASE STUDY
                <i className="ri-arrow-right-line font-extralight"></i>
            </button>
            </div>
            


        </div>
  )
}

export default ProjectCard