import React from "react";
import Slider from "react-slick";
import { data } from "../../../../data/floorData";
import { useTranslation } from "react-i18next";
import { FaCheck, FaDownload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  downloadBrochure,
  selectRegisterState,
  showModal,
} from "../../../../redux/modal.slice";
import RegisterT1 from "../../../../components/UI/RegisterT1";
import Brochure from "../../../../assets/pdf/brochure.pdf";
const FloorPlanInfoSlider = ({ sliderRef, selected }) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const registerState = useSelector(selectRegisterState);
  return (
    <div className="flex flex-col justify-center items-center">
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={false}
        speed={300}
        centerMode
        slidesToScroll={1}
        slidesToShow={1}
        vertical={true}
        touchMove={false}
        arrows={false}
        className="w-[270px]"
      >
        {data.floors.map((item, index) => {
          return (
            <div
              key={index}
              dir={i18n.language == "en" ? "" : "rtl"}
              className={`${
                selected == index ? "scale-100" : "scale-0"
              } h-[250px] xl:h-[450px] flex flex-col justify-center items-center space-y-8`}
            >
              <p className="font-semibold text-big">{item.title}</p>
              <p className="font-semibold text-small">
                Total: <span className="font-extralight">{item.total}</span>
              </p>
              <div className="flex flex-col space-y-8">
                <button
                  className="bg-primary rounded  text-white shadow-lg drop-shadow-lg flex items-center justify-center py-2 font-semibold"
                  onClick={() => {
                    if (registerState) {
                      let alink = document.createElement("a");
                      alink.href = Brochure;
                      alink.download = "BrochurePdf.pdf";
                      alink.click();
                    } else {
                      dispatch(downloadBrochure());
                      dispatch(
                        showModal({ data: <RegisterT1 modal={true} /> })
                      );
                    }
                  }}
                >
                  <FaCheck className="text-med" />
                  <p className="text-small px-2">Download Brochure</p>
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FloorPlanInfoSlider;
