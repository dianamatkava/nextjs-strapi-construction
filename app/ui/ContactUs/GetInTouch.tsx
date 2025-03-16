import HeaderH1 from "@/app/ui/Components/HeaderH1";
import GetInTouchItem from "@/app/ui/ContactUs/GetInTouchItem";
import { MdAlternateEmail } from "react-icons/md";
import React from "react";

export default function GetInTouch() {
  return (
    <div className="w-full h-fit flex-col justify-start items-start gap-12 inline-flex py-5">
      <div className="w-full max-w-[350px] h-fit flex-col justify-center items-start gap-4 inline-flex">
        <HeaderH1 title={"Get in Touch"} />
        <div className="text-[#595959] text-sm font-normal font-['Plus Jakarta Sans']">
          We’re here to help with any questions or concerns about water damage,
          restoration, or remodeling. Reach out by phone or email, and we’ll
          guide you toward the best solutions for your property.
        </div>
      </div>
      <div className="w-full h-fit justify-start items-start gap-12 inline-flex flex-wrap">
        <GetInTouchItem
          title={"Call us"}
          description={"Mon-Fri from 8am to 5pm"}
          value={"+1 747 295-5409"}
        >
          <div className="w-fit flex justify-center items-center p-1 border rounded-md">
            <MdAlternateEmail size={14} />
          </div>
        </GetInTouchItem>
        <GetInTouchItem
          title={"Chat to us"}
          description={"Our friendly team is here to help. "}
          value={"info@otterwater.io"}
        >
          <div className="w-fit flex justify-center items-center p-1 border rounded-md">
            <MdAlternateEmail size={14} />
          </div>
        </GetInTouchItem>
        <GetInTouchItem
          title={"Call us"}
          description={"Mon-Fri from 8am to 5pm"}
          value={"+1 747 295-5409"}
        >
          <div className="w-fit flex justify-center items-center p-1 border rounded-md">
            <MdAlternateEmail size={14} />
          </div>
        </GetInTouchItem>
      </div>
    </div>
  );
}
