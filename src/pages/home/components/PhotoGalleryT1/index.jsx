import React, { useRef, useState } from "react";
import Slider from "react-slick";
import useWindowDimensions from "../../../../hooks/screenDimentions";
import { data } from "../../../../data/headerData";
import ImagesSlider from "./ImagesSlider";
const PhotoGalleryT1 = () => {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();
  let navBtns = [
    {
      type: "interiors",
      imgs: [data.heroLeft, data.heroLeft, data.heroLeft],
    },
    {
      type: "exteriors",
      imgs: [data.heroRight, data.heroRight, data.heroRight],
    },
  ];
  return (
    <div className="overflow-x-hidden">
      <div
        style={{ width: width, maxWidth: "1920px" }}
        className="flex flex-col justify-center items-center mt-12"
      >
        <div className="flex flex-row justify-center items-center gap-x-12 text-small font-semibold">
          {navBtns.map((item, index) => {
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

        <Slider
          ref={sliderRef}
          className="w-full h-full mt-4"
          touchMove={false}
          infinite={false}
          arrows={false}
        >
          {navBtns.map((item, index) => {
            return <ImagesSlider key={index} imgs={item.imgs} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PhotoGalleryT1;
