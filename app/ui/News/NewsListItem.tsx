import Image from "next/image";
import Link from "next/link";

interface NewsItemProps {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  tag: string;
}

export default function NewsListItem({
  id,
  title,
  date,
  time,
  image,
  tag,
}: NewsItemProps) {
  return (
    <Link
      href={`/news/${id}`}
      className="w-full h-48 hover:bg-gray-700/10 bg-black/40 px-5 py-3 rounded-xl flex-col justify-between items-start inline-flex relative"
    >
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 -z-10 rounded-[inherit]"
      />
      <div className="bg-white/20 px-3 py-1 rounded-xl justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-xs font-medium font-['Plus Jakarta Sans']">
          {tag}
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch text-white text-lg font-medium font-['Plus Jakarta Sans'] leading-6 cursor-pointer hover:text-textHoverOnDark">
          {title}
        </div>
        <div className="justify-center items-center gap-[5px] inline-flex">
          <div className="text-[#dcdcdc] text-xs font-medium font-['Plus Jakarta Sans']">
            {date}
          </div>
          <div className="w-[9px] h-[9px] bg-[#e1e1eb] rounded-[35px]" />
          <div className="text-center text-[#dcdcdc] text-xs font-medium font-['Plus Jakarta Sans']">
            {time}
          </div>
        </div>
      </div>
    </Link>
  );
}
