import React from "react";

const PaymentPlanCard = ({ title, subTitle, features, selected }) => {
  return (
    <div className="flex justify-center items-center w-full cursor-pointer">
      <div
        className={`bg-gradient-to-b from-secondary to-primary shadow-2xl transition-all duration-500 h-[450px] xl:h-[500px] w-[300px] text-white rounded-[60px] rounded-tr-none flex flex-col justify-evenly items-center font-semibold text-center`}
      >
        <div className="space-y-1">
          <p className="font-bold text-med">{title} </p>
          <p className="font-semibold text-small">{subTitle} </p>
        </div>
        <div
          className={`${
            selected
              ? "bg-[#f19148] shadow-lg"
              : "bg-[#f19148]/70 text-white/90"
          }  h-[100px] w-[100px] rounded-tl-full rounded-bl-full rounded-br-full flex flex-col justify-center items-center transition-all duration-500`}
        >
          <p className="font-bold text-small drop-shadow-2xl"> 20 / 80</p>
        </div>
        <div className="space-y-3 w-[200px]">
          {features?.map((item, index) => {
            return (
              <p className="font-semibold text-smaller" key={index}>
                {item?.text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCard;
