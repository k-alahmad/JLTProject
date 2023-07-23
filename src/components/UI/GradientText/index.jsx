import React from "react";

const GradientText = ({ text, className }) => {
  return (
    <div
      style={{
        background: "linear-gradient(-25deg, #05AAE0 50%, white 50%)",
      }}
      className="rounded px-2"
    >
      <p
        style={{
          background: "linear-gradient(-25deg, white 50%, black 50%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
        }}
        className={`${className} drop-shadow-2xl`}
      >
        {text}
      </p>
    </div>
  );
};

// #05AAE0
export default GradientText;
