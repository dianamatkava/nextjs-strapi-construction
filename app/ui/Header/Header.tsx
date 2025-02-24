"use client";

import Logo from "@/app/ui/Components/Logo";
import {LuFacebook} from "react-icons/lu";
import {FaInstagram} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa6";
import {FiPhone} from "react-icons/fi";
import Link from "next/link";

export default function Header({ primaryColor = 'white' }: { primaryColor?: string }) {
  const textColorClass = `text-${primaryColor}`;
  const bgColorClass = `bg-${primaryColor}`;

  return (
    <div className={`w-full h-fit justify-between inline-flex text-sm ${textColorClass} px-8`}>
      <div className="w-full h-fit p-5 pb-3 flex-col justify-between items-start inline-flex">
        <div className="w-full inline-flex">
          <div className="w-full inline-flex items-center">
            <div className={`p-2 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}>
              <FaInstagram size={15}/>
            </div>
            <div className={`p-2 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}>
              <LuFacebook size={15}/>
            </div>
            <div className={`p-2 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}>
              <FaWhatsapp size={15}/>
            </div>
            <div className={`p-2 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}>
              <FiPhone size={15}/>
            </div>
          </div>
          <div className="w-full inline-flex justify-start items-center">
            <Logo/>
          </div>
          <div className="w-full inline-flex justify-end items-center gap-3">
            <Link href={'/'} className="p-2 font-normal cursor-pointer hover:text-textHoverOnDark">Home</Link>
            <Link href={'/about'} className="p-2 font-normal cursor-pointer hover:text-textHoverOnDark">About</Link>
            <Link href={'/#services'} className="p-2 font-normal cursor-pointer hover:text-textHoverOnDark">Services</Link>

            <Link href={'/contact'} className="pt-4 flex-col justify-center items-center gap-2 inline-flex relative">
              <div className="font-bold">Contact</div>
              <div className={`bottom-1 w-1.5 h-1.5 ${bgColorClass} rounded-full`} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
