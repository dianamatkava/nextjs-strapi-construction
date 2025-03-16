import StartRating from "@/app/ui/Components/StartRating";
import Profile from "@/app/ui/Components/Profile";

export default function Review({
  name,
  review,
  rating,
  image,
  service,
}: {
  name: string;
  review: string;
  rating: number;
  image: string;
  service: string;
}) {
  return (
    <div className="w-fit h-fit p-5 rounded-md border border-[#eaeaea] flex-col justify-center items-start gap-5 inline-flex">
      <div className="justify-start items-center gap-5 inline-flex">
        <Profile name={name} title={service} />
        <StartRating rating={rating} />
      </div>
      <div className="w-[350px] text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
        {review}
      </div>
    </div>
  );
}
