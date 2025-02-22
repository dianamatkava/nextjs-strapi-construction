import CTAPrimary from "@/app/ui/Components/CTAPrimary";
import TextArea from "@/app/ui/Form/TextArea";
import {MdOutlineMail} from "react-icons/md";
import {LuMessageCircleMore} from "react-icons/lu";
import InputLineField from "@/app/ui/Form/InputLineField";
import React from "react";

export default function ContactForm () {
  return (
    <form className="w-full h-fit flex-col justify-center items-end gap-3 inline-flex">
      <div className="w-full inline-flex gap-2">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name"
                 className={"self-stretch text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-tight tracking-tight"}>
            Full Name<span className={'text-red-600 px-1'}>*</span>
          </label>
          <InputLineField
            name='name'
            placeholder={'John Doe'}
            isRequired={true}
            inputClassName={'w-full text-[#595959] bg-slate-100 text-sm'}
          >
            <div className="z-10 absolute bottom-3 left-3">
              <MdOutlineMail size={18}/>
            </div>
          </InputLineField>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email"
                 className={"self-stretch text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-tight tracking-tight"}>
            Email <span className={'text-red-600 px-1'}>*</span>
          </label>
          <InputLineField
            name='email'
            placeholder={'example@gmail.com'}
            isRequired={true}
            inputClassName={'w-full text-[#595959] bg-slate-100 text-sm'}
          >
            <div className="z-10 absolute bottom-3 left-3">
              <MdOutlineMail size={18}/>
            </div>
          </InputLineField>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="phone"
               className={"self-stretch text-black text-xs font-bold font-['Plus Jakarta Sans'] leading-tight tracking-tight"}>
          Phone <span className={'text-red-600 px-1'}>*</span>
        </label>
        <InputLineField
          name='phone'
          placeholder={'+12 34 5678 234'}
          isRequired={true}
          inputClassName={'w-full text-[#595959] bg-slate-100 text-sm'}
        >
          <div className="z-10 absolute bottom-3 left-3">
            <MdOutlineMail size={18}/>
          </div>
        </InputLineField>
      </div>

      <TextArea name={'message'} label={'Enter your message'} placeholder={'Enter your message'} isRequired={false}>
        <LuMessageCircleMore size={18}/>
      </TextArea>
      <CTAPrimary title={'Submit'} className={'text-white bg-bgPrimary'}/>
    </form>
  )
}