import NewsItem from "@/app/ui/News/NewsItem";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function News () {
  return (
    <div className="w-full flex-col justify-start items-start gap-[21px] inline-flex">
      <HeaderH1 title={'Read our Latest News'}/>
      <div className="w-full h-fit flex flex-col self-stretch justify-start items-center gap-2">
        <div className="w-full h-fit inline-flex self-stretch justify-start items-center gap-2">
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
        </div>
        <div className="w-full h-fit inline-flex self-stretch justify-start items-center gap-2">
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
        </div>
      </div>
    </div>
  )
}