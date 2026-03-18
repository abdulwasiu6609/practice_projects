import { FaPaintBrush } from "react-icons/fa";

export default function BasicChip() {
  return (
    <div className="size-48  shadow bg-indigo-300 mx-auto relative ">
      <img
        src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/20/3330914/1.jpg?6044"
        alt=""
        className="w-full object-center"
      />
      {/* chip */}
      <div className="bg-indigo-800 w-fit px-4 py-1 rounded absolute top-1 right-1 text-sm text-white flex items-center gap-2">
        Techspance
        <div className="bg-indigo-900 p-2 rounded-full">
          <FaPaintBrush size={8} />
        </div>
      </div>
    </div>
  );
}
