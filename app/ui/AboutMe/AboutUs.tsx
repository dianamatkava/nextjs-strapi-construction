import CTAGroup from "@/app/ui/Components/CTAGroup";
import ImageContainer from "@/app/ui/Components/ImageContainer";
import React from "react";
import HeaderH1 from "@/app/ui/Components/HeaderH1";
import AchievementItem from "@/app/ui/Components/AchievementItem";
import AnimatedImage from "@/app/ui/Components/AnimatedImage";

export default function AboutUs() {
  return (
    <div className="w-full full justify-center items-center gap-8 flex flex-col">
      <div className="w-full full justify-center items-center gap-8 inline-flex">
        <div className="w-full md:w-1/2 h-fit flex-col justify-start items-start gap-5 inline-flex">
          <div className="self-stretch h-fit flex-col justify-between items-start flex gap-10">
            <div className="self-stretch h-fit flex-col justify-start items-start gap-4 flex">
              <HeaderH1 id={'about'} title={'Comprehensive Water Damage Restoration'}
                        className={'justify-start items-center text-start'}/>
              <AnimatedImage src={"/Contract.jpg"} alt={"/Contract.jpg"} className={"block w-full sm:h-[250px] !h-[200px] md:hidden"}/>
              <div className="w-full text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                At Otter Water Restoration, we specialize in comprehensive water damage restoration for homes and businesses across San Diego and the surrounding areas. Whether it’s a burst pipe, plumbing failure, or an unexpected leak, our team is equipped with the latest technology to restore your property—not just to its original condition, but even better.
              </div>
              <div className="w-full justify-start items-center gap-4 sm:gap-4 hidden sm:inline-flex">
                <AchievementItem key={1} title={'Availability'} score={'24/7'}/>
                <AchievementItem key={3} title={'Response Time'} score={'4h'}/>
                <AchievementItem key={2} title={'Certifications'} score={'11'}/>
                <AchievementItem key={4} title={'Satisfied Clients'} score={'98%'}/>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-full md:w-1/2 md:block relative">
          <AnimatedImage src={"/Contract.jpg"} alt={"/Contract.jpg"}/>
        </div>
      </div>
    </div>
  )
}