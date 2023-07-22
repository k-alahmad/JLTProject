import heroRight from "../assets/images/heroRight.webp";
import heroLeft from "../assets/images/heroLeft.webp";

export const data = {
  template: 1,
  title: "PaymentPlan",
  type: "PaymentPlanType",
  plans: [
    {
      title: 20,
      subtitle: "BookingAmount",
      feature: [
        { text: "feature 1 " },
        { text: "feature 2 " },
        { text: "feature 3 " },
      ],
    },
    {
      number: 60,
      text: "installments",
      customStyle: "left-[40%] capitalize",
    },
    {
      number: 20,
      text: "finalInsallment",
      customStyle: "left-[75%] capitalize",
    },
  ],
};
