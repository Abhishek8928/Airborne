

import React from 'react'
import { MARQUEE_IMG_URL } from '../Utils/constant'

const Marquee = () => {
  return (
    <>
    {MARQUEE_IMG_URL.map((item) => (
        <div
          key={item?.imgUrl}
          className="lg:w-[24vw] w-[20vw]  flex-shrink-0  flex justify-center"
        >
          <img className='h-[3vw]' src={item?.imgUrl} alt="" />
        </div>
      ))}
    
    </>
  )
}

export default Marquee