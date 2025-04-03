import React from "react";
import Link from "next/link";

export default function GetInTouchItem({
  title,
  description,
  value,
  link,
  children,
}: {
  title: string;
  description: string;
  value: string;
  link: string;
  children: React.ReactElement;
}) {
  return (
    <div className="w-fit h-fit justify-start items-start gap-4 inline-flex">
      {children}
      <div className="w-full flex-col justify-start items-start inline-flex gap-1">
        <div className="self-stretch text-black text-sm font-bold font-['Plus Jakarta Sans']">
          {title}
        </div>
        <div className="self-stretch text-[#595959] text-sm font-normal font-['Plus Jakarta Sans']">
          {description}
        </div>
        <Link
          href={link}
          className="self-stretch text-black text-sm font-semibold font-['Plus Jakarta Sans'] underline"
        >
          {value}
        </Link>
      </div>
    </div>
  );
}
