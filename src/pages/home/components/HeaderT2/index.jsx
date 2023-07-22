import React from "react";
import { data } from "../../../../data/headerData";
import { useTranslation } from "react-i18next";
import HeaderTextSlider from "./HeaderTextSlider";
const HeaderT2 = () => {
	const { t, i18n } = useTranslation();
	return (
		<div
			className=' bg-cover bg-center bg-no-repeat h-[700px] lg:h-[850px] 2xl:h-[1000px] '
			style={{
				backgroundImage: `url(${data.HeroBottom})`,
			}}
			dir={i18n.language == "en" ? "ltr" : "rtl"}
		>
			<div
				className='h-full w-full bg-cover'
				style={{
					background:
						"radial-gradient(105.51% 436.49% at 97.61% 8.38%, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.25) 100%)",
				}}
			>
				<div
					className='h-full w-full relative'
					style={{
						background:
							"radial-gradient(102.11% 427.34% at 102.11% 200.81%, rgba(0, 0, 0, 0.9) 0%, rgba(76, 169, 223, 0) 0.11%, rgba(76, 169, 223, 0.33) 100%)",
					}}
				>
					<HeaderTextSlider />
					<button className='absolute top-[55%] left-[40%] bg-primary text-white font-bold w-[150px] h-12 rounded-xl items-center justify-center hover:bg-secondary '>
						Register Now
					</button>
					<img
						src={data.headerWave}
						className='w-full absolute bottom-0'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default HeaderT2;
