"use client"

import AllstateLogo from '@/app/assets/svg/Allstate-Logo.svg';
import ChubbLogo from '@/app/assets/svg/Chubb.svg';
import LibertyLogo from '@/app/assets/svg/Liberty.svg';
import ProgressiveLogo from '@/app/assets/svg/Progressive.svg';
import USAALogo from '@/app/assets/svg/USAA.svg';
import BerkshireLogo from '@/app/assets/svg/Berkshire_Hathaway.svg';
import TravelersLogo from '@/app/assets/svg/Travelers.svg';
import AIGLogo from '@/app/assets/svg/AIG.svg';
import AmericanFamilyLogo from '@/app/assets/svg/AmericanFamily.svg';
import FarmersInsuranceLogo from '@/app/assets/svg/FarmersInsurance.svg';
import NationwideLogo from '@/app/assets/svg/Nationwide.svg';
import Review from "@/app/ui/Testimonial/Review";


export default function Collaborators() {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-0">
      <div className="max-w-[500px] text-[#595959] text-sm font-normal font-['Plus Jakarta Sans'] leading-[30px]">
        We collaborate with +120 insurance companies around USA
      </div>
      <div className="w-full h-14 justify-start items-center gap-4 inline-flex overflow-hidden">
        <div className="w-full h-fit justify-start items-center gap-6 inline-flex animate-marquee">
          <div data-svg-wrapper><AllstateLogo height={'85'} width={'110px'}/></div>
          <div data-svg-wrapper className={'mt-[23px]'}><BerkshireLogo height={'45'} width={'100px'}/></div>
          <div data-svg-wrapper><ChubbLogo height={45} width={'100px'}/></div>
          <div data-svg-wrapper><LibertyLogo height={85} width={'130px'}/></div>
          <div data-svg-wrapper><ProgressiveLogo height={45} width={'100px'}/></div>
          <div data-svg-wrapper><USAALogo height={35} width={'40px'}/></div>
          <div data-svg-wrapper><TravelersLogo height={45} width={'120px'}/></div>
          <div data-svg-wrapper><AmericanFamilyLogo height={45} width={'100px'}/></div>
          <div data-svg-wrapper><AIGLogo height={35} width={'60px'}/></div>
          <div data-svg-wrapper><NationwideLogo height={85} width={'130px'}/></div>
          <div data-svg-wrapper><FarmersInsuranceLogo height={45} width={'100px'}/></div>

          <div data-svg-wrapper><AllstateLogo height={'85'} width={'110px'}/></div>
          <div data-svg-wrapper className={'mt-[23px]'}><BerkshireLogo height={'45'} width={'100px'}/></div>
          <div data-svg-wrapper><ChubbLogo height={45} width={'100px'}/></div>
          <div data-svg-wrapper><LibertyLogo height={85} width={'130px'}/></div>
          <div data-svg-wrapper><ProgressiveLogo height={45} width={'100px'}/></div>

        </div>
      </div>
    </div>
  )
}