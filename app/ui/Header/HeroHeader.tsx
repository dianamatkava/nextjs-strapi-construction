import Header from "@/app/ui/Header/Header";
import CTAGroup from "@/app/ui/Components/CTAGroup";
import Profile from "@/app/ui/Components/Profile";
import StartRating from "@/app/ui/Components/StartRating";
import Tick from "@/app/ui/Components/Tick";
import Image from "next/image";

export default function HeroHeader () {
  return (
    <div
      className="bg-[#0e1518]/85 w-full h-fit py-0 sm:px-10 justify-center items-center relative">
      <Image
        src="/Header.jpg"
        alt="Header Background"
        fill
        style={{objectFit: 'cover'}}
        className="absolute inset-0 -z-10 rounded-[inherit]"
      />
      <Header/>
      <div className="w-full h-fit flex-col justify-center items-center inline-flex gap-8 py-20 sm:mt-[-0px]">
        <div className="max-w-[800px] h-fit flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch flex-col justify-center items-center gap-8 sm:gap-12 flex">
            <div className="self-stretch flex-col justify-center items-center gap-12 flex">
              <div className="w-full h-full self-stretch flex flex-col justify-center items-center gap-5">
                <div
                  className="self-stretch text-center text-white text-4xl sm:text-6xl font-semibold font-['Plus Jakarta Sans']">
                  All-in-One Solution for Repair Services with Otter Water
                </div>
                <div
                  className="max-w-[600px] text-center text-[#e4e4e4] text-sm font-medium font-['Plus Jakarta Sans']">As
                  a group of companies, we offer a wide range of water restoration, leak detection, mold remediation and
                  reconstruction services, including residential. and reconstruction services and reconstruction
                  services, including residential. and reconstruction services
                </div>
              </div>
              <CTAGroup primaryButtonLink={'/contact'} primaryButtonStyle={'bg-bgDarkPrimary text-black'} secondaryButtonStyle={'text-white border-white'}>
                <div
                  className="text-center text-[#e4e4e4] text-sm font-medium font-['Plus Jakarta Sans']">Available
                  24/7
                </div>
              </CTAGroup>
            </div>
            <div className=" w-full h-fit flex flex-col items-center justify-center gap-5">
              <div className="w-full h-fit flex items-center justify-center gap-8">
                <span className='text-xxlg font-semibold text-white'>4.9</span>
                <StartRating rating={4}/>
              </div>
              <div className="w-full h-fit flex items-center justify-center gap-8">
                <div
                  className="max-w-[600px] self-stretch text-center text-[#e4e4e4] text-sm font-medium font-['Plus Jakarta Sans']">As
                  a group of companies, we offer a wide range of water restoration, leak detection, mold remediation and
                  reconstruction services, including residential. and reconstruction. and reconstruction services and
                  reconstruction
                  services, including residential. and reconstruction services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="max-w-[850px] inline-flex items-center justify-center">*/}
      {/*  <div*/}
      {/*    className="w-full self-stretch justify-center items-center gap-3 flex flex-wrap lg:gap-8 md:inline-flex md:flex-nowrap">*/}
      {/*    <Tick key={1} title={'Working with Insurances'}/>*/}
      {/*    <Tick key={2} title={'Virtual consultations from home'}/>*/}
      {/*    <Tick key={3} title={'24/7 Emergency Repair Services'}/>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}
