import React from "react";

export default function SectionHeader({ name }: { name: string }) {
  return (
    <div className="w-full h-fit inline-flex">
      <div className="w-fit h-7 px-3 rounded-2xl border border-[#cfcfcf] justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-[#595959] text-xs font-bold font-['Plus Jakarta Sans']">
          {name}
        </div>
      </div>
    </div>
  );
}
