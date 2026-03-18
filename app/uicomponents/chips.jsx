import { FaPaintBrush } from "react-icons/fa";

export default function BasicChip() {
  return (
    <div className="size-48  shadow bg-indigo-300 mx-auto relative ">
      {/* chip */}
      <div className="bg-indigo-800 w-fit px-4 py-1 rounded-full absolute top-1 right-1 text-sm text-white flex items-center gap-2">
        Indigo-300
        <div className="bg-indigo-900 p-2 rounded-full">
          <FaPaintBrush size={8} />
        </div>
      </div>
    </div>
  );
}
