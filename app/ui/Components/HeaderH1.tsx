export default function HeaderH1 ({title, className, id}: {title: string; className?: string, id?: string}) {
  return (
    <div className={"w-full justify-start items-start inline-flex " + ` ${className}`} id={id}>
      <div className={"w-fit text-center text-black text-xxlg font-['Plus Jakarta Sans'] leading-[48px] " + `${className}`}>{title}
      </div>
    </div>
  )
}