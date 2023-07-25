import React, { useState } from "react";
import Slider from "react-slick";
import {
  // MdFiberManualRecord as FiberManualRecordIcon,
  // MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";
// import { data } from "../../../../data/paymentPlanData";

const ImagesSlider = ({ imgs, insideSliderRef }) => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  function SampleNextArrow({ onClick }) {
    return (
      <div
        className="absolute cursor-pointer z-30 right-[5%] top-[50%] rounded-full"
        onClick={onClick}
      >
        <MdArrowForwardIos className="text-primary drop-shadow-2xl text-[70px]" />
      </div>
    );
  }
  function SamplePrevArrow({ onClick }) {
    return (
      <div
        className="absolute cursor-pointer z-30 left-[5%] top-[50%] rounded-full"
        onClick={onClick}
      >
        <MdArrowBackIos className="text-primary drop-shadow-2xl text-[70px]" />
      </div>
    );
  }
  return (
    <Slider
      ref={insideSliderRef}
      arrows={true}
      // dots={true}
      infinite={true}
      speed={400}
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
      {imgs.map((item, i) => {
        return (
          <img
            key={i}
            src={item}
            className="h-[300px] sm:h-[400px] md:h-[750px] w-full object-contain lg:object-fill lg:rounded-[60px] lg:rounded-tr-none"
            alt={"Gallery " + i}
          />
        );
      })}
    </Slider>
  );
};

export default ImagesSlider;
