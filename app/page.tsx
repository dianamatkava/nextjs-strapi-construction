import ServiceList from "@/app/ui/Services/ServiceList";
import ServicePreview from "@/app/ui/Services/ServicePreview";
import AboutUs from "@/app/ui/AboutMe/AboutUs";
import Testimonial from "@/app/ui/Testimonial/Testimonial";
import Collaborators from "@/app/ui/Components/Collaborators";
import ChooseUs from "@/app/ui/Steps/ChooseUs";
import StepByStepGuide from "@/app/ui/Steps/StepByStepGuide";
import FAQ from "@/app/ui/FAQ/FAQ";
import NewsList from "@/app/ui/News/NewsList";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import React from "react";
import axios from "axios";
import { services } from "./data/services";

async function getServices() {
  try {
    const res = await axios.get(`/services?populate=*`);
    return res.data.data;
  } catch (error) {
    console.error("Failed to fetch global data:", error);
    return [];
  }
}

export default async function Page() {
  return (
    <main className="w-full h-full flex justify-center items-start min-h-screen flex-col pt-5 px-5 sm:px-16 py-8 gap-16">
      <Collaborators />
      <ServicePreview />
      <ServiceList data={services} />
      <Testimonial />
      <ChooseUs />
      <div className="w-full flex flex-col gap-1">
        <SectionHeader name={"About Us"} />
        <AboutUs />
      </div>
      <StepByStepGuide />
      <div className="w-full flex flex-col gap-3">
        <SectionHeader name={"Articles & News"} />
        <NewsList />
      </div>
      <FAQ />
    </main>
  );
}
