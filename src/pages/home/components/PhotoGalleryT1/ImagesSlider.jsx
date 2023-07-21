import React, { useState } from "react";
import Slider from "react-slick";
import {
  MdFiberManualRecord as FiberManualRecordIcon,
  MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
} from "react-icons/md";
const ImagesSlider = ({ imgs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Slider
      arrows={false}
      dots={true}
      infinite={true}
      speed={500}
      slidesToScroll={1}
      slidesToShow={1}
      touchMove
      autoplay
      autoplaySpeed={4000}
      className="w-full h-full overflow-hidden"
      beforeChange={(prev, next) => {
        setCurrentSlide(next);
      }}
      customPaging={(index) => {
        return index == currentSlide ? (
          <div
            key={index}
            className="text-big absolute -top-10 rounded-full text-secondary bg-white"
          >
            <FiberManualRecordIcon />
          </div>
        ) : (
          <div
            key={index}
            className="text-big absolute -top-10 rounded-full text-secondary bg-white"
          >
            <OutFiberManualRecordIcon />
          </div>
        );
      }}
      appendDots={(dots) => {
        return (
          <ul>
            {dots.map((item, index) => {
              return item;
            })}
          </ul>
        );
      }}
    >
      {imgs.map((item, index) => {
        return (
          <img
            key={index}
            src={item}
            className="h-[650px] w-full object-cover"
            alt=""
          />
        );
      })}
    </Slider>
  );
};

export default ImagesSlider;
