export default function HeaderH1({
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
      <h1
        className={
          "w-fit text-center text-black font-['Plus Jakarta Sans'] leading-[43px] " +
          `${className}`
        }
      >
        {title}
      </h1>
    </div>
  );
}
