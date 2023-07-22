export const data = {
	template: 1,
	title: "PaymentPlan",
	type: "PaymentPlanType",
	plans: [
		{
			title: "Cash Plan",
			subtitle: "Cash Payment",
			feature: [{ text: "20% on Booking " }, { text: "80% on Completion " }],
		},
		{
			title: "Short Post-Handover",
			subtitle: "1 Year Payment Plan",
			feature: [
				{ text: "20% on Booking " },
				{ text: "20% on Completion " },
				{ text: "60% Divided into 4 installment (15% Every 3 Months) " },
			],
		},
		{
			title: "Long Post-Handover",
			subtitle: "2 Years Payment Plan",
			feature: [
				{ text: "20% on Booking " },
				{ text: "30% on Completion " },
				{ text: "50% Divided into 8 installment (6.25% Every 3 Months) " },
			],
		},
	],
};
