import React from "react";
import StepIndicator from "@/app/ui/Steps/StepIndicator";

export default function StepWrapper({
  step,
  title,
  description,
  className,
}: {
  step: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={
        "w-full max-w-[350px] h-fit justify-center items-start gap-8 inline-flex text-white" +
        ` ${className}`
      }
    >
      <StepIndicator
        value={step}
        className={"text-sm rounded-full border border-white opacity-50"}
      />
      <div className="w-full h-fit justify-start items-start gap-3 flex flex-col">
        <div className="text-md font-bold font-['Plus Jakarta Sans']">
          {title}
        </div>
        <div className="text-sm font-['Plus Jakarta Sans']">{description}</div>
      </div>
    </div>
  );
}
