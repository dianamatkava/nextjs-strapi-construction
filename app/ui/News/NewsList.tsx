import NewsListItem from "@/app/ui/News/NewsListItem";
import HeaderH1 from "@/app/ui/Components/HeaderH1";
import { news } from "@/app/data/news";

export default function NewsList() {
  const firstRowNews = news.slice(0, 3);
  const secondRowNews = news.slice(3, 7);

  return (
    <div
      className="w-full flex-col justify-start items-start gap-[21px] inline-flex"
      id="news"
    >
      <HeaderH1 title={"Read our Latest News"} />
      <div className="w-full h-fit flex flex-col self-stretch justify-start items-center gap-2">
        <div className="w-full h-fit flex flex-col md:flex-row md:inline-flex self-stretch justify-start items-center gap-2">
          {firstRowNews.map((item) => (
            <NewsListItem
              key={item.id}
              id={item.id}
              title={item.title}
              tag={item.tag}
              date={item.date}
              time={item.time}
              image={item.image}
            />
          ))}
        </div>
        <div className="hidden w-full h-fit md:inline-flex self-stretch justify-start items-center gap-2">
          {secondRowNews.map((item) => (
            <NewsListItem
              key={item.id}
              id={item.id}
              title={item.title}
              tag={item.tag}
              date={item.date}
              time={item.time}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
