"use client"
import { IoIosArrowBack } from "react-icons/io";


export default function BackButton () {
  return (
    <div className="w-fit h-fit justify-start items-center gap-1 inline-flex">
      <IoIosArrowBack size={14}/>
      <div className="text-black text-xs font-semibold font-['Plus Jakarta Sans']">Back</div>
    </div>
  )
}