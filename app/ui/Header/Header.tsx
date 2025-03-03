"use client";

import Logo from "@/app/ui/Components/Logo";
import {LuFacebook} from "react-icons/lu";
import {FaInstagram} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa6";
import {FiPhone} from "react-icons/fi";
import Link from "next/link";
import {usePathname} from "next/navigation";

const headerRoutes = [
  {'name': 'Home', 'path': '/'},
  {'name': 'Services', 'path': '/#services'},
  {'name': 'About', 'path': '/about'},
  {'name': 'Contact', 'path': '/contact'},
]

export default function Header({ primaryColor = 'white' }: { primaryColor?: string }) {
  const textColorClass = `text-${primaryColor}`;
  const bgColorClass = `bg-${primaryColor}`;
  const pathname = usePathname();


  return (
    <div className={`w-full h-fit justify-between inline-flex text-sm ${textColorClass} sm:px-8`}>
      <div className="w-full h-fit p-5 pb-3 flex-col justify-between items-start inline-flex">
        <div className="w-full inline-flex">
          <div className="hidden w-full sm:inline-flex items-center">
            <div className={`p-1.5 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}>
              <FaInstagram size={15}/>
            </div>
            <div className={`p-1.5 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}>
              <LuFacebook size={15}/>
            </div>
            <div className={`p-1.5 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}>
              <FaWhatsapp size={15}/>
            </div>
            <div className={`p-1.5 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}>
              <FiPhone size={15}/>
            </div>
          </div>
          <div className="w-full inline-flex justify-start items-center">
            <Logo/>
          </div>
          <div className="hidden w-full sm:inline-flex justify-end items-start gap-8">
            {headerRoutes.map((route, index) => (
              <Link key={index} href={route.path} className='pt-4 flex-col justify-start items-center gap-2 inline-flex relative'>
                {route.path === pathname ? (
                  <>
                    <div className="font-bold">{route.name}</div>
                    <div className={`bottom-1 w-1.5 h-1.5 ${bgColorClass} rounded-full`}/>
                  </>
                ) : route.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
