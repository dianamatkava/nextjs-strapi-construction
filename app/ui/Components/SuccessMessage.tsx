import { motion } from "framer-motion";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function SuccessMessage({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-md mx-auto p-4 bg-white border border-gray-200 rounded-lg"
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <IoCheckmarkCircle className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <p className="mt-0.5 text-sm text-gray-600">{message}</p>
        </div>
      </div>
    </motion.div>
  );
}
