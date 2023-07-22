import React from "react";

const GradientText = ({ text, className }) => {
	return (
		<p
			style={{
				background: "white",
				// linear-gradient(266.27deg, #05AAE0 -50.84%, white 106.31%)
				backgroundClip: "text",
				WebkitBackgroundClip: "text",
				color: "transparent",
				WebkitTextFillColor: "transparent",
			}}
			className={`${className}`}
		>
			{text}
		</p>
	);
};

export default GradientText;
