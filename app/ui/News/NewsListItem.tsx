import Image from "next/image";
import Link from "next/link";

export default function NewsListItem () {
  return (
    <div
      className="w-full h-48 hover:bg-gray-400/10 bg-black/40 px-5 py-3 rounded-xl flex-col justify-between items-start inline-flex relative">
      <Image
        src="/Image1.jpeg"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute inset-0 -z-10 rounded-[inherit]"
      />
      <div
        className="bg-white/20 px-3 py-1 rounded-xl justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-xs font-medium font-['Plus Jakarta Sans']">House
          Remodeling
        </div>
      </div>
      <Link href={'/news'} className="flex-col justify-start items-start gap-2.5 flex">
        <div
          className="self-stretch text-white text-lg font-medium font-['Plus Jakarta Sans'] leading-6 cursor-pointer hover:text-textHoverOnDark">Lorem
          ipsum is a dummy or placeholder text commonly
        </div>
        <div className="justify-center items-center gap-[5px] inline-flex">
          <div
            className="text-[#dcdcdc] text-xs font-medium font-['Plus Jakarta Sans']">08
            February 2024
          </div>
          <div className="w-[9px] h-[9px] bg-[#e1e1eb] rounded-[35px]"/>
          <div
            className="text-center text-[#dcdcdc] text-xs font-medium font-['Plus Jakarta Sans']"> 12:45
            AM
          </div>
        </div>
      </Link>
    </div>
  )
}