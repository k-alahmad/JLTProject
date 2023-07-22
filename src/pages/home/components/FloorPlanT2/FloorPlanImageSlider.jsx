import React from "react";
import LazyImage from "../../../../components/UI/LazyImage";
import { data } from "../../../../data/floorData";
import Slider from "react-slick";
const FloorPlanImageSlider = ({ sliderRef }) => {
  return (
    <Slider
      ref={sliderRef}
      dots={false}
      infinite={false}
      speed={300}
      centerMode
      slidesToScroll={1}
      slidesToShow={1}
      touchMove={false}
      className="h-[500px]"
      arrows={false}
    >
      {data.floors.map((item, index) => {
        return (
          <LazyImage
            key={index}
            src={item.img}
            divStyle={"h-[500px] xl:h-[650px] w-full"}
            skelatonStyle={"h-[500px] xl:h-[650px] w-full"}
            alt={item.title}
            imgStyle={"h-[500px] xl:h-[650px] w-full object-contain"}
          />
        );
      })}
    </Slider>
  );
};

export default FloorPlanImageSlider;
