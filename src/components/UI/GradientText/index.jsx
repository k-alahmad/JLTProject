import React from "react";
import "./3D1.css";
const GradientText = ({ text, className }) => {
  let splittedTitle = text.split(" ");
  return (
    <div
      style={{
        background: "linear-gradient(-60deg, #218DC2 40%, white 60%)",
      }}
      className="textContainer1 pb-2 px-4 md:px-4 max-sm:mx-2 rounded-[60px] rounded-tr-none"
    >
      <p
        // style={{
        //   background: "linear-gradient(-60deg, white 40%, #218DC2 50%)",
        //   backgroundClip: "text",
        //   WebkitBackgroundClip: "text",
        //   color: "transparent",
        //   WebkitTextFillColor: "transparent",
        // }}
        className={`${className} `}
      >
        <span className="text1"> {splittedTitle[0]} </span>
        <span className="text2"> {splittedTitle[1] ?? ""} </span>
      </p>
    </div>
  );
};

// #05AAE0
export default GradientText;
