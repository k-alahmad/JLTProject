import React, { useState } from "react";
import { data } from "../../../../data/photoGallery";
import { motion } from "framer-motion";
const PhotoGalleryNavigator = ({ selected, setSelected, insideSliderRef }) => {
  const [selectedImg, setSelectedImg] = useState();
  return (
    <div className="px-[2%]">
      <div className="flex flex-row justify-center items-center text-small font-semibold">
        <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-x-5 2xl:gap-x-8 w-full">
          {data.navBtns.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setSelected(index);
                }}
                key={index}
                className={`uppercase h-20  border-b-2 origin-bottom rounded ${
                  selected == index
                    ? "bg-primary text-white"
                    : "border-primary transition-all duration-500"
                } `}
              >
                {item.type}
              </button>
            );
          })}
        </div>
      </div>
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-3 gap-1 mt-6 w-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        key={selected}
      >
        {data.navBtns[selected].imgs.map((img, index) => {
          return (
            <img
              src={img}
              key={index}
              className={`rounded-lg h-44 2xl:h-52 object-cover cursor-pointer border-4 transition-all duration-500 drop-shadow-2xl ${
                selectedImg == index ? "border-primary" : "border-transparent"
              }`}
              alt=""
              onClick={() => {
                insideSliderRef.current.slickGoTo(index);
                setSelectedImg(index);
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default PhotoGalleryNavigator;
