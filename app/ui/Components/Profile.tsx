export default function Profile({
  name,
  title,
  mode = "light",
}: {
  name: string;
  title: string;
  mode?: string;
}) {
  const initial = name.split(" ")[0][0] + name.split(" ")[1][0];

  return (
    <div className="justify-start items-center gap-3 inline-flex">
      <div className="w-12 h-12 flex-shrink-0 relative">
        <div className="w-full h-full bg-[#d9d9d9] rounded-full flex items-center justify-center">
          <span className="text-white text-md font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {initial}
          </span>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="w-full justify-center items-center gap-3 inline-flex">
          <div
            className={
              "w-full whitespace-nowrap text-sm font-semibold font-['Plus Jakarta Sans'] tracking-tight " +
              `${mode == "dark" ? "text-white" : "text-black"}`
            }
          >
            {name}
          </div>
        </div>
        <div
          className={
            "text-xs font-medium font-['Plus Jakarta Sans'] " +
            `${mode == "dark" ? "text-[#e4e4e4]" : "text-black"}`
          }
        >
          {title}
        </div>
      </div>
    </div>
  );
}
