import SectionHeader from "@/app/ui/Components/SectionHeader";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function ServicePreview() {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-5 inline-flex">
      <SectionHeader name={"Services"} />
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 h-fit flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="sm:w-1/2">
            <HeaderH1
              id={"whoAmI"}
              title={"Get comprehensive Solution for Repair Services"}
              className={"text-start"}
            />
          </div>
          <div className="sm:w-1/2 text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
            At <b>Otter Water Restoration</b>, we specialize in comprehensive
            water damage restoration for homes and businesses across{" "}
            <b>San Diego and the surrounding areas</b>. Whether it’s a burst
            pipe, plumbing failure, or an unexpected leak, our team is equipped
            with the latest technology to restore your property—not just to its
            original condition, but even better.
          </div>
        </div>
      </div>
    </div>
  );
}
