import BackButton from "@/app/ui/Components/BackButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <div className="w-full h-full flex justify-center items-start flex-col pt-5 px-5 sm:px-16 py-8 gap-3">
      <div className="w-full h-full flex justify-center items-start flex-col">
        {children}
      </div>
    </div>
  );
}