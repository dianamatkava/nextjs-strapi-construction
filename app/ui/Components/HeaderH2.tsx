export default function HeaderH2({
  title,
  className,
  id,
}: {
  title: string;
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={
        "w-full justify-start items-start text-xxlg inline-flex " +
        ` ${className}`
      }
      id={id}
    >
      <h2
        className={
          "w-fit text-center text-black font-['Plus Jakarta Sans'] leading-[43px] " +
          `${className}`
        }
      >
        {title}
      </h2>
    </div>
  );
}
