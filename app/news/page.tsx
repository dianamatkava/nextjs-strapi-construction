import ChooseUs from "@/app/ui/Steps/ChooseUs";
import FAQ from "@/app/ui/FAQ/FAQ";
import NewsPage from "@/app/ui/News/NewsPage";

export default function Page () {
  return (
    <div className={'w-full flex flex-col gap-12'}>
      <NewsPage/>
      <ChooseUs/>
      <FAQ/>
    </div>
  )
}