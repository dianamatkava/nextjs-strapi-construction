import React from "react";

export default function StepIndicator ({value, className}: {value: string, className?: string}) {
  return (
    <div className={"w-8 h-8 p-3 inline-flex items-center justify-center" + ` ${className}`}>
      {value}
    </div>
  )
}