import NewsListItem from "@/app/ui/News/NewsListItem";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function NewsList () {
  return (
    <div className="w-full flex-col justify-start items-start gap-[21px] inline-flex">
      <HeaderH1 title={'Read our Latest News'}/>
      <div className="w-full h-fit flex flex-col self-stretch justify-start items-center gap-2">
        <div className="w-full h-fit flex flex-col md:flex-row md:inline-flex self-stretch justify-start items-center gap-2">
          <NewsListItem/>
          <NewsListItem/>
          <NewsListItem/>
        </div>
        <div className="hidden w-full h-fit md:inline-flex self-stretch justify-start items-center gap-2">
          <NewsListItem/>
          <NewsListItem/>
          <NewsListItem/>
          <NewsListItem/>
        </div>
      </div>
    </div>
  )
}