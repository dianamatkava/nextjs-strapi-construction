import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

export default function FAQQuestion({
  id,
  question,
  answer,
  isOpen,
  setIsOpen,
}: {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  setIsOpen: (id: number | null) => void;
}) {
  return (
    <div className="w-full flex flex-col pt-3 pb-2 px-1 border-b border-[#e1e1eb] justify-center items-start gap-3">
      <div className="w-full justify-between items-center gap-4 inline-flex">
        <div className={`"text-black text-md " + ${isOpen && "font-bold"}`}>
          {question}
        </div>
        {isOpen ? (
          <div
            className={"p-4 w-fit flex text-gray-600"}
            onClick={() => setIsOpen(null)}
          >
            <FaAngleUp size={16} />
          </div>
        ) : (
          <div
            className={"p-4 w-fit flex cursor-pointer hover:text-gray-400"}
            onClick={() => setIsOpen(id)}
          >
            <FaAngleDown size={16} />
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="text-sm text-gray-600"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}
