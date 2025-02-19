import React from "react";
import StepIndicator from "@/app/ui/ChooseUs/StepIndicator";

export default function StepWrapper ({step, title, description}: {step: string, title: string, description: string}) {
  return (
    <div className="w-full h-fit justify-start items-start gap-12 inline-flex">
      <StepIndicator value={step} className={'text-white text-sm font-bold rounded-full border border-white opacity-50'}/>
      <div className="w-full h-fit justify-start items-start gap-3 flex flex-col">
        <div className="text-white text-md font-bold font-['Plus Jakarta Sans']">{title}</div>
        <div
          className="text-white text-sm font-['Plus Jakarta Sans']">{description}</div>
      </div>

    </div>
  )
}