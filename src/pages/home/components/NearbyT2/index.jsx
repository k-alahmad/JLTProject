import React from "react";
import NearByElement from "./NearByElement";
import ComponentTitle from "../../../../components/UI/ComponentTitle";
import { data } from "../../../../data/nearbyData";
const index = () => {
  return (
    <div className="w-full">
      <ComponentTitle title={"Nearby Places"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5 relative z-30">
        {data.locations.map((item, index) => (
          <NearByElement icon={item.icon} title={item.name} />
        ))}
      </div>
      <div className="max-md:visible invisible w-full border-4 border-black -translate-y-[450px]" />
      <div className="max-lg:visible invisible w-full border-4 border-black -translate-y-[233px]" />

      <div className="w-full border-4 border-black -translate-y-[14px]" />
    </div>
  );
};

export default index;
