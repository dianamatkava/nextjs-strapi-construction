"use client";

import Logo from "@/app/ui/Components/Logo";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

export default function Header({ primaryColor = 'white' }: { primaryColor?: string }) {
  const textColorClass = `text-${primaryColor}`;
  const bgColorClass = `bg-${primaryColor}`;

  return (
    <div className={`w-full h-fit justify-between inline-flex text-sm ${textColorClass} px-8`}>
      <div className="w-full h-fit p-5 pb-3 flex-col justify-between items-start inline-flex">
        <div className="w-full inline-flex">
          <div className="w-full inline-flex gap-3 items-center">
            <FaInstagram size={15} color={primaryColor} />
            <LuFacebook size={15} color={primaryColor} />
            <FaWhatsapp size={15} color={primaryColor} />
            <FiPhone size={15} color={primaryColor} />
          </div>
          <div className="w-full inline-flex justify-start items-center">
            <Logo />
          </div>
          <div className="w-full inline-flex justify-end items-center gap-5">
            <div className="font-normal font-['Open Sans']">Home</div>
            <div className="font-normal font-['Open Sans']">About</div>
            <div className="font-normal font-['Open Sans']">Services</div>
            <div className="pt-4 flex-col justify-center items-center gap-2 inline-flex relative">
              <div className="font-bold font-['Open Sans']">Contact</div>
              <div className={`bottom-1 w-1.5 h-1.5 ${bgColorClass} rounded-full`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
