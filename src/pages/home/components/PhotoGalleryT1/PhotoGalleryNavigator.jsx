import React from "react";
import { data } from "../../../../data/paymentPlanData";

const PhotoGalleryNavigator = ({
  selected,
  setSelected,
  sliderRef,
  insideSliderRef,
}) => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-x-12 text-small font-semibold">
        {data.navBtns.map((item, index) => {
          return (
            <button
              onClick={() => {
                sliderRef.current.slickGoTo(index);
                setSelected(index);
              }}
              key={index}
              className={`uppercase h-20 w-40 border-b-2 origin-bottom rounded ${
                selected == index
                  ? "bg-primary text-white"
                  : "border-primary transition-all duration-500"
              } `}
            >
              {item.type}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-8 px-[2%] mt-6">
        {data.navBtns[selected].imgs.map((img, index) => {
          return (
            <img
              src={img}
              key={index}
              className={`rounded-lg h-44 object-cover cursor-pointer`}
              alt=""
              onClick={() => {
                insideSliderRef.current.slickGoTo(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGalleryNavigator;
