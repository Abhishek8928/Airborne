

import React from 'react'

const CallToAction = ({fixed}) => {
  return (
    <div className={`fixed-con  relative size-[12vw] lg:size-[7.3vw] bg-[#404cd6] ${fixed ?? true ? "absolute bottom-6  demo" : ""} flex justify-center items-center  rounded-full`}>
        <small className=" text-[2vw] lg:text-[1.3vw]  font-sharp leading-none text-white text-center uppercase">
          Let's work
        </small>

        <img
          className="absolute scale-0 top-0 left-0"
          src="https://cdn.prod.website-files.com/66e91bdd12136933608fa38c/66f3c1bdbe9e9e81ec4eb2e5_Group%2016034.svg"
          alt=""
        />
      </div>
  )
}

export default CallToAction