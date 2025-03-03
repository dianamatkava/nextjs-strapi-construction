import HeaderH1 from "@/app/ui/Components/HeaderH1";
import ImageContainer from "@/app/ui/Components/ImageContainer";
import React from "react";

export default function ContentImageBlock ({title, description, contentText, img}: {title: string, description: string, contentText: string, img?: ImageContainer}) {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-5 inline-flex">
      <div className="w-full flex-col justify-start items-center flex">
        <HeaderH1 title={'1: Full-Service Water Restoration'} className={'text-center items-center justify-center'}/>
        <div
          className="self-stretch text-center text-[#595959] text-sm font-normal font-['Plus Jakarta Sans']">We
          provide you with a comprehensive assessment of water damages.
        </div>
      </div>
      <div className="w-full self-stretch justify-between items-center inline-flex gap-8">
        <ImageContainer src={"/Contract.jpg"} alt={"/Contract.jpg"} className={"hidden !w-1/2 sm:block h-[220px]"}/>
        <div className="w-1/2 flex px-4 flex-col text-black text-sm font-normal font-['Plus Jakarta Sans'] gap-3">
          <div className="w-full">
            Water damage restoration following a flood is no small or easy task, which is why hiring a company with a good reputation
          and vast history of successful flood damage restorations is a must. At otterwater.io, we hire the finest
          reconstruction contractors in all of Sacramento who use their experience and expertise in your water damage
          cleanup and restoration project.
          </div>
          <div className="w-full">
            We are your go to water mitigation service in Northern California and
            Nevada. Reconstruction and water damage restoration in a home or business involves several steps such as:
            selection of the items to be replaced, engineering, permitting (if required), insurance approval, and a
            construction timeline. otterwater.io., is the leading company in flood restoration services and we pride
            ourselves on making the process as seamless as possible.
          </div>
        </div>
      </div>
    </div>
  );
}