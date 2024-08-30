"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
const Hero = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to("#rotate", {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div
        ref={comp}
        className="h-[52rem] relative bg-[#292e36] flex lg:flex-row flex-col gap-32 lg:justify-between items-center py-5 lg:py-0  px-16 font-serif text-[#fff8f5] overflow-hidden"
      >
        <div className="flex flex-col items-center gap-7 lg:items-start">
          <h1 className="lg:text-8xl text-[4rem] lg:text-start text-center">
            Welcome to Restaurant
          </h1>
          <p className=" tracking-wider text-lg lg:text-start text-center">
            The people, food and the prime locations make the perfect place good
            friends &amp; family to come together and have great time.
          </p>
          <button className="border-2 w-64 md:text-medium border-[#e1b168] text-[#e1b168] px-16 md:py-6 py-8 text-2xl hover:bg-[#e1b168] hover:text-[#333] duration-300 ease-in-out">
            View Menu
          </button>
        </div>
        <div className="flex">
          <img
            id="rotate"
            className="absolute top-[3rem] right-[3.5rem] hidden lg:flex"
            src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6229b4f953997e7786e1bec8_hero-wheel-pattern.svg"
          ></img>
          <div className="lg:h-[51rem] w-[30rem] h-[42rem] z-10 -mt-16 lg:mt-20 mr-5 lg:w-[681px] border-[30px] border-[#555] rounded-t-full overflow-hidden">
            <img
              className=""
              src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6229b247d132ea71a84093db_hero-image.jpg"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 84vw, (max-width: 991px) 69vw, (max-width: 1279px) 43vw, (max-width: 1439px) 89vw, 1201px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
