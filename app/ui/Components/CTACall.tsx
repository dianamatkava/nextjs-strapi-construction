"use client"
import { LuPhone } from "react-icons/lu";


export default function CTACall ({className}: {className?: string}) {
  return (
    <div data-svg-wrapper={LuPhone} className={"flex items-center justify-center w-[45px] h-[45px] border-2 rounded-3xl cursor-pointer hover:border-textHoverOnDark hover:text-textHoverOnDark" + ` ${className}`}>
      <LuPhone size={18}/>
    </div>
  )
}