"use client";
import NewsPageHeader from "@/app/ui/News/NewsPageHeader";
import NewsPageContentTable from "@/app/ui/News/NewsPageContentTable";
import NewsPageContentBlock from "@/app/ui/News/NewsPageContentBlock";
import { useState, useEffect } from "react";

export default function NewsPage({
  title,
  date,
  time,
  image,
  tag,
  body,
}: {
  title: string;
  date: string;
  time: string;
  image: string;
  tag: string;
  body: Array<{
    id: number;
    title?: string;
    description: string;
  }>;
}) {
  const [activeItem, setActiveItem] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id);
            setActiveItem(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    body.forEach((item) => {
      const element = document.getElementById(item.id.toString());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [body]);

  const scrollToSection = (id: number) => {
    const element = document.getElementById(id.toString());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveItem(id);
    }
  };

  return (
    <div className={"w-full flex flex-col items-center justify-center gap-16"}>
      <NewsPageHeader
        title={title}
        date={date}
        time={time}
        image={image}
        tag={tag}
      />
      <div
        className={
          "w-full inline-flex items-start justify-between gap-8 sm:px-12 px-0"
        }
      >
        <div
          className={
            "w-1/5 hidden sm:flex flex-col items-start justify-start gap-8 sticky top-24"
          }
        >
          <NewsPageContentTable
            items={body}
            activeItem={activeItem}
            onItemClick={scrollToSection}
          />
        </div>
        <div
          className={
            "w-full sm:w-3/5 flex flex-col items-start justify-start gap-8"
          }
        >
          {body.map((item) => (
            <NewsPageContentBlock
              key={item.id}
              id={item.id.toString()}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
