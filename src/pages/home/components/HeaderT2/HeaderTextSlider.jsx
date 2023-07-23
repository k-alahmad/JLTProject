import React from "react";
import Slider from "react-slick";
import { data } from "../../../../data/headerData";
const HeaderTextSlider = () => {
  return (
    <Slider
      vertical
      verticalSwiping
      arrows={false}
      dots={false}
      autoplay
      autoplaySpeed={2000}
      className="w-[90%] lg:w-[50%] absolute top-[30%] left-[10%] text-white h-full"
    >
      {data.textSlider.map((item, index) => {
        return (
          <div key={index} className="cursor-pointer h-full">
            <div className="flex items-end">
              <img
                src={item.icon}
                alt="icon"
                className="h-40 w-40 mx-6  rounded "
              />
              <div>
                <p className="text-[80px] font-bold text-white drop-shadow-2xl">
                  {item.title}
                </p>
                <p className="text-huge font-semibold uppercase drop-shadow-2xl">
                  {item.subTitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default HeaderTextSlider;
