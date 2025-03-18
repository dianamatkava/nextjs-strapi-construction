"use client";
import { usePathname } from "next/navigation";
import HeroHeader from "@/app/ui/Header/HeroHeader";
import Header from "@/app/ui/Header/Header";

export default function AppHeader({
  siteDescription,
  siteSlogan,
  siteReview,
}: {
  siteDescription: string;
  siteSlogan: string;
  siteReview: string;
}) {
  const pathname = usePathname();
  if (pathname == "/") {
    return (
      <HeroHeader
        siteSlogan={siteSlogan}
        siteDescription={siteDescription}
        siteReview={siteReview}
      />
    );
  }

  return <Header primaryColor={"black"} />;
}
