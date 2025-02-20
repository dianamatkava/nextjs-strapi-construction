import { FaAngleDown } from "react-icons/fa6";


export default function FAQQuestion () {
  return (
    <div
      className="w-full py-3 px-1 border-b border-[#e1e1eb] justify-between items-start gap-2.5 inline-flex">
      <div className="text-black text-lg leading-10">If there are
        question we will answer all you question?
      </div>
      <FaAngleDown size={16}/>
    </div>
  )
}