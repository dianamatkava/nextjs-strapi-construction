import ImageContainer from "@/app/ui/Components/ImageContainer";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import HeaderH2 from "@/app/ui/Components/HeaderH2";
import HeaderH1 from "../Components/HeaderH1";

export default function NewsPageHeader({
  title,
  date,
  time,
  image,
  tag,
}: {
  title: string;
  date: string;
  time: string;
  image: string;
  tag: string;
}) {
  return (
    <div className="w-full flex-col justify-center items-center gap-8 inline-flex font-['Plus Jakarta Sans']">
      <div className="w-full flex-col justify-center items-center gap-2 flex">
        <div className="w-fit inline-flex items-center justify-center">
          <SectionHeader name={tag} />
        </div>
        <div className="flex-col justify-start items-center gap-[15px] flex">
          <HeaderH1
            title={title}
            className={"max-w-[600px] text-center items-center justify-center"}
          />
          <div className="justify-center items-center gap-2.5 inline-flex">
            <div className="w-fit text-center text-[#595959] text-xs font-medium">
              {date}
            </div>
            <div className="w-2 h-2 bg-[#e1e1eb] rounded-3xl" />
            <div className="w-fit text-center text-[#595959] text-xs font-medium">
              {time}
            </div>
          </div>
        </div>
      </div>
      <ImageContainer src={image} alt={title} className={"!h-[350px]"} />
    </div>
  );
}
