export const data = {
	template: 1,
	title: "PaymentPlan",
	type: "PaymentPlanType",
	plans: [
		{
			title: "Cash Plan",
			subtitle: "Cash Payment Plan",
			feature: [{ text: "20% On Booking " }, { text: "80% On Completion " }],
		},
		{
			title: "Short Plan",
			subtitle: "1 Year Post-handover Plan",
			feature: [
				{ text: "20% On Booking " },
				{ text: "20% On Completion" },
				{ text: "60% Installment for 1 Year Divided by 15% each 3 Months" },
			],
		},
		{
			title: "Long Plan",
			subtitle: "2 Years Post-handover Plan",
			feature: [
				{ text: "20% On Booking " },
				{ text: "30% On Completion" },
				{ text: "50% Installment for 2 Years Divided by 6.25% each 3 Months" },
			],
		},
	],
};
