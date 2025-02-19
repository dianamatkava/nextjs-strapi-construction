import SectionHeader from "@/app/ui/Components/SectionHeader";
import HeaderH1 from "@/app/ui/Components/HeaderH1";

export default function ServicePreview () {
  return (
    <div className="w-full h-fit flex-col justify-start items-center gap-5 inline-flex">
      <SectionHeader name={'Services'}/>
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 h-fit flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className='sm:w-1/2'>
            <HeaderH1 id={'whoAmI'} title={'I am professional Handymen with 11 years of experience'} className={'text-start'}/>
          </div>
          <div className="sm:w-1/2 text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">Contrary to
            popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney.
          </div>
        </div>
      </div>
    </div>
)
}