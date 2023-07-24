import React from "react";
// import GradiantText from "../GradientText";
import Text3D from "./Text3D";

const ComponentTitle = ({ title }) => {
  return (
    <div className="relative text-bigger sm:text-[69px] flex justify-center items-center font-bold py-20 text-center md:text-start uppercase">
      {/* <GradiantText text={title} /> */}
      <Text3D title={title} />
    </div>
  );
};

export default ComponentTitle;
