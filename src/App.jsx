import React, { useEffect } from "react";
import Navbar from "./Component/Navbar";
import HeroWrapper from "./Component/HeroWrapper";
import { TagLineWrapper } from "./Component/TagLineWrapper";
import MaqueeWrapper from "./Component/MaqueeWrapper";
import WorkShowecaseVideo from "./Component/WorkShowecaseVideo";

import ProjectShowecase from "./Component/ProjectShowecase";
import TestimonialWrapper from "./Component/TestimonialWrapper";
import Footer from "./Component/Footer";
import CallToAction from "./Component/CallToAction";

import Lenis from "lenis";

export default function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className="bg-black">
        <Navbar />

        <HeroWrapper />

        <TagLineWrapper />
      </div>

      <div className="bg-[#FBF4E6] pointer-events-none">
        <WorkShowecaseVideo />

        <MaqueeWrapper />

        <ProjectShowecase />
      </div>

      <TestimonialWrapper />

      <Footer />

      {/* <CallToAction/> */}
    </>
  );
}
