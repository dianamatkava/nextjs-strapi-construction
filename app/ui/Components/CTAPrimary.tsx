import Link from "next/link";

export default function CTAPrimary({
  title = "Contact",
  className,
  link,
  type = "button",
  disabled = false,
}: {
  title?: string;
  className?: string;
  link?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  return (
    <>
      {link ? (
        <Link
          href={link}
          className={
            "w-[160px] h-[45px] rounded-[40px] border justify-center items-center gap-2.5 flex hover:text-white hover:border-[#FE7800] hover:bg-[#FE7800]" +
            ` ${className}`
          }
        >
          <button className="w-fit text-sm font-semibold font-['Plus Jakarta Sans']">
            {title}
          </button>
        </Link>
      ) : (
        <div className="w-fit text-sm font-semibold font-['Plus Jakarta Sans']">
          <button
            disabled={disabled}
            type={type}
            className={
              "w-[160px] h-[45px] rounded-[40px] border justify-center items-center gap-2.5 flex hover:text-white hover:border-[#FE7800] hover:bg-[#FE7800]" +
              ` ${className}`
            }
          >
            {disabled ? "Sending..." : title}
          </button>
        </div>
      )}
    </>
  );
}
