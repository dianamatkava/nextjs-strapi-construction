import HeaderH1 from "@/app/ui/Components/HeaderH1";
import CTAGroup from "@/app/ui/Components/CTAGroup";
import React from "react";
import ImageContainer from "@/app/ui/Components/ImageContainer";

export default function ServicePageDescription () {
  return (
    <div className="w-full justify-start items-center gap-12 inline-flex relative">
      <div className="w-full sm:w-1/2 pr-4 flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <HeaderH1 title={'Water Damage Restoration'} className={'sm:text-start text-center'}/>
          <div
            className="self-stretch text-black text-sm font-normal font-['Plus Jakarta Sans']">Otterwater®
            Water Damage Restoration delivers Rapid Recovery, Reliable Results™—restoring your home safely and swiftly
            without the use of harsh chemicals or invasive procedures. Our state-of-the-art water extraction and drying
            process is designed to prevent mold growth and secondary damage, ensuring an eco-friendly
          </div>
        </div>
        <CTAGroup primaryButtonLink={'/contact'} primaryButtonStyle={'bg-bgPrimary text-white'} secondaryButtonStyle={'text-black border-black border-[1.5px]'}>
          <div className="w-fit h-full flex-col justify-center items-start gap-1 inline-flex">
            <div
              className="self-stretch text-black text-sm font-semibold font-['Plus Jakarta Sans']">Contact
              me
            </div>
            <div
              className="self-stretch text-black text-sm font-normal font-['Plus Jakarta Sans']">
              +01 1 26-55-56-00
            </div>
          </div>
        </CTAGroup>
      </div>
      <ImageContainer src={"/Contract.jpg"} alt={"/Contract.jpg"} className={"hidden !w-1/2 sm:block h-[300px]"}/>
    </div>
  );
}