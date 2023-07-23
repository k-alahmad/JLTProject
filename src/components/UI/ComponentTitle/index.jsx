import React from "react";
import GradiantText from "../GradientText";
const ComponentTitle = ({ title }) => {
  //   let splittedTitle = title.split(" ");

  return (
    <div className="text-[69px] flex justify-center items-center font-bold py-16">
      {/* <p>
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