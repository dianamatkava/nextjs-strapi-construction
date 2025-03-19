import Link from "next/link";

export default function CTAPrimary({
  title = "Contact",
  className,
  link,
}: {
  title?: string;
  className?: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className={
        "w-[160px] h-[45px] rounded-[40px] border justify-center items-center gap-2.5 flex hover:text-white hover:border-[#FE7800] hover:bg-[#FE7800]" +
        ` ${className}`
      }
    >
      <div className="w-fit text-sm font-semibold font-['Plus Jakarta Sans']">
        {title}
      </div>
    </Link>
  );
}
