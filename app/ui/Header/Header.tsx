"use client";

import Logo from "@/app/ui/Components/Logo";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Footer from "@/app/ui/Footer/Footer";
import { global } from "@/app/data/globals";
import {
  APP_FACEBOOK_URL,
  APP_INSTAGRAM_URL,
  APP_SERVICE_EMAIL,
  APP_WHATSAPP_NUMBER,
} from "@/app/constants";
import { MdOutlineAlternateEmail } from "react-icons/md";

const headerRoutes = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/#news" },
  { name: "Contact", path: "/contact" },
];

export default function Header({
  primaryColor = "white",
}: {
  primaryColor?: string;
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const textColorClass = `text-${primaryColor}`;
  const bgColorClass = `bg-${primaryColor}`;
  const pathname = usePathname();

  return (
    <div
      className={`w-full h-fit justify-between inline-flex text-sm ${textColorClass} sm:px-8`}
    >
      <div className="w-full h-fit p-5 pb-3 flex-col justify-between items-start inline-flex">
        <div className="w-full inline-flex">
          <div className="hidden w-full md:inline-flex items-center">
            <Link
              href={APP_INSTAGRAM_URL ?? ""}
              target="_blank"
              className={`p-1.5 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}
            >
              <FaInstagram size={15} />
            </Link>
            <Link
              href={APP_FACEBOOK_URL ?? ""}
              target="_blank"
              className={`p-1.5 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}
            >
              <LuFacebook size={15} />
            </Link>
            <Link
              href={`mailto:${APP_SERVICE_EMAIL}`}
              target="_blank"
              className={`p-1.5 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}
            >
              <MdOutlineAlternateEmail size={15} />
            </Link>
            <Link
              href={`tel:${APP_WHATSAPP_NUMBER}`}
              target="_blank"
              className={`p-1.5 items-center cursor-pointer ${textColorClass} hover:text-textHoverOnDark`}
            >
              <FiPhone size={15} />
            </Link>
          </div>
          <div className="w-full inline-flex justify-start items-center">
            <Logo />
          </div>
          <div className="hidden w-full sm:inline-flex justify-end items-start gap-8">
            {headerRoutes.map((route, index) => (
              <Link
                key={index}
                href={route.path}
                onClick={() => setIsNavOpen(false)}
                className="pt-4 flex-col justify-start items-center gap-2 inline-flex relative"
              >
                {pathname?.split("/")[1] === route.path?.split("/")[1] ||
                (pathname?.startsWith("/services") &&
                  route.path === "/#services") ? (
                  <>
                    <div className="font-bold">{route.name}</div>
                    <div
                      className={`bottom-1 w-1.5 h-1.5 ${bgColorClass} rounded-full`}
                    />
                  </>
                ) : (
                  route.name
                )}
              </Link>
            ))}
          </div>
          <div className="inline-flex sm:hidden">
            <label className="hamburger">
              <input
                type="checkbox"
                checked={isNavOpen}
                onChange={() => setIsNavOpen(!isNavOpen)}
                id="navbar-checkbox"
              />
              <svg viewBox="0 0 32 32">
                <path
                  className={
                    "line line-top-bottom " +
                    `${primaryColor === "white" ? null : "line-black"}`
                  }
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path
                  className={
                    "line " +
                    `${primaryColor === "white" ? null : "line-black"}`
                  }
                  d="M7 16 27 16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      {isNavOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex w-full">
          <div className="h-full w-4/5">
            <Footer siteDescription={global.siteDescription} />
          </div>
          <div
            className="flex-1 bg-red-500 bg-opacity-0"
            onClick={() => setIsNavOpen(false)}
          ></div>
        </div>
      )}
    </div>
  );
}
