import Collaborators from "@/app/ui/Components/Collaborators";
import ContentImageBlock from "@/app/ui/Containers/ContentImageBlock";
import ChooseUs from "@/app/ui/Steps/ChooseUs";
import FAQ from "@/app/ui/FAQ/FAQ";
import AboutUs from "@/app/ui/AboutMe/AboutUs";
import { aboutUs } from "../data/aboutUs";
import React from "react";
import ContactUsBlock from "../ui/ContactUs/ContactUsBlock";

export default function Page() {
  const betweenComponents = [ChooseUs];
  return (
    <div className={"w-full flex flex-col gap-12"}>
      <AboutUs />
      <Collaborators />
      {aboutUs.contentText.map((item: any, idx: number) => (
        <React.Fragment key={idx}>
          <ContentImageBlock
            title={item.title}
            description={item.description}
            body={item.body}
            img={item.image}
          />
          {idx < betweenComponents.length &&
            betweenComponents[idx] &&
            React.createElement(betweenComponents[idx])}
        </React.Fragment>
      ))}
      <FAQ />
    </div>
  );
}
