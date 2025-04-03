"use client";

import { FiInstagram, FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Link from "next/link";
import SubscribeForm from "@/app/ui/ContactUs/SubscribeForm";
import Logo from "@/app/ui/Components/Logo";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import CTAGroup from "@/app/ui/Components/CTAGroup";
import { services } from "@/app/data/services";
import { useEnv } from "@/app/hooks/useEnv";

export default function Footer({
  siteDescription,
}: {
  siteDescription: string;
}) {
  const env = useEnv();
  return (
    <div className="h-full bg-[#0e1518]/85 relative w-full sm:w-[calc(100%-2rem)] from-black via-black to-black m-0 sm:mx-4 sm:pt-[62px] sm:rounded-tl-3xl sm:rounded-tr-3xl flex-col justify-start items-center gap-3 inline-flex font-['Plus Jakarta Sans']">
      <Image
        src="/Header.jpg"
        alt="Header Background"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 -z-10 rounded-[inherit]"
      />
      <div className="self-stretch flex-col justify-start items-center gap-8 hidden sm:flex">
        <div className="w-full max-w-[700px] px-5 text-center text-white text-5xl font-normal leading-18">
          Get comprehensive Solution for Repair Services
        </div>
        <CTAGroup primaryButtonLink={"/contact"} mode="dark" />
      </div>
      <div className="w-full h-full self-stretch px-5 md:px-10 flex-col justify-between items-start flex text-md">
        <div className="self-stretch grow shrink basis-0 pt-2.5 pb-10 border-b border-black flex items-start gap-8 flex-nowrap">
          <div className="grow h-full justify-start items-center gap-6 sm:gap-12 flex flex-col sm:flex-row">
            <div className="w-full h-full flex-col sm:w-[350px] justify-start items-start gap-8 inline-flex">
              <div className="text-white flex-col justify-start items-start gap-4 inline-flex pt-5">
                <Logo />
                <div className="text-[#f5efe7] text-sm">{siteDescription}</div>
                <div className="text-[#828181] text-sm">
                  Serving in San Diego, CA
                </div>
              </div>
              <div className="self-stretch h-[58px] justify-start items-center gap-5 inline-flex">
                <div className="inline-flex justify-center items-center gap-4">
                  <Link
                    href={env.instagramUrl || ""}
                    target="_blank"
                    className="justify-start items-start rounded-[50px] border border-[#2a2a2a] bg-white/5 p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0] hover:bg-white/10"
                  >
                    <FiInstagram width={24} />
                  </Link>
                  <Link
                    href={env.facebookUrl || ""}
                    target="_blank"
                    className="justify-start items-start rounded-[50px] border border-[#2a2a2a] bg-white/5 p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0] hover:bg-white/10"
                  >
                    <FaFacebookF width={24} />
                  </Link>
                  <Link
                    href={`mailto:${env.serviceEmail}`}
                    target="_blank"
                    className="justify-start items-start rounded-[50px] border border-[#2a2a2a] bg-white/5 p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0] hover:bg-white/10"
                  >
                    <MdOutlineAlternateEmail width={24} />
                  </Link>
                  <Link
                    href={`tel:${env.phoneNumber}`}
                    target="_blank"
                    className="justify-start items-start rounded-[50px] border border-[#2a2a2a] bg-white/5 p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0] hover:bg-white/10"
                  >
                    <FiPhone width={24} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full h-full mt-[55px] md:mt-[105px] flex justify-start items-start gap-8 md:gap-12 w-full sm:w-fit">
              <div className="flex-col justify-start items-start gap-4 sm:gap-4 inline-flex">
                <div className="self-stretch text-white text-md font-bold text-nowrap">
                  Services
                </div>
                <div className="sm:w-full max-w-[180px] grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.id}`}
                      className="w-fit text-[#f5efe7] text-sm cursor-pointer hover:text-[#828181]"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex gap-4 sm:gap-4">
                <div className="self-stretch text-white text-md font-bold">
                  Links
                  <br />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                  <Link
                    href="/#services"
                    className="w-fit text-[#f5efe7] text-sm cursor-pointer hover:text-[#828181]"
                  >
                    Services
                  </Link>
                  <Link
                    href="/#news"
                    className="w-fit text-[#f5efe7] text-sm cursor-pointer hover:text-[#828181]"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    className="w-fit text-[#f5efe7] text-sm cursor-pointer hover:text-[#828181]"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="w-fit text-[#f5efe7] text-sm cursor-pointer hover:text-[#828181]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline-flex flex-col justify-start items-start gap-4 sm:gap-8 w-1/4 py-[25px] flex-shrink-0">
            <div className="text-white text-md font-bold text-nowrap">
              Lets get Started
            </div>
            <SubscribeForm />
          </div>
        </div>
        <div className="w-full inline-flex pt-4 pb-2.5 border-t border-neutral-700 justify-between items-center text-sm">
          <div className="text-[#e2e2e2] text-xs font-normal">
            © 2025 All Rights Reserved | San Diego, CA
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/privacypolicy"
              className="text-xs text-[#e2e2e2] font-normal hover:text-[#f5efe7] transition-colors text-nowrap"
            >
              Privacy Policy
            </Link>
            <span className="text-[#e2e2e2]">|</span>
            <Link
              href="/termsofuse"
              className="text-xs text-[#e2e2e2] font-normal hover:text-[#f5efe7] transition-colors text-nowrap"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
