import React, { useRef, useState } from "react";
import FloorPlanImageSlider from "./FloorPlanImageSlider";
import FloorPlanNavigator from "./FloorPlanNavigator";
import FloorPlanInfoSlider from "./FloorPlanInfoSlider";
import ComponentTitle from "../../../../components/UI/ComponentTitle";
import useWindowDimensions from "../../../../hooks/screenDimentions";
const FloorPlanT2 = () => {
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();
  const sliderRef2 = useRef();
  const { width } = useWindowDimensions();
  return (
    <>
      <ComponentTitle title={"Floor Plans"} />
      <div className="lg:grid lg:grid-cols-12 gap-1">
        <div className="col-span-8 hidden lg:block">
          <div>
            <FloorPlanImageSlider
              selected={selected}
              setSelected={setSelected}
              sliderRef={sliderRef2}
            />
          </div>
        </div>
        <div className="col-span-4 space-y-3 lg:space-y-12">
          <FloorPlanNavigator
            selected={selected}
            setSelected={setSelected}
            sliderRef={sliderRef}
            sliderRef2={sliderRef2}
          />
          <div className="lg:hidden">
            <FloorPlanImageSlider
              selected={selected}
              setSelected={setSelected}
              sliderRef={sliderRef2}
            />
          </div>
          <FloorPlanInfoSlider sliderRef={sliderRef} />
        </div>
      </div>
    </>
  );
};

export default FloorPlanT2;
