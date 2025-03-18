import HeaderH1 from "@/app/ui/Components/HeaderH1";
import React from "react";
import AnimatedImage from "../Components/AnimatedImage";

export default function ContentImageBlock({
  title,
  description,
  body,
  img,
}: {
  title: string;
  description: string;
  body: Array<any> | string;
  img: string;
}) {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-5 inline-flex">
      <div className="w-full flex-col justify-start items-center flex">
        <HeaderH1
          title={title}
          className={"text-center items-center justify-center"}
        />
        <div className="self-stretch text-center text-[#595959] text-sm font-normal font-['Plus Jakarta Sans']">
          {description}
        </div>
      </div>
      <div className="w-full h-full justify-between items-center flex flex-col sm:flex-row gap-8 relative">
        <div className="w-full sm:w-1/2 relative">
          <AnimatedImage src={img} alt="Service Image" className="h-[200px]" />
        </div>

        <div className="w-full sm:w-1/2 flex px-4 flex-col text-black text-sm font-normal font-['Plus Jakarta Sans'] gap-3">
          {typeof body === "string" ? (
            <div
              className="w-full"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          ) : (
            body.map((paragraph: string, index: number) => (
              <div className="w-full" key={index}>
                {paragraph}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
