import React from "react";
import StepWrapper from "@/app/ui/Steps/StepWrapper";
import StepByStepGuideHeader from "@/app/ui/Steps/StepByStepGuideHeader";
import StepIndicator from "@/app/ui/Steps/StepIndicator";

export default function StepByStepGuideItem ({title, description, number, isActive=false}: {title: string, description: string, number, isActive?: boolean}) {
  return (
    <div
      className="w-full lg:max-w-[250px] lg:min-w-[450px] h-fit p-5 bg-white rounded-xl shadow-[2px_4px_8px_0px_rgba(0,0,0,0.05)] flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="flex-row sm:flex-col justify-center items-start gap-3 flex">
          <StepIndicator value={number}
                         className={`${isActive ? 'text-white bg-bgPrimary' : 'text-[#A5A5A5] border border-[#CFCFCF]'}`}/>
          <div className="pt-0.5 self-stretch text-black text-lg font-medium font-['Plus Jakarta Sans']">{title}</div>
        </div>
        <div
          className="text-[#595959] text-sm font-normal font-['Plus Jakarta Sans']">{description}
        </div>
      </div>
    </div>
  )
}