"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Story = () => {
  const main = useRef(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "15% 95%",
      },
    });
    const animation1 = gsap.from("#se2,#se3", {
      opacity: 0,
      x: 200,
    });
    const animation2 = gsap.to("#se2,#se3", {
      opacity: 100,
      x: 0,
      duration: 2,
      ease: "power3.out",
    });
    const animation3 = gsap.from("#se1", {
      opacity: 0,
    });
    const animation4 = gsap.to("#se1", {
      opacity: 100,
      duration: 3,
      ease: "power3.in",
    });
    const animation5 = gsap.from("#se4", {
      opacity: 0,
      y: 200,
    });
    const animation6 = gsap.to("#se4", {
      opacity: 100,
      y: 0,
      duration: 4,
      ease: "power3.out",
    });
    tl.add(animation1, 0)
      .add(animation2, 0)
      .add(animation3, 0)
      .add(animation4, 0)
      .add(animation5, 0)
      .add(animation6, 0);
  }, []);
  return (
    <>
      <div
        ref={main}
        className=" lg:h-[47rem] flex items-center justify-center font-serif tracking-wider text-[#333] py-16"
      >
        <div className="flex justify-between lg:flex-row flex-col lg:gap-0 gap-5">
          <img
            id="se1"
            className="rounded-sm lg:w-[47rem] lg:h-[33rem] w-[42rem] h-[30rem] lg:mr-10 opacity-0"
            src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/624299ca23b66156953f5d36_about-story-image.jpg"
            alt="About Story Image"
            sizes="(max-width: 479px) 92vw, (max-width: 702px) 91vw, (max-width: 1439px) 639px, (max-width: 1919px) 96vw, 1320px"
          />
          <div className="w-[33rem] h-[35rem]  flex flex-col items-start gap-5 p-3">
            <h3 className="text-4xl font-bold">The Delicious Story</h3>
            <p className="text-lg">
              The people, food and the prime locations make the perfect place
              for the friends & family to come together and have great time.
            </p>
            <div className="flex flex-col lg:flex-row lg:gap-0 gap-8">
              <div id="se2">
                <h3 className="text-4xl font-bold">2018</h3>
                <p className="text-lg mt-3">
                  Plan for this restaurant to deliver healthy food.
                </p>
              </div>
              <div id="se3">
                <h3 className="text-4xl font-bold">2024</h3>
                <p className="text-lg mt-3">
                  Happily in the fourth year by fulfill the motto.
                </p>
              </div>
            </div>
            <div className="w-full pl-40 lg:pl-0 flex justify-center lg:justify-start">
              <h3
                id="se4"
                className="text-6xl line-through font-mono font-bold mt-20 border py-4 px-8 border-[#e1b168] text-[#e1b168]"
              >
                JOSEFINE
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
