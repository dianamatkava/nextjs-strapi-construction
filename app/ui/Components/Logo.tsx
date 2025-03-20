import Link from "next/link";
import LogoSVG from "./LogoSVG";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href={"/"}
      className={`w-full h-fit justify-center items-center inline-flex cursor-pointer ${className}`}
    >
      <LogoSVG />
      <div className="text-sm font-normal text-nowrap font-['Anta']">
        Otter Water
      </div>
    </Link>
  );
}
