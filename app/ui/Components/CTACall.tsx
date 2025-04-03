"use client";
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { useEnv } from "@/app/hooks/useEnv";

export default function CTACall({ className }: { className?: string }) {
  const env = useEnv();
  return (
    <Link
      href={`tel:${env.phoneNumber}`}
      className={
        "flex items-center justify-center w-[45px] h-[45px] border-2 rounded-3xl cursor-pointer hover:border-textHoverOnDark hover:text-textHoverOnDark" +
        ` ${className}`
      }
    >
      <LuPhone size={18} />
    </Link>
  );
}
