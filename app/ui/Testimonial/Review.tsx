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
    <div className="review-card w-[22rem] h-fit min-h-[11rem] p-3 rounded-md border border-[#eaeaea] flex-col justify-center items-start gap-3 inline-flex">
      <div className="w-full justify-between items-center gap-3 inline-flex">
        <Profile name={name} title={service} />
        <StartRating rating={rating} />
      </div>
      <div className="w-fit text-black text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
        {review}
      </div>
    </div>
  );
}
