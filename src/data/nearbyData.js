import airportIcon from "../assets/icons/airplane.svg";
import PalmJumeirahIcon from "../assets/icons/palm.svg";
import beach from "../assets/icons/beach.svg";
import metro from "../assets/icons/metro.svg";
import global from "../assets/icons/global.svg";
import BurjKhalifa from "../assets/images/map/BurjKhalifa.webp";
import BusinessBay from "../assets/images/map/BusinessBay.webp";
import DubaiFrame from "../assets/images/map/DubaiFrame.webp";

import DubaiOpera from "../assets/images/map/DubaiOpera.webp";
import DXBAIRPORT from "../assets/images/map/DXBAIRPORT.webp";

import PalmJumeirah from "../assets/images/map/PalmJumeirah.webp";

import kalifaIcon from "../assets/icons/kalifa.svg";

export const data = {
	template: 1,
	title: "nearbyTitle",
	subTitle: "nearbySubTitle",
	locations: [
		{
			icon: PalmJumeirahIcon,
			name: "palm",
			duration: "11 ",
			img: PalmJumeirah,
		},
		{
			icon: airportIcon,
			name: "DXB Airport",
			duration: "25 ",
			img: DXBAIRPORT,
		},
		{
			icon: kalifaIcon,
			name: "Downtown",
			duration: "20 ",
			img: BurjKhalifa,
		},
		{
			icon: beach,
			name: "JBR",
			duration: "10 ",
			img: DubaiFrame,
		},
		{
			icon: global,
			name: "Global Village",
			duration: "25 ",
			img: BusinessBay,
		},
		{
			icon: metro,
			name: "Metro",
			duration: "3 ",
			img: DubaiOpera,
		},
		// {
		//   icon: MedydanIcon,
		//   name: "meydan",
		//   duration: "10 ",
		//   img: Meydan,
		// },
		// {
		//   icon: dubaiMallIcon,
		//   name: "dubaiMall",
		//   duration: "15 ",
		//   img: DubaiMall,
		// },
		// {
		//   icon: SOBHAHARTLANDIcon,
		//   name: "heartland",
		//   duration: "10 ",
		//   img: SobhaHartland,
		// },
	],
};
