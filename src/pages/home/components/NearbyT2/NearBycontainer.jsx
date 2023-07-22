import React from "react";
import airplane from "../../../../assets/icons/airplane.svg";
const NearBycontainer = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			{/* <div className='w-2 bg-primary border-2 h-[200px] border-primary' /> */}
			<div className='flex w-[150px] h-[150px] bg-primary rounded-lg items-center justify-center'>
				<img src={airplane} className='flex w-12 h-12' />
				<p className='text-white text-lg'>Title</p>
			</div>
			<div className='w-full flex justify-center items-center'>
				<div className='w-2 bg-primary border-2 h-10 border-primary' />
			</div>
		</div>
	);
};

export default NearBycontainer;
