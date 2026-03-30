// import { FaMarkdown } from "react-icons/fa";
// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return (
//       <li className="item flex items-center gap-2">
//         {name}
//         <FaMarkdown />{" "}
//       </li>
//     );
//   }
//   return <li className="item">{name}</li>;
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={true} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }

export default function StudentRegistration() {
  return (
    <div className="">
      <Student name="Cynthia" registrationStatus={false} />
      <Student name="David" registrationStatus={true} />
    </div>
  );
}

import { FaBatteryEmpty, FaCertificate } from "react-icons/fa";

function Student({ name, registrationStatus }) {
  return (
    <div className="flex items-center gap-3">
      <div className="">{name}</div>
      <div className="text-green-500">
        {/* {registrationStatus && <FaCertificate />} */}
      {registrationStatus?<FaCertificate />:<FaBatteryEmpty />}
      
      </div>
    </div>
  );
}
