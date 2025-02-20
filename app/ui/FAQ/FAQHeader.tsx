import React from "react";
import HeaderH1 from "@/app/ui/Components/HeaderH1";
import InputLineField from "@/app/ui/Form/InputLineField";
import {LuSend} from "react-icons/lu";
import CTAPrimary from "@/app/ui/Components/CTAPrimary";
import {MdOutlineMail} from "react-icons/md";

export default function FAQHeader () {
  return (
    <div className="w-fit flex-col justify-center items-start gap-5 inline-flex font-['Plus Jakarta Sans']">
      <HeaderH1 title={'Do you have any question about the service?'} className={'text-start'}/>
      <div className="text-black text-sm font-normal">
        If there are question you want to ask. We will answer all you question. want to ask. We will answer all you question.
      </div>
      <div className="w-full justify-center items-center gap-2 inline-flex">
        <form className="w-full self-stretch flex-col justify-start items-start gap-4 flex">
          <InputLineField type={'email'} name={"email"} placeholder={"example@example.com"}>
            <div className="z-10 absolute bottom-3 left-3">
              <MdOutlineMail size={19} color={'#'}/>
            </div>
          </InputLineField>
        </form>
        <CTAPrimary title={'Submit'} className={'text-white bg-bgPrimary'}/>
      </div>
    </div>
)
}