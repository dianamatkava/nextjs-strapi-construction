import CTAGroup from "@/app/ui/Components/CTAGroup";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import ImageContainer from "@/app/ui/Components/ImageContainer";
import React from "react";
import HeaderH1 from "@/app/ui/Components/HeaderH1";
import AchievementItem from "@/app/ui/Components/AchievementItem";

export default function AboutUs() {
  return (
    <div className="w-full full justify-center items-center gap-8 flex flex-col">
      <div className="w-full full justify-center items-center gap-8 inline-flex">
        <div className="w-full sm:w-1/2 h-fit flex-col justify-start items-start gap-5 inline-flex">
          <div className="self-stretch h-fit flex-col justify-between items-start flex gap-10">
            <div className="self-stretch h-fit flex-col justify-start items-start gap-4 flex">
              <HeaderH1 id={'about'} title={'Professional Handyman providing reliable repair services'}
                        className={'justify-start items-center text-start'}/>
              <div className="w-full text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">Contrary
                to
                popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                undoubtable source.
              </div>
              <div className="justify-center items-center gap-4 sm:gap-6 inline-flex">
                <AchievementItem key={1} title={'Availability'} score={'24/7'}/>
                <AchievementItem key={3} title={'Response Time'} score={'4h'}/>
                <AchievementItem key={2} title={'Certifications'} score={'11'}/>
                <AchievementItem key={4} title={'Satisfied Clients'} score={'98%'}/>
              </div>
              <ImageContainer src={"/Contract.jpg"} alt={"/Contract.jpg"} className={"block w-full h-[250px] sm:hidden"}/>
            </div>
            <CTAGroup primaryButtonStyle={'bg-bgPrimary text-white'} secondaryButtonStyle={'text-black border-black border-[1.5px]'}>
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
        </div>
        <ImageContainer src={"/Contract.jpg"} alt={"/Contract.jpg"} className={"hidden w-1/2 sm:block"}/>
      </div>
    </div>
  )
}