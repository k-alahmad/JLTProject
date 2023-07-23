import React from "react";
import { data } from "../../../../data/floorData";
const FloorPlanNavigator = ({
  selected,
  setSelected,
  sliderRef,
  sliderRef2,
}) => {
  return (
    <div className="flex flex-col justify-center items-center font-semibold">
      <div className="grid grid-cols-2 gap-4">
        {data.floors.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                sliderRef.current.slickGoTo(index);
                sliderRef2.current.slickGoTo(index);
                setSelected(index);
              }}
              className={`transition-all duration-500 h-20 w-24 border-b-2 origin-bottom rounded flex flex-col justify-center items-center cursor-pointer ${
                selected == index ? "bg-primary text-white" : "border-primary"
              } `}
            >
              <p className="text-bigger"> {item.btnTitle} </p>
              <p className="text-smaller"> {item.btnSubTitle} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloorPlanNavigator;
