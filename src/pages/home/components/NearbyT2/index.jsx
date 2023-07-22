import React from "react";
import NearBycontainer from "./NearBycontainer";

const index = () => {
	return (
		<div className='w-full'>
			<div className='grid grid-cols-6 gap-4 items-center justify-center m-10 w-full'>
				<NearBycontainer />
				<NearBycontainer />
				<NearBycontainer />
				<NearBycontainer />
				<NearBycontainer />
				<NearBycontainer />
			</div>

			{/* <div className='grid grid-cols-6 -translate-y-11'>
				<div className='w-full flex justify-center items-center'>
					<div className='w-2 bg-primary border-2 h-10 border-primary' />
				</div>
				<div className='w-full flex justify-center items-center'>
					<div className='w-2 bg-primary border-2 h-10 border-primary' />
				</div>
				<div className='w-full flex justify-center items-center'>
					<div className='w-2 bg-primary border-2 h-10 border-primary' />
				</div>
				<div className='w-full flex justify-center items-center'>
					<div className='w-2 bg-primary border-2 h-10 border-primary' />
				</div>
				<div className='w-full flex justify-center items-center'>
					<div className='w-2 bg-primary border-2 h-10 border-primary' />
				</div>
				<div className='w-full flex justify-center items-center'>
					<div className='w-2 bg-primary border-2 h-10 border-primary' />
				</div>
			</div> */}
			<div className='w-full col-span-7 border-4 border-black -translate-y-11' />
		</div>
	);
};

export default index;
