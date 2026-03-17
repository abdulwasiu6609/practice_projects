import { IoMdSunny } from "react-icons/io";
export default function Papers() {
  return (
    // The Paper component is a container for displaying content on an elevated surface.
    <div className="paper size-48 bg-green-700  mx-auto  drop-shadow-lg drop-shadow-gray-50 flex p-4 flex-col items-center gap-5">
      <p className="bg-gray-300 p-4 rounded-full  text-2xl text-gray-700 text-center">
        <IoMdSunny />
      </p>
      <div className="text-gray-300 text-center">
        This is a paper with shadow{" "}
      </div>
    </div>
  );
}

export function PaperWithShadow() {
  return (
    // The Paper component is a container for displaying content on an elevated surface.
    <div className="paper size-48 bg-gray-700  mx-auto  shadow-lg shadow-gray-50  flex  p-4 flex-col items-center gap-5">
      <p className="bg-gray-300 p-2 rounded-full size-12 text-2xl text-gray-700 text-center">
        A
      </p>
      <div className="text-gray-300 text-center">
        This is a paper with shadow{" "}
      </div>
    </div>
  );
}
