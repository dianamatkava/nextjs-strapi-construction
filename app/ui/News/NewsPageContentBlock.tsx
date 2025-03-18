import HeaderH1 from "@/app/ui/Components/HeaderH1";

interface NewsPageContentBlockProps {
  id: string;
  title?: string;
  description: string;
}

export default function NewsPageContentBlock({
  id,
  title,
  description,
}: NewsPageContentBlockProps) {
  return (
    <div
      id={id}
      className="w-full flex-col justify-start items-start gap-4 inline-flex scroll-mt-24"
    >
      {title && (
        <div className="w-fit text-black text-2xl font-medium font-['Plus Jakarta Sans']">
          {title}
        </div>
      )}
      <div
        className="self-stretch text-[#595959] text-base font-normal font-['Plus Jakarta Sans']"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
