import React, { useRef, useState } from "react";
import FloorPlanImageSlider from "./FloorPlanImageSlider";
import FloorPlanNavigator from "./FloorPlanNavigator";
import FloorPlanInfoSlider from "./FloorPlanInfoSlider";

const FloorPlanT2 = () => {
  const [selected, setSelected] = useState();
  const sliderRef = useRef();
  const sliderRef2 = useRef();
  return (
    <div className="grid grid-cols-12 gap-1 mt-20">
      <div className="col-span-9">
        <FloorPlanImageSlider
          selected={selected}
          setSelected={setSelected}
          sliderRef={sliderRef2}
        />
      </div>
      <div className="col-span-3 space-y-12">
        <FloorPlanNavigator
          selected={selected}
          setSelected={setSelected}
          sliderRef={sliderRef}
          sliderRef2={sliderRef2}
        />
        <FloorPlanInfoSlider sliderRef={sliderRef} />
      </div>
    </div>
  );
};

export default FloorPlanT2;
