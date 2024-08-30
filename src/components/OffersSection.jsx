"use client";
import React, { useLayoutEffect, useRef } from "react";
import OfferCard from "./OfferCard";
import gsap from "gsap";
const OffersSection = () => {
  const main = useRef(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "40% 90%",
      },
    });
    const animation1 = gsap.from("#card1,#card2", {
      opacity: 0,
      y: 200,
    });
    const animation2 = gsap.to("#card1,#card2", {
      opacity: 100,
      y: 0,
      duration: 2,
      ease: "power1.out",
    });
    tl.add(animation1, 0).add(animation2, 0);
  }, []);
  const cardData = [
    {
      price: 10,
      title: "30% Offer going",
      itemName: "Zinger Burger",
      desc: "Zinger burger with the tasty toppings. Our most selling recepie wiht unique taste.",
      tagImg:
        "https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/62301d273087db6f344caaa7_offer-bg-1.svg",
      tagColor: 0,
      img: "https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/62302073b2cf9e730021e138_special-dish-1.png",
      bgImg:
        "https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/62301cd8fcf4b25ef904e220_special-dish-bg-1.jpg",
    },
    {
      price: 100,
      title: "50% Offer going",
      itemName: "Chicken Pizza",
      desc: "Pizza with multiple flavor and the toping are mixed.",
      tagImg:
        "https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/6230226f3dfe38bbe2ce6745_offer-bg-2.svg",
      tagColor: 1,
      img: "https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/623021fad15b67973a116d80_special-dish-2.png",
      bgImg:
        "https://assets-global.website-files.com/622856f73bdd0f82f7741cb2/62302247d15b671948116e28_special-dish-bg-2.jpg",
    },
  ];
  return (
    <>
      <div
        ref={main}
        className="bg-white min-h-[60rem] flex flex-col items-center py-16 gap-20"
      >
        <div className="flex flex-col items-center gap-8">
          <div className="w-fit border-y border-[#e1b168]">
            <p className=" tracking-[0.3rem] uppercase">OFFERS</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-4xl font-ligth font-serif">Our Offer Dishes</h3>
            <p className="text-lg w-2/3 text-center">
              Our chefs create melt-in-your-mouth dishes that'll satiate even
              the fussiest eaters now the dishes are in offers use it based on
              hunger.
            </p>
          </div>
        </div>
        <div className="flex gap-5 flex-col lg:flex-row px-4">
          <div id="card1">
            <OfferCard value={cardData[0]} />
          </div>
          <div id="card2">
            <OfferCard value={cardData[1]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersSection;
