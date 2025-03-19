import FAQ from "@/app/ui/FAQ/FAQ";
import ContactUs from "@/app/ui/ContactUs/ContactUs";
import GetInTouch from "../ui/ContactUs/GetInTouch";

export default function Page() {
  return (
    <div className={"w-full flex flex-col gap-12"}>
      <ContactUs />
      <div className="w-full h-full sm:hidden flex flex-col justify-center items-center gap-5">
        <GetInTouch />
      </div>
      <FAQ />
    </div>
  );
}
