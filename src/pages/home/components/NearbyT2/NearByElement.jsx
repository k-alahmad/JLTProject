import React from "react";
import airplane from "../../../../assets/icons/airplane.svg";
const NearByElement = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='px-12 py-3 w-[150px] h-[150px] bg-primary rounded-lg items-center justify-center border-4 border-black'>
				<img src={airplane} className=' w-12 h-12' />
				<p className='text-white text-lg'>Title</p>
			</div>
			<div className='w-full flex justify-center items-center'>
				<div className='w-2 bg-primary border-4 h-10 border-black' />
			</div>
			<div className='w-4 h-4 -translate-y-2 rounded-full border-4 border-black bg-primary z-10' />
		</div>
	);
};

export default NearByElement;
