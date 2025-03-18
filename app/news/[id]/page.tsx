import ChooseUs from "@/app/ui/Steps/ChooseUs";
import FAQ from "@/app/ui/FAQ/FAQ";
import NewsPage from "@/app/ui/News/NewsPage";
import { notFound } from "next/navigation";
import { news } from "@/app/data/news";
export default function Page({ params }: { params: { id: string } }) {
  const newsItem = news.find((news) => news.id === parseInt(params.id));
  if (!newsItem) {
    return notFound();
  }
  return (
    <div className={"w-full flex flex-col gap-12"}>
      <NewsPage
        title={newsItem.title}
        date={newsItem.date}
        time={newsItem.time}
        image={newsItem.image}
        tag={newsItem.tag}
        body={newsItem.body}
      />
      <ChooseUs />
      <FAQ />
    </div>
  );
}
