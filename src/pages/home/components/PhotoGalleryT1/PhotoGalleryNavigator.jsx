import React, { useState } from "react";
import { data } from "../../../../data/photoGallery";
import { motion } from "framer-motion";
const PhotoGalleryNavigator = ({ selected, setSelected, insideSliderRef }) => {
  const [selectedImg, setSelectedImg] = useState();
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-x-12 text-small font-semibold">
        {data.navBtns.map((item, index) => {
          return (
            <button
              onClick={() => {
                setSelected(index);
              }}
              key={index}
              className={`uppercase h-20 w-32 border-b-2 origin-bottom rounded ${
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

      <motion.div
        className="grid grid-cols-2 gap-8 px-[2%] mt-6"
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
              className={`rounded-lg h-44 object-cover cursor-pointer border-4 transition-all duration-500 drop-shadow-2xl ${
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
