import React from "react";
import StepWrapper from "@/app/ui/Steps/StepWrapper";
import StepByStepGuideHeader from "@/app/ui/Steps/StepByStepGuideHeader";
import StepByStepGuideItem from "@/app/ui/Steps/StepByStepGuideItem";

const data = [
  {
    number: 1,
    title: "Select Service",
    description:
      "Explore solutions from water damage repair to full-scale construction. Unsure where to start? We’ll guide you to the best fit.",
  },
  {
    number: 2,
    title: "Schedule Free inspection",
    description:
      "Book a no-cost visit so we can assess your property, discuss goals, and recommend an effective plan. Clear communication is our priority.",
  },
  {
    number: 3,
    title: "Meet our Team in your desirable time",
    description:
      "We’ll coordinate a time that suits you. Our dedicated pros handle every detail with minimal disruption, ensuring results you can trust.",
  },
];

export default function StepByStepGuide() {
  return (
    <div className="w-full h-fit p-2 sm:px-16 sm:py-12 bg-[#f6f8fc] flex-col justify-center items-center inline-flex">
      <div className="justify-between items-center lg:inline-flex gap-12">
        <div className="w-full flex-col justify-between items-start inline-flex">
          <StepByStepGuideHeader />
        </div>
        <div className="w-full flex flex-col sm:flex-row lg:flex-col justify-between items-start gap-3">
          {data.map((item) => (
            <StepByStepGuideItem
              number={item.number}
              key={item.number}
              isActive={item.number === 1}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
