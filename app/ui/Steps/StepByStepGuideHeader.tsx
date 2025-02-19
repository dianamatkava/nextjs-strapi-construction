import React from "react";
import StepWrapper from "@/app/ui/Steps/StepWrapper";
import CTAPrimary from "@/app/ui/Components/CTAPrimary";

export default function StepByStepGuideHeader () {
  return (
    <div className="w-full flex-col justify-center items-end gap-5 inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-5 flex">
        <div className="text-xxlg leading-10 self-stretch "><span
          className="text-black font-medium font-['Plus Jakarta Sans']">Set-by-Step Guide to Getting Your Task Done with </span><span
          className="text-black font-bold font-['Plus Jakarta Sans']">otterwater.io</span>
        </div>
        <div
          className="self-stretch text-[#595959] text-sm font-normal font-['Plus Jakarta Sans']">In
          Otter Water we priorising customer needs and supporting on each step of water damage restoration,
          construction, remodeling. Customer satisfaction is our main focus.
        </div>
      </div>
      <div
        className="w-full h-fit justify-end items-center inline-flex">
        <CTAPrimary className={'bg-bgPrimary text-white'}/>
      </div>
    </div>
  )
}