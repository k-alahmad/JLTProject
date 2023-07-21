import React from "react";
import HeaderT1 from "./components/HeaderT1";
import PaymentPlanT1 from "./components/PaymentPlanT1";
import FloorPlanT1 from "./components/FloorPlanT1";
import NearbyT1 from "./components/NearbyT1";
import LocationT1 from "./components/LocationT1";
import RegisterT1 from "../../components/UI/RegisterT1";
import HeaderT2 from "./components/HeaderT2";
const Home = () => {
  return (
    <>
      <div id="home" />
      {/* <HeaderT1 /> */}
      <HeaderT2 />
      <div id="payment" />
      <PaymentPlanT1 />
      <div id="floorPlan" />
      <FloorPlanT1 />
      <div id="nearby" />
      <NearbyT1 />
      <div id="location" />
      <LocationT1 />
      <div id="contactus" />
      <RegisterT1 />
    </>
  );
};
export default Home;
