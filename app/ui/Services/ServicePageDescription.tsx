import CTAGroup from "@/app/ui/Components/CTAGroup";
import React from "react";
import ImageContainer from "@/app/ui/Components/ImageContainer";
import HeaderH1 from "../Components/HeaderH1";

export default function ServicePageDescription({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="w-full justify-start items-center gap-12 inline-flex relative">
      <div className="w-full sm:w-1/2 pr-4 flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
          <HeaderH1 title={title} className={"sm:text-start text-center"} />
          <div className="self-stretch text-black text-sm font-normal font-['Plus Jakarta Sans']">
            {description}
          </div>
        </div>
        <CTAGroup primaryButtonLink={"/contact"} mode="light" />
      </div>
      <ImageContainer
        src={image}
        alt="Service Page Image"
        className={"hidden !w-1/2 sm:block h-[300px]"}
      />
    </div>
  );
}
