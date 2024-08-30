import React from "react";

const OfferCard = (props) => {
  const { value } = props;
  return (
    <>
      <div
        className="w-[45rem] h-[25rem] bg-gradient-to-r bg-cover bg-center rounded-md flex justify-between text-[#333] pt-12 px-[3rem] font-mono"
        style={{
          backgroundImage: `url(${value.bgImg})`,
        }}
      >
        <div className={`flex flex-col items-start gap-5 w-1/2 `}>
          <div
            className={`relative h-[8rem] w-[8rem] bg-cover bg-center flex flex-col pt-5 items-center ${
              value.tagColor ? "text-white" : ""
            }`}
            style={{
              backgroundImage: `url(${value.tagImg})`,
            }}
          >
            <p className=" text-sm font-extralight -rotate-12 mr-3">ONLY</p>
            <h3 className=" text-4xl font-bold -rotate-12 pt-1">
              ${value.price}
            </h3>
          </div>
          <div className="w-fit border-y border-[#333]">
            <p className=" tracking-[0.3rem] uppercase">{value.title}</p>
          </div>
          <div>
            <h3 className="text-4xl font-ligth font-serif">{value.itemName}</h3>
            <p className="text-lg line-clamp-3">{value.desc}</p>
          </div>
        </div>
        <div className="w-[18rem] h-[18rem] pt-[3rem]">
          <img src={value.img} alt="" />
        </div>
      </div>
    </>
  );
};

export default OfferCard;
