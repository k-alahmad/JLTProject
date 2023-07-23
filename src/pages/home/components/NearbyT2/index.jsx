import React from "react";
import NearByElement from "./NearByElement";
import ComponentTitle from "../../../../components/UI/ComponentTitle";
import { data } from "../../../../data/nearbyData";
const index = () => {
  return (
    <div className="w-full ">
      <ComponentTitle title={"Nearby Places"} />
      <div className="grid grid-cols-6">
        {data.locations.map((item, index) => (
          <NearByElement icon={item.icon} title={item.name} />
        ))}
      </div>

      <div className="w-full col-span-7 border-4 -translate-y-5 border-black" />
    </div>
  );
};

export default index;
