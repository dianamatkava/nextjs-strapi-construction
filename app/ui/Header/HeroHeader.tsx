import Header from "@/app/ui/Header/Header";
import CTAGroup from "@/app/ui/Components/CTAGroup";
import StartRating from "@/app/ui/Components/StartRating";
import Image from "next/image";

export default function HeroHeader({
  siteSlogan,
  siteDescription,
  siteReview,
}: {
  siteSlogan: string;
  siteDescription: string;
  siteReview: string;
}) {
  return (
    <div className="bg-[#0e1518]/85 w-full h-fit py-0 sm:px-10 justify-center items-center relative">
      <Image
        src="/Header.jpg"
        alt="Header Background"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 -z-10 rounded-[inherit]"
      />
      <Header />
      <div className="w-full h-fit flex-col justify-center items-center inline-flex gap-8 py-10 px-4 sm:py-20 sm:mt-[-0px]">
        <div className="max-w-[800px] h-fit flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch flex-col justify-center items-center gap-8 sm:gap-12 flex">
            <div className="self-stretch flex-col justify-center items-center gap-12 flex">
              <div className="w-full h-full self-stretch flex flex-col justify-center items-center gap-5">
                <div className="self-stretch text-center text-white text-4xl sm:text-6xl font-semibold font-['Plus Jakarta Sans']">
                  {siteSlogan}
                </div>
                <div className="max-w-[600px] text-center text-[#e4e4e4] text-sm font-medium font-['Plus Jakarta Sans']">
                  {siteDescription}
                </div>
              </div>
              <CTAGroup
                primaryButtonLink={"/contact"}
                primaryButtonStyle={"bg-bgDarkPrimary text-black"}
                secondaryButtonStyle={"text-white border-white"}
              >
                <div className="text-center text-[#e4e4e4] text-sm font-medium font-['Plus Jakarta Sans']">
                  Available 24/7
                </div>
              </CTAGroup>
            </div>
            <div className=" w-full h-fit flex flex-col items-center justify-center gap-5">
              <div className="w-full h-fit flex items-center justify-center gap-8">
                <span className="text-xxlg font-semibold text-white">4.9</span>
                <StartRating rating={4} />
              </div>
              <div className="w-full h-fit flex items-center justify-center gap-8">
                <div className="max-w-[600px] self-stretch text-center text-[#e4e4e4] text-sm font-medium font-['Plus Jakarta Sans']">
                  {siteReview}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
