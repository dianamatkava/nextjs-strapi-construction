import HeaderH2 from "@/app/ui/Components/HeaderH2";
import GetInTouchItem from "@/app/ui/ContactUs/GetInTouchItem";
import { MdAlternateEmail } from "react-icons/md";
import React from "react";
import { LuPhone } from "react-icons/lu";
import { useEnv } from "@/app/hooks/useEnv";
export default function GetInTouch() {
  const env = useEnv();
  return (
    <div className="w-full h-fit flex-col justify-start items-start gap-12 inline-flex py-5">
      <div className="w-full max-w-[500px] h-fit flex-col justify-center items-start gap-4 inline-flex">
        <HeaderH2 title={"Get in Touch"} />
        <div className="text-[#595959] text-sm font-normal font-['Plus Jakarta Sans']">
          We're here to help with any questions or concerns about water damage,
          restoration or remodeling. We operate in San Diego and surrounding
          areas. Reach out by phone or email, and we'll guide you toward the
          best solutions for your property.
        </div>
      </div>
      <div className="w-full h-fit justify-start items-start gap-12 inline-flex flex-wrap">
        <GetInTouchItem
          link={`tel:${env.phoneNumber}`}
          title={"Call us"}
          description={"Mon-Fri from 8am to 5pm"}
          value={env.phoneNumber || ""}
        >
          <div className="w-fit flex justify-center items-center p-1 border rounded-md">
            <LuPhone size={14} />
          </div>
        </GetInTouchItem>
        <GetInTouchItem
          link={`mailto:${env.serviceEmail}`}
          title={"Chat to us"}
          description={"Our friendly team is here to help. "}
          value={env.serviceEmail || ""}
        >
          <div className="w-fit flex justify-center items-center p-1 border rounded-md">
            <MdAlternateEmail size={14} />
          </div>
        </GetInTouchItem>
        {/* <GetInTouchItem
          title={"Visit us"}
          description={"Mon-Fri from 8am to 5pm"}
          value={env.phoneNumber || ""}
        >
          <div className="w-fit flex justify-center items-center p-1 border rounded-md">
            <MdAlternateEmail size={14} />
          </div>
        </GetInTouchItem> */}
      </div>
    </div>
  );
}
