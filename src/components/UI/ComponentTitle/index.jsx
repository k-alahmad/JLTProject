import React from "react";
import GradiantText from "../GradientText";
import Text3D1 from "./Text3D1";

const ComponentTitle = ({ title }) => {
  let splittedTitle = title.split(" ");

  return (
    <div className="relative text-bigger sm:text-[69px] flex justify-center items-center font-bold py-20 text-center md:text-start uppercase">
      {/* <GradiantText text={title} /> */}
      {/* <Text3D1 title={title} /> */}
      <div
        style={{
          background: "linear-gradient(-60deg, #218DC2 40%, white 60%)",
        }}
        className=" pb-2 px-4 md:px-4 max-sm:mx-2 rounded-[60px] rounded-tr-none"
      >
        <p
          style={{
            textShadow:
              "-0px -0px 0px rgba(255, 255, 255, 0.3), 2px 2px 0px rgba(0, 0, 0, 0.8)",
          }}
        >
          <span className="text-[#218DC2]"> {splittedTitle[0]} </span>
          <span className="text-[white]"> {splittedTitle[1] ?? ""} </span>
        </p>
      </div>
    </div>
  );
};

export default ComponentTitle;
