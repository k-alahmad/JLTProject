import React, { useRef, useState } from "react";
import useWindowDimensions from "../../../../hooks/screenDimentions";
import CarouselSlider from "./PhotoGalleryCarouselSlider";
import PhotoGalleryNavigator from "./PhotoGalleryNavigator";
const PhotoGalleryT1 = () => {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();
  const insideSliderRef = useRef();

  return (
    <div className="overflow-hidden">
      <div
        style={{ width: width, maxWidth: "1920px" }}
        className="grid  grid-cols-12 mt-12"
      >
        <div className="col-span-3">
          <PhotoGalleryNavigator
            selected={selected}
            setSelected={setSelected}
            sliderRef={sliderRef}
            insideSliderRef={insideSliderRef}
          />
        </div>
        <div className="col-span-9">
          <CarouselSlider
            sliderRef={sliderRef}
            insideSliderRef={insideSliderRef}
            selected={selected}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryT1;
