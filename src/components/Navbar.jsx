"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RxHamburgerMenu } from "react-icons/rx";
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  const comp = useRef(null);
  const nav = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const animation1 = gsap.from("#lb", {
        opacity: 0,
        x: -1000,
        duration: 1,
        ease: "ease-in-out",
      });
      const animation2 = gsap.from("#logo", {
        opacity: 0,
        duration: 3,
        ease: "ease-in-out",
      });
      const animation3 = gsap.from("#rb", {
        opacity: 0,
        duration: 1,
        x: 1000,
        ease: "ease-in-out",
      });
      const tl = gsap
        .timeline()
        .add(animation1, 0)
        .add(animation2, 0)
        .add(animation3, 0);
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="bg-[#292e36] overflow-hidden">
        <div
          ref={comp}
          className="flex lg:flex-row lg:gap-2 gap-6 flex-col justify-between items-center py-16 px-16 font-serif text-lg font-semibold"
        >
          <div id="lb">
            <button className="w-fit px-10 text-nowrap h-[4.5rem] border-[#e1b168] border-2 text-white tracking-widest hover:bg-[#e1b168] hover:text-[#333] duration-200 ease-in-out">
              Call 123-456-789
            </button>
          </div>
          <img
            id="logo"
            src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6246d7f2c2b5677de6d04e5f_tasteat-brand-logo.svg"
            alt=""
          />
          <div id="rb">
            <button className="w-fit px-16 h-[4.5rem] text-[#333] border-2 border-[#e1b168] bg-[#e1b168] tracking-widest hover:bg-transparent hover:text-[#e1b168] duration-200 ease-in-out">
              Reservation
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center py-1 md:px-16 px-4 border-t border-b border-b-[#5c6168] border-t-[#5c6168]">
          <button className="md:hidden rounded-sm m-4 px-2 bg-white hover:bg-[#e1b168] hover:text-white">
            <RxHamburgerMenu size={70} />
          </button>
          <nav
            ref={nav}
            className="md:flex lg:w-[40rem] justify-between w-[28rem] items-center h-20 text-white font-semibold hidden"
          >
            <a
              className="hover:text-[#e1b168] duration-300 ease-in-out"
              href=""
            >
              Home
            </a>
            <a
              className="hover:text-[#e1b168] duration-300 ease-in-out"
              href=""
            >
              About Us
            </a>
            <a
              className="hover:text-[#e1b168] duration-300 ease-in-out text-center"
              href=""
            >
              Our Menu
            </a>
            <div className="">Pages</div>
            <a
              className="hover:text-[#e1b168] duration-300 ease-in-out text-center"
              href=""
            >
              Blog
            </a>
            <a
              className="hover:text-[#e1b168] duration-300 ease-in-out text-center"
              href=""
            >
              Contact Us
            </a>
          </nav>
          <div className="flex justify-between lg:w-40 items-center gap-8">
            <a href="">
              <img
                className="w-16 h-16 md:w-8 md:h-8"
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/622879561ac344751081f7f3_social-white-icon-1.svg"
                loading="lazy"
                alt="Header Social Icon"
              />
            </a>
            <a href="">
              <img
                className="w-16 h-16 md:w-8 md:h-8"
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/622879a1180929e7b5a73221_social-white-icon-2.svg"
                loading="lazy"
                alt="Header Social Icon"
              />
            </a>
            <a href="">
              <img
                className="w-16 h-16 md:w-8 md:h-8"
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/655afe9f73021a4d4bc26a34_social-white-icon-3.svg"
                loading="lazy"
                alt="Header Social Icon"
              />
            </a>
            <a href="">
              <img
                className="w-16 h-16 md:w-8 md:h-8"
                src="https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/622879b72fd62b54a7fe9322_social-white-icon-4.svg"
                loading="lazy"
                alt="Header Social Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
