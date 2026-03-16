import Link from "next/link";
import lizard from "../assets/images/lizard.webp";
export default function OutlineCard() {
  return (
    <div className="p-4 border border-gray-300 rounded max-w-3xs mx-auto ">
      {/* card header */}
      <p className="text-gray-500 text-sm ">Word of the Day</p>
      {/* card content */}
      <div className="mt-2 mb-4">
        <h4 className="font-bold text-lg mb-2 ">be•nev•o•lent</h4>
        <p className="text-gray-500 mb-4 ">adjective</p>
        <p className="">well meaning and kindly.</p>
        <p className="">“a benevolent smile”</p>
      </div>
      {/* card footer */}
      <Link href="#" className="text-blue-500 uppercase text-sm font-bold">
        Learn More
      </Link>
    </div>
  );
}

// Media card
export function MediaCard() {
  return (
    <div className="max-w-sm mx-auto  rounded drop-shadow-lg shadow-lg shadow-gray-300 ">
      {/* image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7j1SD-uf8jMUUw4p5FtZPNIPXqd5olW5ydytwc2cWaXmH3eVK939Z-tVXPgy_bhK5QaL76qYCZ-SM_e1ieAd54gUhMVdnd46rWmJjVAcE&s=10"
        alt="green iguana"
        className="h-48 w-full object-cover rounded-t"
      />
      <div className="p-5">
        {/* card content */}
        <div className="">
          <h4 className="font-semibold mb-2 text-xl ">Lizard</h4>
          <p className="text-gray-500 text-sm mb-4">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </p>
        </div>
        {/* actions */}
        <div className="flex space-x-4 items-center">
          <button className="text-blue-500 uppercase text-sm font-bold">
            Share
          </button>
          <Link href="#" className="text-blue-500 uppercase text-sm font-bold">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
