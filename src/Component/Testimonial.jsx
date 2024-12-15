

import React from 'react'

const Testimonial = ({ testimonial, person, backgroundColor }) => {

  const styleConfig = {
    backgroundColor: backgroundColor
  }
  return (
    <div style = {styleConfig}  className={
        `w-full bg-[${backgroundColor}] sticky h-screen top-0 left-0 `
    }>
        <p className="py-8 font-gravity uppercase text-[4vw] lg:text-[2.2vw] text-center">
          What our clients have to say
        </p>

        <div className="top-1/2 absolute">
          <h2 className=" w-[98%]  lg:w-2/3 text-center font-space  text-[3vw] lg:text-[2.4vw] leading-snug mx-auto">
           {testimonial}
          </h2>
          <small className=" text-[2.2vw]  lg:text-[1.2vw] uppercase  py-4 text-center block font-sharp ">
            {person}
          </small>
        </div>
      </div>
  )
}

export default Testimonial;




