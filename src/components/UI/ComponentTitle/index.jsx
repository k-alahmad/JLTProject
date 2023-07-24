import React from "react";
import GradiantText from "../GradientText";
const ComponentTitle = ({ title }) => {
  // let splittedTitle = title.split(" ");

  return (
    <div className="relative text-bigger sm:text-[69px] flex justify-center items-center font-bold py-20 text-center md:text-start uppercase h-[200px]">
      {/* <p className="grid grid-cols-2">
        {splittedTitle.map((item, index) => {
          return index % 2 == 0 ? (
            <span className="px-2 ">{item}</span>
          ) : (
            <span className="px-2 text-primary">{item}</span>
          );
        })}
      </p> */}
      <GradiantText text={title} />
    </div>
  );
};

export default ComponentTitle;
