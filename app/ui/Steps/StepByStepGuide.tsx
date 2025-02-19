import React from "react";
import StepWrapper from "@/app/ui/Steps/StepWrapper";
import StepByStepGuideHeader from "@/app/ui/Steps/StepByStepGuideHeader";
import StepByStepGuideItem from "@/app/ui/Steps/StepByStepGuideItem";

export default function StepByStepGuide () {
  return (
    <div
      className="w-full h-fit px-16 py-12 bg-[#f6f8fc] flex-col justify-center items-center inline-flex">
      <div className="justify-between items-center inline-flex gap-12">
        <div className="w-1/2 flex-col justify-between items-start inline-flex">
          <StepByStepGuideHeader/>
        </div>
        <div className="w-1/2 flex-col justify-between items-start inline-flex gap-3">
          <StepByStepGuideItem
            number={1}
            isActive={true}
            title={'Select Service'}
            description={'Lorem Ipsum is a dummy or placeholder text commonly used in graphic design text commonly used in graphic design'}
          />
          <StepByStepGuideItem
            number={2}
            title={'Schedule Free inspection'}
            description={'Lorem Ipsum is a dummy or placeholder text commonly used in graphic design text commonly used in graphic design'}
          />
          <StepByStepGuideItem
            number={3}
            title={'Meet our Team in your desirable time'}
            description={'Lorem Ipsum is a dummy or placeholder text commonly used in graphic design text commonly used in graphic design'}
          />
        </div>
      </div>
    </div>
  )
}