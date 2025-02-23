import NewsPageHeader from "@/app/ui/News/NewsPageHeader";
import NewsPageContentTable from "@/app/ui/News/NewsPageContentTable";
import NewsPageContentBlock from "@/app/ui/News/NewsPageContentBlock";

export default function NewsPage () {
  return (
    <div className={'w-full flex flex-col items-center justify-center gap-16'}>
      <NewsPageHeader/>
      <div className={'w-full inline-flex items-start justify-between gap-12 px-16'}>
        <div className={'w-1/5 flex flex-col items-center justify-center gap-8'}>
          <NewsPageContentTable/>
        </div>
        <div className={'w-3/5 flex flex-col items-center justify-center gap-8'}>
          <NewsPageContentBlock/>
          <NewsPageContentBlock/>
        </div>
      </div>
    </div>
  )
}