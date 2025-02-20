import Services from "@/app/ui/Services/Services";
import ContactUsBlock from "@/app/ui/Containers/ContactUsBlock";
import ServicePreview from "@/app/ui/Services/ServicePreview";
import AboutMe from "@/app/ui/AboutMe/AboutMe";
import Testimonial from "@/app/ui/Testimonial/Testimonial";
import ContactUs from "@/app/ui/ContactUs/ContactUs";
import Collaborators from "@/app/ui/Components/Collaborators";
import ChooseUs from "@/app/ui/Steps/ChooseUs";
import StepByStepGuide from "@/app/ui/Steps/StepByStepGuide";
import FAQ from "@/app/ui/FAQ/FAQ";

export default function Page() {
  return (
    <main className="w-full h-full flex justify-center items-start min-h-screen flex-col pt-5 px-5 sm:px-16 py-8 gap-16">
      <Collaborators/>
      <ServicePreview/>
      <Services/>
      <ChooseUs/>
      <AboutMe/>
      <StepByStepGuide/>
      <ContactUsBlock/>
      <FAQ/>
      <Testimonial/>
    </main>
  );
}
