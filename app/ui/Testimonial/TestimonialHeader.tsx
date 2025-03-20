import SectionHeader from "@/app/ui/Components/SectionHeader";
import HeaderH2 from "@/app/ui/Components/HeaderH2";

export default function TestimonialHeader() {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-5 inline-flex">
      <div className="w-fit inline-flex items-center justify-center">
        <SectionHeader name={"Testimonial"} />
      </div>
      <div className="self-stretch flex-col justify-center items-center gap-5 flex">
        <HeaderH2
          id={"testimonial"}
          title={"Your One-Stop Solution for All Repairs"}
          className={"justify-center items-center"}
        />
        <div className="max-w-[500px] text-center text-[#595959] text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
          At OtterWater, we quickly detect leaks, prevent mold, and restore your
          space. See why our clients trust our expertise.
        </div>
      </div>
    </div>
  );
}
