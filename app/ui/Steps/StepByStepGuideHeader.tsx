import React from "react";

export default function StepByStepGuideHeader() {
  return (
    <div className="w-full flex-col justify-center items-end gap-5 inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-5 flex">
        <div className="text-xxlg leading-10 self-stretch ">
          <span className="text-black font-medium font-['Plus Jakarta Sans']">
            Set-by-Step Guide to Getting Your Task Done with{" "}
          </span>
          <span className="text-black font-bold font-['Plus Jakarta Sans']">
            otterwaterrestoration.com
          </span>
        </div>
        <div className="self-stretch text-[#595959] text-sm font-normal font-['Plus Jakarta Sans']">
          At OtterWater, we prioritize your needs at every stage of water damage
          restoration, construction, and remodeling. Here’s how we work to
          ensure your satisfaction:
        </div>
      </div>
      <div className="w-full h-fit justify-end items-center inline-flex"></div>
    </div>
  );
}
