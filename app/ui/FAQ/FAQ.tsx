"use client"
import React, {useState} from "react";
import FAQHeader from "@/app/ui/FAQ/FAQHeader";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import FAQQuestion from "@/app/ui/FAQ/FAQQuestion";


const data = [
  {
    'id': 1,
    'question': 'If there are question we will answer all you question?',
    'answer': 'Water damage\n' +
      '            restoration following a flood is no small or easy task, which is why hiring a company with a good reputation\n' +
      '            and vast history of successful flood damage restorations is a must. At otterwater.io.',
  },{
    'id': 2,
    'question': 'If there are question we will answer all you question?',
    'answer': 'Water damage\n' +
      '            restoration following a flood is no small or easy task, which is why hiring a company with a good reputation\n' +
      '            and vast history of successful flood damage restorations is a must. At otterwater.io.',
  },{
    'id': 3,
    'question': 'If there are question we will answer all you question?',
    'answer': 'Water damage\n' +
      '            restoration following a flood is no small or easy task, which is why hiring a company with a good reputation\n' +
      '            and vast history of successful flood damage restorations is a must. At otterwater.io.',
  },{
    'id': 4,
    'question': 'If there are question we will answer all you question?',
    'answer': 'Water damage\n' +
      '            restoration following a flood is no small or easy task, which is why hiring a company with a good reputation\n' +
      '            and vast history of successful flood damage restorations is a must. At otterwater.io.',
  },
]

export default function FAQ() {
  const [isOpen, setIsOpen] = useState<null|number>(null)

  return (
    <div className="w-full flex flex-col justify-center items-start gap-5 py-8">
      <div className="w-full inline-flex justify-between items-start gap-24">
        <div className={'w-3/5 max-w-[500px] flex flex-col justify-start items-start text-start gap-4'}>
          <SectionHeader name={'FAQ'}/>
          <FAQHeader/>
        </div>
        <div className="w-3/5 h-fit max-w-[700px] flex-col justify-center items-end gap-2.5 inline-flex font-['Plus Jakarta Sans']">
          {data.map((item, index) => {
            return (
              <FAQQuestion
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={isOpen}
                setIsOpen={setIsOpen}/>
            )
          })}
        </div>
      </div>
   </div>
  )
}