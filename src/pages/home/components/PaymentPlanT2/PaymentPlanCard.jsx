import React from "react";

const PaymentPlanCard = ({ title, subTitle, price, features, selected }) => {
	return (
		<div className='flex justify-center items-center w-full cursor-pointer'>
			<div
				className={`${
					selected
						? "bg-gradient-to-b from-secondary to-primary shadow-2xl"
						: "bg-gradient-to-t from-secondary to-primary shadow-xl"
				} transition-all duration-500 h-[450px] xl:h-[500px] w-[300px] rounded-tl-[60px] rounded-bl-[60px] rounded-br-[60px] flex flex-col justify-evenly items-center font-semibold text-center`}
			>
				<div className='space-y-1'>
					<p className='font-bold text-med'>{title} </p>
					<p className='font-semibold text-small'>{subTitle} </p>
				</div>
				<div
					className={`${
						selected ? "bg-white/60 shadow-lg" : "bg-white/30 text-white/90"
					}  h-[100px] w-[100px] rounded-tl-full rounded-bl-full rounded-br-full flex flex-col justify-center items-center transition-all duration-500`}
				>
					<p className='font-bold text-small'> 34$ {price} </p>
					<p className='font-semibold text-tiny'> /Month</p>
				</div>
				<div className='space-y-3'>
					{features?.map((item, index) => {
						return (
							<p className='font-semibold text-smaller' key={index}>
								{item?.text}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default PaymentPlanCard;
