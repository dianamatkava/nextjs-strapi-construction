import Collaborators from "@/app/ui/Components/Collaborators";
import ContentImageBlock from "@/app/ui/Containers/ContentImageBlock";
import ChooseUs from "@/app/ui/Steps/ChooseUs";
import FAQ from "@/app/ui/FAQ/FAQ";
import AboutUs from "@/app/ui/AboutMe/AboutUs";
import GetInTouch from "@/app/ui/ContactUs/GetInTouch";

export default function Page () {
  return (
    <div className={'w-full flex flex-col gap-12'}>
      <AboutUs/>
      <Collaborators/>
      <ChooseUs/>
      <ContentImageBlock/>
      {/*<ContactUsBlock/>*/}
      <FAQ/>
    </div>
  )
}