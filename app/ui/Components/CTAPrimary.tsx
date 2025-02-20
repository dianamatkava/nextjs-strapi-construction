import Link from "next/link";

export default function CTAPrimary ({title='Contact', className}: {title?: string, className?: string}) {
  return (
    <Link href={'/#contact'}
      className={"w-[110px] h-[45px] rounded-[40px] border justify-center items-center gap-2.5 flex" + ` ${className}`}>
      <div className="w-fit text-sm font-semibold font-['Plus Jakarta Sans']">{title}</div>
    </Link>
  )
}