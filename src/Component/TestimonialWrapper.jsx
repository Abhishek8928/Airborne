import React from "react";
import { TESTIMONIAL_LIST } from "../Utils/constant";
import Testimonial from "./Testimonial";

const TestimonialWrapper = () => {
  return <div className="w-full  ">

    {TESTIMONIAL_LIST.map(testimonial => <Testimonial key={testimonial.backgroundColor} {...testimonial}/>)}

  </div>;
};

export default TestimonialWrapper;
