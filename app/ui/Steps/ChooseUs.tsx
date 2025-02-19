import React from "react";
import StepWrapper from "@/app/ui/Steps/StepWrapper";

export default function ChooseUs () {
  return (
    <div
      className="w-full h-fit p-8 py-16 bg-[#373940] flex-col justify-start items-start gap-10 inline-flex">
      <div className="w-1/2 self-stretch flex-col justify-center items-start flex gap-2">
        <div className="text-white text-lg font-medium font-['Plus Jakarta Sans']">Full-Why
          Choose Otter Water?
        </div>
        <div
          className="text-neutral-400 text-sm font-normal font-['Plus Jakarta Sans']">We
          provide you with a comprehensive assessment of water damages.
        </div>
      </div>
      <div className="self-stretch justify-between items-start inline-flex gap-12">
        <StepWrapper
          step={'1'}
          title={'Fast Response time'}
          description={'Water damage restoration following a flood is no small or easy task, which is why hiring a company with a good reputation and vast history of successful flood'}
        />
        <StepWrapper
          step={'2'}
          title={'Fast Response time'}
          description={'Water damage restoration following a flood is no small or easy task, which is why hiring a company with a good reputation and vast history of successful flood'}
        />
        <StepWrapper
          step={'3'}
          title={'Fast Response time'}
          description={'Water damage restoration following a flood is no small or easy task, which is why hiring a company with a good reputation and vast history of successful flood'}
        />
      </div>
    </div>
  )
}