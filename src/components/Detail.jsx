"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Detail = () => {
  const main = useRef(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "10% 100%",
      },
    });
    tl.from("#e1,#e2,#e3", {
      opacity: -50,
      y: 200,
    });
    tl.to("#e1,#e2,#e3", {
      opacity: 100,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power1.out",
    });
  }, []);
  return (
    <>
      <div
        ref={main}
        id="main"
        className="w-fit bg-[#fff8f5] grid grid-cols-1 lg:grid-cols-3 gap-10 lg:py-24 py-16 px-16 font-serif pr-32 tracking-wider text-[#333]"
      >
        <div id="e1" className="flex justify-between items-center gap-5">
          <div className="bg-[#333] rounded-full w-[83px] h-[83px] flex justify-center items-center">
            <img
              src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6229b772cb568e7b96d20e2d_detail-icon-1.svg"
              alt="Detail Icon"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold">Locate Us</h2>
            <p className="text-sm text-[#333]">
              Riverside 25, San Diego, California
            </p>
          </div>
        </div>
        <div id="e2" className="flex justify-between items-center gap-5">
          <div className="bg-[#333] rounded-full w-[83px] h-[83px] flex justify-center items-center">
            <img
              src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6229b8c45ca27b60baad8342_detail-icon-2.svg"
              alt="Detail Icon"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold">Open Hours</h2>
            <p className="text-sm text-[#333]">Mon To Fri 9:00 AM - 9:00 PM</p>
          </div>
        </div>
        <div id="e3" className="flex justify-between items-center gap-5">
          <div className="bg-[#333] rounded-full w-[83px] h-[83px] flex justify-center items-center">
            <img
              src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6229b8cd53997e91fce1dc76_detail-icon-3.svg"
              alt="Detail Icon"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold">Reservation</h2>
            <p className="text-sm text-[#333]">restaurantate@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
