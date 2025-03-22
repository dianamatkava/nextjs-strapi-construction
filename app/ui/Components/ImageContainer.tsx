import Image from "next/image";

export default function ImageContainer({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full sm:h-[400px] rounded-lg relative p-4 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 rounded-[inherit]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          style={{ objectFit: "cover" }}
          className="rounded-[inherit]"
        />
      </div>
    </div>
  );
}
