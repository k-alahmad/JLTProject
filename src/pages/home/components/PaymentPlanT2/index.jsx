import React, { useState } from "react";
import PaymentPlanCard from "./PaymentPlanCard";
import { data } from "../../../../data/paymentPlanData";
const PaymentPlanT2 = () => {
  let elmnts = ["1", "2", "3"];
  const [selected, setSelected] = useState(1);
  return (
    <>
      <div className="flex flex-row justify-center items-center px-[5%] lg:px-[10%] p-20 relative h-[700px] ">
        {data.plans.map((item, index) => {
          return (
            <div
              className={`transition-all duration-500 border-none outline-none absolute ${
                selected == index
                  ? "scale-[0.9] lg:scale-125 z-20"
                  : selected > index && index + 1 == selected
                  ? "scale-75 lg:scale-100 -translate-x-[25%] lg:-translate-x-[120%]"
                  : selected > index && index + 1 !== selected
                  ? "scale-75 lg:scale-100 translate-x-[25%] lg:translate-x-[120%]"
                  : selected < index && index - 1 == selected
                  ? "scale-75 lg:scale-100 translate-x-[25%] lg:translate-x-[120%]"
                  : selected < index &&
                    index - 1 !== selected &&
                    "scale-75 lg:scale-100 -translate-x-[25%] lg:-translate-x-[120%]"
              }`}
              onClick={() => setSelected(index)}
              key={index}
            >
              <PaymentPlanCard
                title={item.title}
                subTitle={item.subtitle}
                selected={selected == index}
                features={item.feature}
              />
            </div>
          );
        })}
      </div>
      {/* <button
        onClick={() => {
          setSelected(selected > 0 ? selected - 1 : 2);
        }}
        className="px-12 mx-12 bg-secondary"
      >
        prev
      </button>
      <button
        onClick={() => {
          setSelected(selected < 2 ? selected + 1 : 0);
        }}
        className="px-12 mx-12 bg-secondary"
      >
        next
      </button> */}
    </>
  );
};

export default PaymentPlanT2;
