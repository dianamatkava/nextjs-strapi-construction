"use client";
import { motion } from "framer-motion";
import ImageContainer from "@/app/ui/Components/ImageContainer";

export default function AnimatedImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.div
      className="relative w-full h-full" // Container must have a defined size
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: [1, 1.05, 1] }}
      transition={{
        duration: 1.2,
        opacity: { duration: 0.4 },
        scale: { delay: 0.2, duration: 1 },
        ease: "easeInOut",
      }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <ImageContainer
        src={src}
        alt={alt}
        className={`rounded-lg ${className}`}
      />
    </motion.div>
  );
}
