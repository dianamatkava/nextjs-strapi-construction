"use client"
import React, {useState} from "react";
import FAQHeader from "@/app/ui/FAQ/FAQHeader";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import FAQQuestion from "@/app/ui/FAQ/FAQQuestion";


const data = [
  {
    'id': 1,
    'question': 'If there are question we will answer all you question?',
    'answer': 'If there are question you want to ask. We will answer all you question. want to ask. We will answer all you question.',
  },{
    'id': 2,
    'question': 'If there are question we will answer all you question?',
    'answer': 'If there are question you want to ask. We will answer all you question. want to ask. We will answer all you question.',
  },{
    'id': 3,
    'question': 'If there are question we will answer all you question?',
    'answer': 'If there are question you want to ask. We will answer all you question. want to ask. We will answer all you question.',
  },{
    'id': 4,
    'question': 'If there are question we will answer all you question?',
    'answer': 'If there are question you want to ask. We will answer all you question. want to ask. We will answer all you question.',
  },
]

export default function FAQ() {
  const [openedFAQ, setOpenedFAQ] = useState<null|number>(null)

  return (
    <div className="w-full flex flex-col justify-center items-start gap-5 py-8">
      <div className="w-full flex flex-col justify-between items-start sm:items-center gap-8 sm:gap-24 md:gap-24 sm:inline-flex sm:flex-row">
        <div className={'w-full sm:w-3/5 max-w-[500px] flex flex-col justify-start items-start text-start gap-4'}>
          <SectionHeader name={'FAQ'}/>
          <FAQHeader/>
        </div>
        <div className="sm:w-3/5 h-fit w-full sm:max-w-[700px] flex-col justify-center items-center gap-2.5 font-['Plus Jakarta Sans']">
          {data.map((item, index) => {
            return (
              <FAQQuestion
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openedFAQ === item.id}
                setIsOpen={setOpenedFAQ}/>
            )
          })}
        </div>
      </div>
   </div>
  )
}