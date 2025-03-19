interface NewsPageContentTableProps {
  items: Array<{
    id: number;
    title?: string;
    description: string;
  }>;
  activeItem: number;
  onItemClick: (id: number) => void;
}

export default function NewsPageContentTable({
  items,
  activeItem,
  onItemClick,
}: NewsPageContentTableProps) {
  return (
    <div className="w-full min-w-[250px] h-fit justify-start items-start inline-flex">
      <div className="w-fit flex-col justify-start items-start gap-2.5 inline-flex relative border-l-[3px]">
        {items.map(
          (item) =>
            item.title && (
              <div
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={`relative z-10 cursor-pointer py-1 px-5 self-stretch text-sm justify-center items-center gap-2.5 inline-flex w-full
                ${
                  activeItem === item.id
                    ? "border-l-[3px] ml-[-3px] border-blue-500"
                    : ""
                }`}
              >
                <div className="w-full text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[25px]">
                  {item.title}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
