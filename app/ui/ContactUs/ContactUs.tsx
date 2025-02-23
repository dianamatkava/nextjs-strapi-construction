import ContactDetail from "@/app/ui/ContactUs/ContactDetail";
import {FaPhoneAlt} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import HeaderH1 from "@/app/ui/Components/HeaderH1";
import ContactForm from "@/app/ui/ContactUs/ContactForm";
import Logo from "@/app/ui/Components/Logo";
import GetInTouch from "@/app/ui/ContactUs/GetInTouch";


export default function ContactUs () {
  return (
    <div className="w-full h-full inline-flex justify-center items-start gap-5">
      <div className="w-full h-full hidden sm:flex flex-col justify-end items-center gap-5 pt-12">
        <GetInTouch/>
      </div>
      <div className="w-full max-w-[500px] h-full justify-center items-start gap-8 flex flex-col">
        <div className="w-full h-fit flex-col justify-center items-center gap-3 inline-flex">
          <Logo/>
          <HeaderH1 title={'Otter Water is here to help!'} id={'contact'} className={'w-full text-center'}/>
          <div className="px-8 sm:px-4 w-full text-[#595959] text-sm text-center font-normal font-['Plus Jakarta Sans'] tracking-tight">
            We are here to help. If there are question you want to ask. We will answer all you question.
          </div>
        </div>
        <div className="w-full h-full flex-col justify-start items-start gap-5 inline-flex">
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}