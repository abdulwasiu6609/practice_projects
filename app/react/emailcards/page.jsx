import { CiMenuBurger } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

export default function EmailCards() {
  return (
    <div className="bg-gray-200 h-svh max-w-md mx-auto">
      {/* header */}
      <div className="px-4 py-4 gap-5 flex justify-between items-center w-full">
        <div className="text-xl hover:bg-gray-300  rounded-full size-12 flex justify-center items-center ">
          <IoMdMenu />
        </div>

        <input
          type="search"
          name="mailSearch"
          id="mailSearch"
          className="bg-gray-50 rounded-full py-1.5 placeholder:text-center placeholder:text-sm placeholder:text-gray-700 px-4 text-gray-800    "
          placeholder="search mail"
        />

        <div className="rounded-full bg-red-600  size-12  flex justify-center items-center text-xl text-white ">
          A
        </div>
      </div>
      {/* email list */}
      <div className="p-4">
        <h4 className="capitalize text-sm text-gray-900">inbox</h4>
        <div className="bg-white h-100 rounded shadow">
          <EmailCard />
        </div>
      </div>
    </div>
  );
}

function EmailCard() {
  return (
    <div className=" flex gap-2 p-2 items-center justify-between">
      {/* avatar */}
      <p className="bg-red-600 rounded-full size-12 flex justify-center items-center text-white ">
        T
      </p>
      <div className="w-full">
        <h3 className="font-bold text-gray-700 line-clamp-1 ">
          What is Lorem Ipsum What is Lorem Ipsum What is Lorem Ipsum
        </h3>
        <p className="text-sm text-gray-700 line-clamp-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="w-20 h-20 bg-blue-600"></div>
    </div>
  );
}
