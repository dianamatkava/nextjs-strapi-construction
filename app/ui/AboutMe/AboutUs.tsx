import React from "react";
import HeaderH2 from "@/app/ui/Components/HeaderH2";
import AchievementItem from "@/app/ui/Components/AchievementItem";
import AnimatedImage from "@/app/ui/Components/AnimatedImage";
import { aboutUs } from "@/app/data/aboutUs";
import HeaderH1 from "../Components/HeaderH1";

export default function AboutUs({
  type = "section",
}: {
  type?: "page" | "section";
}) {
  return (
    <div className="w-full full justify-center items-center gap-8 flex flex-col">
      <div className="w-full full justify-center items-center gap-8 inline-flex">
        <div className="w-full md:w-1/2 h-fit flex-col justify-start items-start gap-5 inline-flex">
          <div className="self-stretch h-fit flex-col justify-between items-start flex gap-10">
            <div className="self-stretch h-fit flex-col justify-start items-start gap-2 flex">
              {type === "page" ? (
                <HeaderH1
                  id={"about"}
                  title={aboutUs.title}
                  className={"justify-start items-center text-start"}
                />
              ) : (
                <HeaderH2
                  id={"about"}
                  title={aboutUs.title}
                  className={"justify-start items-center text-start"}
                />
              )}
              <AnimatedImage
                src={aboutUs.image}
                alt={"About Us Image"}
                className={"block w-full sm:h-[250px] !h-[200px] md:hidden"}
              />
              <div
                className="w-full text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight"
                dangerouslySetInnerHTML={{ __html: aboutUs.description }}
              />
              <div className="pt-4 w-full justify-start items-center gap-4 hidden md:inline-flex">
                <AchievementItem
                  key={1}
                  title={"Availability"}
                  score={"24/7"}
                />
                <AchievementItem key={3} title={"Response Time"} score={"4h"} />
                <AchievementItem
                  key={2}
                  title={"Certifications"}
                  score={"11"}
                />
                <AchievementItem
                  key={4}
                  title={"Satisfied Clients"}
                  score={"98%"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-full md:w-1/2 md:block relative">
          <AnimatedImage src={"/img/aboutus.png"} alt={"About Us Image"} />
        </div>
      </div>
    </div>
  );
}
