import React from "react";
import ComponentTitle from "../../../../components/UI/ComponentTitle";
import LazyImage from "../../../../components/UI/LazyImage";
import image from "../../../../assets/images/External/1.webp";

const AboutUsT1 = () => {
  return (
    <div>
      <ComponentTitle title={"Why JLT"} />
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16 2xl:gap-24 px-[5%] max-lg:space-y-12">
        <div className="col-span-5 flex justify-center items-center">
          <img
            src={image}
            alt="About us"
            className="object-cover rounded-[60px] rounded-tr-none shadow-2xl drop-shadow-2xl w-full lg:h-full  h-[400px] md:h-[500px]"
          />
        </div>
        <div className="col-span-7 flex flex-col lg:justify-start lg:items-start text-smaller md:text-small font-semibold text-center lg:text-start ">
          <p className="font-bold text-big md:text-huge text-secondary drop-shadow-2xl">
            Ready to Move Luxury Apartment
          </p>
          <br />
          <br className="hidden lg:block" />
          <p>
            Introducing Studios, 1,2, and 3-bedroom apartments with panoramic
            views of the famous Dubai skyline and surrounding areas.it is
            located in Jumeirah Lakes Towers.
          </p>
          <br />
          <p>
            Modern Smart Living is Redefined. This project is Equipped with
            pandemic-ready touch-less automated doors, touchless elevators
            Touchless access to amenities, and use of common area toilets.
            Hassle-free secure entry through 3D face recognition technology, or
            via a mobile phone.
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
            available, owning your dream home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsT1;
