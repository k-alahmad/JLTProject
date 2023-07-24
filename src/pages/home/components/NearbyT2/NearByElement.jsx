import React from "react";
// import airplane from "../../../../assets/icons/airplane.svg";
const NearByElement = ({ icon, title, duration }) => {
  return (
    <div className="flex flex-col justify-center items-center group translate-y-3 relative">
      <div className="py-2 w-[150px] h-[150px] bg-primary rounded-lg flex flex-col items-center justify-evenly border-4 border-black group-hover:scale-110 transition-all duration-300">
        <img src={icon} className=" w-12 h-12 " />
        <p className="text-white font-semibold text-small">{title}</p>
        <p className="text-white font-light text-smaller">{duration}</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-2 bg-primary border-4 h-10 border-black" />
      </div>
      <div className="w-4 h-4 rounded-full border-4 border-black bg-primary" />
    </div>
  );
};

export default NearByElement;
