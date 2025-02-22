import AchievementItem from "@/app/ui/Components/AchievementItem";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function ServiceListHeader () {
  return (
    <div className="w-full h-fil flex-col justify-center items-center gap-5 inline-flex">
      <HeaderH1 title={"Some of our services"}/>
      <div className="justify-center items-center gap-4 sm:gap-12 inline-flex">
        <AchievementItem key={1} title={'Availability'} score={'24/7'}/>
        <AchievementItem key={3} title={'Response Time'} score={'4h'}/>
        <AchievementItem key={2} title={'Certifications'} score={'11'}/>
        <AchievementItem key={4} title={'Satisfied Clients'} score={'98%'}/>
      </div>
    </div>
  )
}