import React from "react";
import HeaderT1 from "./components/HeaderT1";
import PaymentPlanT1 from "./components/PaymentPlanT1";
import FloorPlanT1 from "./components/FloorPlanT1";
import NearbyT2 from "./components/NearbyT2";
import LocationT1 from "./components/LocationT1";
import RegisterT1 from "../../components/UI/RegisterT1";
import HeaderT2 from "./components/HeaderT2";
import PaymentPlanT2 from "./components/PaymentPlanT2";
import PhotoGalleryT1 from "./components/PhotoGalleryT1";
const Home = () => {
	return (
		<>
			<div id='home' />
			{/* <HeaderT1 /> */}
			<HeaderT2 />
			<div id='payment' />
			{/* <PaymentPlanT1 /> */}
			<PaymentPlanT2 />
			<div id='gallery' />
			<PhotoGalleryT1 />
			<div id='floorPlan' />
			{/* <FloorPlanT1 /> */}
			<div id='nearby' />
			{/* <NearbyT1 /> */}
			<NearbyT2 />
			<div id='location' />
			{/* <LocationT1 /> */}
			<div id='contactus' />
			<RegisterT1 />
		</>
	);
};
export default Home;
