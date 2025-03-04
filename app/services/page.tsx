import ServicePageDescription from "@/app/ui/Services/ServicePageDescription";
import Collaborators from "@/app/ui/Components/Collaborators";
import ContentImageBlock from "@/app/ui/Containers/ContentImageBlock";
import ChooseUs from "@/app/ui/Steps/ChooseUs";
import StepByStepGuide from "@/app/ui/Steps/StepByStepGuide";
import FAQ from "@/app/ui/FAQ/FAQ";
import ContactUsBlock from "@/app/ui/ContactUs/ContactUsBlock";

export default function Page () {
  return (
    <div className={'w-full flex flex-col gap-12'}>
      <ServicePageDescription/>
      <Collaborators/>
      <ContentImageBlock/>
      <ChooseUs/>
      <ContentImageBlock/>
      <StepByStepGuide/>
      <ContactUsBlock/>
      <FAQ/>
    </div>
  )
}