import React from "react";
import NearByElement from "./NearByElement";

const index = () => {
	return (
		<div className='w-full mt-20'>
			<div className='grid grid-cols-6'>
				<NearByElement />
				<NearByElement />
				<NearByElement />
				<NearByElement />
				<NearByElement />
				<NearByElement />
			</div>

			<div className='w-full col-span-7 border-4 -translate-y-5 border-black' />
		</div>
	);
};

export default index;
