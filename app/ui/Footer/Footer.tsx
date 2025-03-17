import { FiInstagram, FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Link from "next/link";
import SubscribeForm from "@/app/ui/ContactUs/SubscribeForm";
import Logo from "@/app/ui/Components/Logo";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import CTAGroup from "@/app/ui/Components/CTAGroup";
import { services } from "@/app/data/services";

export default function Footer({ data }: SiteData) {
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
      <div className="w-full h-full self-stretch px-5 md:px-10 md:px-20 flex-col justify-between items-start flex text-md">
        <div className="self-stretch grow shrink basis-0 pt-2.5 pb-10 border-b border-black justify-between items-start inline-flex flex-wrap">
          <div className="w-fit justify-start items-center gap-6 sm:gap-12 flex flex-col sm:flex-row">
            <div className="flex-col sm:w-[350px] justify-start items-start gap-8 inline-flex">
              <div className="flex-col justify-start items-start text-[#828181] gap-4 inline-flex pt-5">
                <Logo />
                <div className="text-gray-400 text-sm">
                  {data.siteDescription}
                </div>
              </div>
              <div className="self-stretch h-[58px] justify-start items-center gap-5 inline-flex">
                <div className="inline-flex justify-center items-center gap-4">
                  <a
                    href="https://www.instagram.com/amesc_group"
                    className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]"
                  >
                    <FiInstagram width={24} />
                  </a>
                  <div className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                    <FaFacebookF width={24} />
                  </div>
                  <a
                    href={`mailto:'email@example.com'`}
                    className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]"
                  >
                    <MdOutlineAlternateEmail width={24} />
                  </a>
                  <a
                    href="tel:+17472955409"
                    className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]"
                  >
                    <FiPhone width={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start gap-12 md:gap-16 w-full sm:w-fit">
              <div className="flex-col justify-start items-start gap-4 sm:gap-4 inline-flex">
                <div className="self-stretch text-white text-md font-bold text-nowrap">
                  Services
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
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
          <div className="self-stretch w-1/4 py-[25px] flex-col justify-start items-start gap-4 sm:gap-8 hidden lg:inline-flex">
            <div className="text-white text-md font-bold text-nowrap">
              Lets get Started
            </div>
            <SubscribeForm />
          </div>
        </div>
        <div className="w-full inline-flex pt-4 pb-2.5 border-t border-neutral-700 justify-between items-center text-sm">
          <div className="text-[#e2e2e2] text-nowrap text-xs font-normal cursor-pointer hover:text-[#f5efe7]">
            © 2025 All Rights Reserved
          </div>
          <div className={"w-fit inline-flex gap-1 justify-end flex-wrap"}>
            <Link
              href="/privacypolicy"
              className="text-nowrap text-xs text-[#e2e2e2] font-normal cursor-pointer hover:text-[#f5efe7] w-fit text-end"
            >
              Privacy Policy
            </Link>
            <span className="text-[#e2e2e2] font-normal">|</span>
            <Link
              href="/termsofuse"
              className="text-nowrap text-xs text-[#e2e2e2] font-normal cursor-pointer hover:text-[#f5efe7] w-fit text-end"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
