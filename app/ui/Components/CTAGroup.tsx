import CTAPrimary from "@/app/ui/Components/CTAPrimary";
import CTACall from "@/app/ui/Components/CTACall";
import React from "react";

export default function CTAGroup({
  primaryButtonLink,
  mode = "dark",
}: {
  primaryButtonLink: string;
  mode?: "dark" | "light";
}) {
  const buttonStyle =
    mode === "dark" ? "bg-white text-black" : "bg-bgPrimary text-white";
  const secondaryStyle =
    mode === "dark"
      ? "text-white border-white"
      : "text-black border-bgPrimary !border-[1.5px]";
  const availableTextColor =
    mode === "dark" ? "text-[#e4e4e4]" : "text-gray-600";

  return (
    <div className="flex-col justify-center items-center gap-4 flex">
      <div className="self-stretch justify-center items-center gap-4 inline-flex">
        <CTAPrimary className={buttonStyle} link={primaryButtonLink} />
        <CTACall className={secondaryStyle} />
        <div
          className={`text-center text-sm font-medium font-['Plus Jakarta Sans'] ${availableTextColor}`}
        >
          Available 24/7
        </div>
      </div>
    </div>
  );
}
