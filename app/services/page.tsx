import ServicePageDescription from "@/app/ui/Services/ServicePageDescription";
import Collaborators from "@/app/ui/Components/Collaborators";
import ServicePageBlock from "@/app/ui/Services/ServicePageBlock";
import ChooseUs from "@/app/ui/Steps/ChooseUs";
import StepByStepGuide from "@/app/ui/Steps/StepByStepGuide";
import FAQ from "@/app/ui/FAQ/FAQ";
import ContactUsBlock from "@/app/ui/ContactUs/ContactUsBlock";

export default function Page () {
  return (
    <div className={'w-full flex flex-col gap-12'}>
      <ServicePageDescription/>
      <Collaborators/>
      <ServicePageBlock/>
      <ChooseUs/>
      <ServicePageBlock/>
      <StepByStepGuide/>
      <ContactUsBlock/>
      <FAQ/>
    </div>
  )
}