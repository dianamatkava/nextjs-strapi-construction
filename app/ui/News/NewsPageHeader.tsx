import ImageContainer from "@/app/ui/Components/ImageContainer";
import SectionHeader from "@/app/ui/Components/SectionHeader";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function NewsPageHeader () {
  return (
    <div className="w-full flex-col justify-center items-center gap-8 inline-flex font-['Plus Jakarta Sans']">
      <div className="w-full flex-col justify-center items-center gap-2 flex">
        <div className="w-fit inline-flex items-center justify-center"><SectionHeader name={"Article"}/></div>
        <div className="flex-col justify-start items-center gap-[15px] flex">
          <HeaderH1 title={'Steps to Perform in Case of Water Damage'} className={'max-w-[500px] text-center items-center justify-center'}/>
          <div className="justify-center items-center gap-2.5 inline-flex">
            <div
              className="w-fit text-center text-[#595959] text-xs font-medium">08
              February 2024
            </div>
            <div className="w-2 h-2 bg-[#e1e1eb] rounded-3xl"/>
            <div
              className="w-fit text-center text-[#595959] text-xs font-medium"> 12:45
              AM
            </div>
          </div>
        </div>
      </div>
      <ImageContainer src={'/News.jpeg'} alt={'News'} className={'!h-[350px]'}/>
    </div>
  )
}