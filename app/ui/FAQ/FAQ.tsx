import React from "react";
import FAQHeader from "@/app/ui/FAQ/FAQHeader";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import FAQQuestion from "@/app/ui/FAQ/FAQQuestion";

export default function FAQ() {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-5 py-8">
      <div className="w-full inline-flex justify-between items-start gap-24">
        <div className={'w-3/5 max-w-[500px] flex flex-col justify-start items-start text-start gap-4'}>
          <SectionHeader name={'FAQ'}/>
          <FAQHeader/>
        </div>
        <div className="w-3/5 h-fit max-w-[700px] flex-col justify-center items-end gap-2.5 inline-flex font-['Plus Jakarta Sans']">
          <FAQQuestion key={1}/>
          <FAQQuestion key={2}/>
          <FAQQuestion key={3}/>
          <FAQQuestion key={4}/>
        </div>
      </div>
   </div>
  )
}