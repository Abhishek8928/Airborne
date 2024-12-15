

import React from 'react'
import Marquee from './Marquee'

const MaqueeWrapper = () => {
    return (
        <div className="marquee-wrapper w-full overflow-hidden  py-[6vw] flex gap-[12vw] lg:gap-[4vw] ">
            <Marquee />
            <Marquee />
        </div>
    )
}

export default MaqueeWrapper