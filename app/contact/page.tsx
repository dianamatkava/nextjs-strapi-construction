import ChooseUs from "@/app/ui/Steps/ChooseUs";
import FAQ from "@/app/ui/FAQ/FAQ";
import ContactUs from "@/app/ui/ContactUs/ContactUs";

export default function Page () {
  return (
    <div className={'w-full flex flex-col gap-12'}>
      <ContactUs/>
      <ChooseUs/>
      <FAQ/>
    </div>
  )
}