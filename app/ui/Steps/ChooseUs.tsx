import React from "react";
import StepWrapper from "@/app/ui/Steps/StepWrapper";

export default function ChooseUs() {
  return (
    <div className="w-full h-fit p-8 py-16 bg-[#373940] flex-col justify-start items-start gap-10 inline-flex">
      <div className="w-full sm:w-1/2 self-stretch flex-col justify-center items-start flex gap-2">
        <div className="text-white text-lg font-medium font-['Plus Jakarta Sans']">
          Full-Why Choose Otter Water?
        </div>
        <div className="text-neutral-400 text-sm font-normal font-['Plus Jakarta Sans']">
          We provide you with a comprehensive assessment of water damages and
          other repair services.
        </div>
      </div>
      <div className="w-full self-stretch justify-between items-start flex flex-wrap lg:flex-nowrap lg:inline-flex gap-12">
        <StepWrapper
          step={"1"}
          title={"Fast Response time"}
          description={
            "Water damage can escalate rapidly. Our dedicated team is on call 24/7 to tackle emergencies as soon as they arise, minimizing the impact on your home or business."
          }
        />
        <StepWrapper
          step={"2"}
          title={"Thorough Assessment"}
          description={
            "We go beyond surface-level fixes by conducting detailed inspections. Our specialists identify the source of the issue and develop a tailored plan to address it, preventing future problems."
          }
        />
        <StepWrapper
          step={"3"}
          title={"Skilled Restoration"}
          description={
            "With advanced equipment and experienced technicians, we handle everything from water extraction to structural repairs. Count on us to restore your property to its pre-damage condition—quickly and safely."
          }
        />
      </div>
    </div>
  );
}
