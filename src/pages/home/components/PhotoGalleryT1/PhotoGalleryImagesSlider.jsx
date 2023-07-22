import React, { useState } from "react";
import Slider from "react-slick";
import {
  // MdFiberManualRecord as FiberManualRecordIcon,
  // MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";
import { data } from "../../../../data/paymentPlanData";

const ImagesSlider = ({ selected, insideSliderRef }) => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  function SampleNextArrow({ onClick }) {
    return (
      <div
        className="absolute cursor-pointer z-30 right-[5%] top-[50%] rounded-full"
        onClick={onClick}
      >
        <MdArrowForwardIos className="text-secondary text-[55px]" />
      </div>
    );
  }
  function SamplePrevArrow({ onClick }) {
    return (
      <div
        className="absolute cursor-pointer z-30 left-[5%] top-[50%] rounded-full"
        onClick={onClick}
      >
        <MdArrowBackIos className="text-secondary text-[55px]" />
      </div>
    );
  }
  return (
    <Slider
      ref={insideSliderRef}
      arrows={true}
      // dots={true}
      infinite={true}
      speed={500}
      slidesToScroll={1}
      slidesToShow={1}
      touchMove
      // autoplay
      // autoplaySpeed={4000}
      className="w-full h-full overflow-hidden"
      nextArrow={<SampleNextArrow />}
      prevArrow={<SamplePrevArrow />}
      // beforeChange={(prev, next) => {
      //   setCurrentSlide(next);
      // }}
      // customPaging={(index) => {
      //   return index == currentSlide ? (
      //     <div
      //       key={index}
      //       className="text-big absolute -top-10 rounded-full text-secondary bg-white"
      //     >
      //       <FiberManualRecordIcon />
      //     </div>
      //   ) : (
      //     <div
      //       key={index}
      //       className="text-big absolute -top-10 rounded-full text-secondary bg-white"
      //     >
      //       <OutFiberManualRecordIcon />
      //     </div>
      //   );
      // }}
      // appendDots={(dots) => {
      //   return (
      //     <ul>
      //       {dots.map((item, index) => {
      //         return item;
      //       })}
      //     </ul>
      //   );
      // }}
    >
      {data.navBtns[selected].imgs.map((item, i) => {
        return (
          <img
            key={i}
            src={item}
            className="h-[750px] w-full object-cover"
            alt=""
          />
        );
      })}
    </Slider>
  );
};

export default ImagesSlider;