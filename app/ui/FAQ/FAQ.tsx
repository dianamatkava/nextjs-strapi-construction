"use client";
import React, { useState } from "react";
import FAQHeader from "@/app/ui/FAQ/FAQHeader";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import FAQQuestion from "@/app/ui/FAQ/FAQQuestion";

const data = [
  {
    id: 1,
    question: "1. How quickly can you arrive after I call?",
    answer:
      "We offer <b>24/7 emergency service</b> and will be on-site within an hour in San Diego and surrounding areas.",
  },
  {
    id: 2,
    question: "2. Do you work with insurance?",
    answer:
      "Yes! We work directly with insurance companies to make the process as smooth and stress-free as possible.",
  },
  {
    id: 3,
    question: "3. How long does the water damage restoration take?",
    answer:
      "It depends on the extent of the damage. <b>Water extraction and drying typically take 2-5 days</b>, while full restoration can take longer. We'll give you a clear timeline after our initial inspection.",
  },
  {
    id: 4,
    question: "4. Is water damage covered by my insurance?",
    answer:
      "Most homeowners' insurance policies cover sudden water damage (like a burst pipe) but not gradual leaks or flooding. We can help you navigate your claim.",
  },
  {
    id: 5,
    question: "5. Will there be mold after water damage?",
    answer:
      "Mold can start growing within <b>24-48 hours</b> if water isn't properly removed. That's why we use advanced drying techniques to prevent mold growth.",
  },
];

export default function FAQ() {
  const [openedFAQ, setOpenedFAQ] = useState<null | number>(null);

  return (
    <div className="w-full flex flex-col justify-center items-start gap-5 py-8">
      <div className="w-full flex flex-col justify-between items-start sm:items-center gap-8 sm:gap-24 md:gap-24 sm:inline-flex sm:flex-row">
        <div
          className={
            "w-full sm:w-3/5 max-w-[500px] flex flex-col justify-start items-start text-start gap-4"
          }
        >
          <SectionHeader name={"FAQ"} />
          <FAQHeader />
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
                setIsOpen={setOpenedFAQ}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
