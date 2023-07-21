import React from "react";
import Slider from "react-slick";
import { data } from "../../../../data/headerData";
import GradientText from "../../../../components/UI/GradientText";
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
                className="h-40 w-40 mx-6 bg-white/50 rounded "
              />
              <div>
                <GradientText
                  className="text-[80px] font-bold drop-shadow-2xl"
                  text={item.title}
                />
                <GradientText
                  className="text-huge font-semibold drop-shadow-2xl"
                  text={item.subTitle}
                />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default HeaderTextSlider;
