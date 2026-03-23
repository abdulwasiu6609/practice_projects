import { FaPlay } from "react-icons/fa";
// import lizard from "/"

export default function PassingPropsPage() {
  const names = [
    "Kowope",
    "Batifori",
    "Mulikah boy",
    "Cynthia",
    "Mulikah",
    "Abike",
    "S.Item 7",
    "S.right",
    "Abdul",
  ];
  return (
    <div className="">
      <h1 className="font-bold text-xl text-center">Passing Props in react</h1>
      <br />
      <h2 className="font-bold">Names:</h2>
      {/* <div className="names">
       {names.map((item,index)=><DisplayName key={index} name={item} />)}
      </div> */}

      <br />
      <h2 className="addition font-bold">Addition</h2>
      <Addition x={5} y={7} />
      <Addition x={50000} y={88888} />
      <br />
      <h2 className=" font-bold">Avatar</h2>
      <DisplayAvatar image={"T"} />
      <DisplayAvatar image={<FaPlay />} />
      <DisplayAvatar
        image={"https://avatars.githubusercontent.com/u/99112149?v=4&size=64"}
      />
      <DisplayAvatar image="/assets/images/lizard.webp" />
    </div>
  );
}

function DisplayName({ name }) {
  return <p className="">{name}</p>;
}

function Addition({ x, y }) {
  return (
    <div className="">
      {x} + {y} = {x + y}
    </div>
  );
}

function DisplayAvatar({ image }) {
  // Check if image is a string and looks like a URL
  const isUrl =
    typeof image === "string" &&
    (image.startsWith("http") || image.includes("."));
  return (
    <>
      {isUrl ? (
        <img
          src={image}
          className=" rounded-full size-12 flex justify-center items-center text-xl text-white mx-auto object-cover"
        />
      ) : (
        <div className="bg-blue-700 rounded-full size-12 flex justify-center items-center text-xl text-white mx-auto">
          {image}
        </div>
      )}
    </>
  );
}
