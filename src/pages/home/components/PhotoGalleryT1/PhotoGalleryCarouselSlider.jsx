import React from "react";
import Slider from "react-slick";
import ImagesSlider from "./PhotoGalleryImagesSlider";
import { data } from "../../../../data/paymentPlanData";

const CarouselSlider = ({ sliderRef, insideSliderRef, selected }) => {
  return (
    <Slider
      ref={sliderRef}
      className="w-full h-full mt-4"
      touchMove={false}
      infinite={false}
      arrows={false}
      vertical
      verticalSwiping={false}
      dots={false}
    >
      {data.navBtns.map((item, index) => {
        return (
          <ImagesSlider
            key={index}
            imgs={item.imgs}
            selected={selected}
            insideSliderRef={insideSliderRef}
          />
        );
      })}
    </Slider>
  );
};

export default CarouselSlider;
