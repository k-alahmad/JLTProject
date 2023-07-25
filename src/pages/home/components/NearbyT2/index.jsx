import React from "react";
import NearByElement from "./NearByElement";
import ComponentTitle from "../../../../components/UI/ComponentTitle";
import { data } from "../../../../data/nearbyData";
const index = () => {
	return (
		<div className='w-full flex flex-col'>
			<ComponentTitle title={"Nearby Places"} />
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5 relative z-30'>
				{data.locations.map((item, index) => (
					<NearByElement
						key={index}
						icon={item.icon}
						title={item.name}
						duration={item.duration}
					/>
				))}
			</div>
			<div className='relative'>
				<div className='max-md:visible invisible border-4 border-shade -translate-y-[450px] mx-[2%]' />
				<div className='max-md:visible invisible w-2 h-[230px] bg-shade absolute left-[2%] -top-[450px]' />
				<div className='max-lg:visible invisible border-4 border-shade -translate-y-[233px] mx-[2%]' />
				<div className='max-lg:visible invisible w-2 h-[230px] bg-shade absolute right-[2%] -top-[220px]' />
				<div className='border-4 border-shade -translate-y-[14px] max-lg:mx-[2%]' />
			</div>
		</div>
	);
};

export default index;
