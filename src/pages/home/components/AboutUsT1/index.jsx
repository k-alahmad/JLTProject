import React from "react";
import ComponentTitle from "../../../../components/UI/ComponentTitle";
import LazyImage from "../../../../components/UI/LazyImage";
import image from "../../../../assets/images/External/1.webp";

const AboutUsT1 = () => {
  return (
    <div>
      <ComponentTitle title={"Why JLT"} />
      <div className="lg:grid lg:grid-cols-12 gap-24 px-[5%]">
        <div className="col-span-6 flex justify-center items-center">
          <img
            src={image}
            alt=""
            className="rounded-[60px] rounded-tr-none shadow-2xl drop-shadow-2xl h-[500px]"
          />
        </div>
        <div className="col-span-6 flex flex-col justify-start items-start text-med font-semibold">
          <p className="font-bold text-huge text-secondary drop-shadow-2xl">
            Ready to Move Luxury Apartment
          </p>
          <br />
          <p>
            Studios, 1,2, and 3-bedroom apartments with PANORAMIC views of the
            famous Dubai skyline and surrounding areas.it is located in Jumeirah
            Lakes Towers.
          </p>
          <br />
          <p>
            Modern Smart Living Redefined.Equipped with pandemic-ready
            touch-less automated doors, touchless elevators Touchless access to
            amenities, and use of common area toilets.Hassle-free secure entry
            through 3D face recognition technology, or via a mobile phone.
          </p>
          <br />
          <p>
            Entertain yourself with the ultimate golfing experience with our
            world-class golf simulator.
          </p>
          <br />
          <p>
            Residents can wake up to the serene views of the water every
            morning. With a flexible post-handover payment plan option
            available, owning your dream.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsT1;
