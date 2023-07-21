import React, { useState } from "react";
import PaymentPlanCard from "./PaymentPlanCard";
// improt {}
const PaymentPlanT2 = () => {
  let elmnts = ["1", "2", "3"];
  const [selected, setSelected] = useState(1);
  return (
    <>
      <div className="flex flex-row justify-center items-center px-[5%] lg:px-[10%] p-20 relative h-[700px]">
        {elmnts.map((item, index) => {
          return (
            <div
              className={`transition-all duration-500 border-none outline-none absolute ${
                selected == index
                  ? "scale-125 z-20"
                  : selected > index && index + 1 == selected
                  ? "scale-100  -translate-x-full"
                  : selected > index && index + 1 !== selected
                  ? "scale-100  translate-x-full"
                  : selected < index && index - 1 == selected
                  ? "scale-100  translate-x-full"
                  : selected < index &&
                    index - 1 !== selected &&
                    "scale-100  -translate-x-full"
              }`}
              onClick={() => setSelected(index)}
              key={index}
            >
              <PaymentPlanCard
                title={"Title " + (index + 1)}
                subTitle={"Subtitle " + (index + 1)}
                selected={selected == index}
                features={[
                  { text: "feature1" },
                  { text: "feature2" },
                  { text: "feature3" },
                ]}
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
