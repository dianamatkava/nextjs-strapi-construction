"use client"
import Logo from "@/app/ui/Components/Logo";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";


export default function Header () {

  return (
    <div className="w-full h-fit justify-between inline-flex text-sm">
        <div
          className="w-full h-fit p-5 pb-12 flex-col justify-between items-start inline-flex">
          <div className="w-full inline-flex">
            <div className="w-full inline-flex gap-3 items-center">
              <FaInstagram size={14} color={'white'}/>
              <LuFacebook size={14} color={'white'}/>
              <FaWhatsapp size={14} color={'white'}/>
              <FiPhone size={14} color={'white'}/>
            </div>
            <div className="w-full inline-flex justify-start items-center">
              <Logo/>
            </div>
            <div className="w-full inline-flex justify-center items-center gap-5">
              <div className="text-white font-normal font-['Open Sans']">Home</div>
              <div className="text-white font-normal font-['Open Sans']">About</div>
              <div className="text-white font-normal font-['Open Sans']">Sevices</div>
              <div className="pt-4 flex-col justify-center items-center gap-2 inline-flex relative">
                <div className="text-white font-bold font-['Open Sans']">Contact</div>
                <div className="bottom-1 w-1.5 h-1.5 bg-white rounded-full"/>
              </div>
            </div>
          </div>
        </div>

      {/*{isNavOpen && (*/}
      {/*  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex lg:hidden w-2/3">*/}
      {/*  <Footer/>*/}
      {/*    /!* Clickable area outside the sidebar that closes it *!/*/}
      {/*    <div*/}
      {/*      className="flex-1"*/}
      {/*      onClick={() => setIsNavOpen(false)}*/}
      {/*    ></div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
}
