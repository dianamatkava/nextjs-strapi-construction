"use client"
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';


export default function BackButton () {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="w-fit h-fit justify-start items-center gap-1 inline-flex"
    >
      <IoIosArrowBack size={14}/>
      <div className="text-black text-xs font-semibold font-['Plus Jakarta Sans']">Back</div>
    </button>
  )
}