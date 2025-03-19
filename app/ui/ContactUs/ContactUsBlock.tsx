import Image from "next/image";
import CTAGroup from "@/app/ui/Components/CTAGroup";

export default function ContactUsBlock() {
  return (
    <div className="hidden md:inline-flex w-full h-fit px-5 sm:px-20 py-5 sm:py-14 bg-black/40 rounded-3xl justify-between items-center relative">
      <Image
        src="/Image1.jpeg"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 -z-10 rounded-[inherit]"
      />
      <div className="w-fit text-neutral-100 text-3xl font-semibold font-['Plus Jakarta Sans'] leading-10">
        We remain available 24/7 by phone
        <br />
      </div>
      <CTAGroup primaryButtonLink={"/contact"} mode="dark" />
    </div>
  );
}
