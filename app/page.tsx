import ServiceList from "@/app/ui/Services/ServiceList";
import ContactUsBlock from "@/app/ui/ContactUs/ContactUsBlock";
import ServicePreview from "@/app/ui/Services/ServicePreview";
import AboutUs from "@/app/ui/AboutMe/AboutUs";
import Testimonial from "@/app/ui/Testimonial/Testimonial";
import ContactUs from "@/app/ui/ContactUs/ContactUs";
import Collaborators from "@/app/ui/Components/Collaborators";
import ChooseUs from "@/app/ui/Steps/ChooseUs";
import StepByStepGuide from "@/app/ui/Steps/StepByStepGuide";
import FAQ from "@/app/ui/FAQ/FAQ";
import News from "@/app/ui/News/News";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import React from "react";

export default function Page() {
  return (
    <main className="w-full h-full flex justify-center items-start min-h-screen flex-col pt-5 px-5 sm:px-16 py-8 gap-16">
      <Collaborators/>
      <ServicePreview/>
      <ServiceList/>
      <Testimonial/>
      <ChooseUs/>
      <div className='w-full flex flex-col gap-1'>
        <SectionHeader name={"About Me"}/>
        <AboutUs/>
      </div>
      <StepByStepGuide/>
      {/*<ContactUsBlock/>*/}
      <News/>
      <FAQ/>
    </main>
  );
}
