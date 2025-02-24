import CTAPrimary from "@/app/ui/Components/CTAPrimary";
import CTACall from "@/app/ui/Components/CTACall";
import React from "react";

export default function CTAGroup (
  {primaryButtonLink, primaryButtonStyle, secondaryButtonStyle, children=null}:
    {primaryButtonLink: string, primaryButtonStyle?: string, secondaryButtonStyle?: string, children?: React.ReactElement}
) {
  return (
    <div className="flex-col justify-center items-center gap-4 flex">
      <div className="self-stretch justify-center items-center gap-4 inline-flex">
        <CTAPrimary className={primaryButtonStyle} link={primaryButtonLink}/>
        <CTACall className={secondaryButtonStyle}/>
        {children}
      </div>
    </div>
  )
}