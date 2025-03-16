import React from "react";
import StepWrapper from "@/app/ui/Steps/StepWrapper";
import StepByStepGuideHeader from "@/app/ui/Steps/StepByStepGuideHeader";
import StepByStepGuideItem from "@/app/ui/Steps/StepByStepGuideItem";

export default function StepByStepGuide() {
  return (
    <div className="w-full h-fit p-2 sm:px-16 sm:py-12 bg-[#f6f8fc] flex-col justify-center items-center inline-flex">
      <div className="justify-between items-center lg:inline-flex gap-12">
        <div className="w-full flex-col justify-between items-start inline-flex">
          <StepByStepGuideHeader />
        </div>
        <div className="w-full flex flex-col sm:flex-row lg:flex-col justify-between items-start gap-3">
          <StepByStepGuideItem
            number={1}
            key={1}
            isActive={true}
            title={"Select Service"}
            description={
              "Explore our range of solutions—from water damage repair to full-scale construction—and choose what fits your project best. Not sure where to start? We’re here to help you pick the right option."
            }
          />
          <StepByStepGuideItem
            number={2}
            key={2}
            title={"Schedule Free inspection"}
            description={
              "Book a no-cost visit so our experts can evaluate your property, discuss your goals, and recommend the most effective plan. We believe in transparent communication to set clear expectations from the start."
            }
          />
          <StepByStepGuideItem
            number={3}
            key={3}
            title={"Meet our Team in your desirable time"}
            description={
              "We’ll coordinate a time that works for you to begin the project. Our dedicated professionals handle every detail, ensuring minimal disruption to your daily life and delivering results you can trust."
            }
          />
        </div>
      </div>
    </div>
  );
}
