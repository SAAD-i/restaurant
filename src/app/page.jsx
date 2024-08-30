import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Detail from "@/components/Detail";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import OfferCard from "@/components/OfferCard";
import OffersSection from "@/components/OffersSection";
const Home = () => {
  return (
    <>
      <div className="w-fit">
        <div className="">
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <Detail />
        </div>
        <div>
          <Story />
        </div>
        <div>
          <OffersSection />
        </div>
        {/* <div>
          <Menu />
        </div>
        <div className="w-full flex flex-col gap-10 h-[845px] bg-white p-20">
          <OfferCard />
        </div> */}
      </div>
    </>
  );
};
export default Home;
