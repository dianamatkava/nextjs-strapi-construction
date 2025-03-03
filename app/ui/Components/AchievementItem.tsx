export default function AchievementItem ({title, score}: {title: string, score: string}) {
  return (
    <div className="h-15 w-fit flex-col justify-start items-center gap-3 inline-flex">
      <div
        className="items-start text-center text-black text-xxlg font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">{score}
      </div>
      <div
        className="items-center !text-nowrap self-stretch text-center text-black text-xs font-normal font-['Plus Jakarta Sans']">{title}
      </div>
    </div>
  )
}