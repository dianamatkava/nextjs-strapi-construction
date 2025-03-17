import ServicePageDescription from "@/app/ui/Services/ServicePageDescription";
import Collaborators from "@/app/ui/Components/Collaborators";
import ContentImageBlock from "@/app/ui/Containers/ContentImageBlock";
import ChooseUs from "@/app/ui/Steps/ChooseUs";
import StepByStepGuide from "@/app/ui/Steps/StepByStepGuide";
import FAQ from "@/app/ui/FAQ/FAQ";
import ContactUsBlock from "@/app/ui/ContactUs/ContactUsBlock";
import { API_URL } from "@/app/constants";
import { services } from "@/app/data/services";
import { notFound } from "next/navigation";
import React from "react";

async function getService(documentId: string) {
  try {
    const response = await fetch(
      `${API_URL}/services/${documentId}?populate=*`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      console.error("Service fetch failed:", await response.text());
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export default async function ServicePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const service = services.find((item) => item.id === id);

  if (!service) {
    notFound();
  }

  const betweenComponents = [ChooseUs, StepByStepGuide];

  return (
    <div className={"w-full flex flex-col gap-12"}>
      <ServicePageDescription
        title={service.title}
        description={service.detailedDescription}
        image={service.image}
      />
      <Collaborators />

      {service.contentText.map((item: any, idx: number) => (
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
      <ContactUsBlock />
      <FAQ />
    </div>
  );
}
