"use client";
import { usePathname } from "next/navigation";
import HeroHeader from "@/app/ui/Header/HeroHeader";
import Header from "@/app/ui/Header/Header";

export default function AppHeader ({data}: SiteData) {
  const pathname = usePathname();
  if (pathname == "/") {
    return (
      <HeroHeader data={data}/>
    );
  }

  return (
    <Header primaryColor={'black'}/>
  );
}