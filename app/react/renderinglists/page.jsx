export default function RenderingLists(props) {
  const {} = props;
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  const people2 = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  const studentGrades = [
    {
      name: "Batifori",
      cgpa: 4,
    },
    {
      name: "Abdul",
      cgpa: 3.82,
    },
    {
      name: "Abike",
      cgpa: 2,
    },
    {
      name: "Kowope",
      cgpa: 4,
    },
    {
      name: "Muhammad",
      cgpa: 3.82,
    },
    {
      name: "Ofoori",
      cgpa: 4,
    },
    {
      name: "Mulikah",
      cgpa: 4,
    },
    {
      name: "John",
      cgpa: 3.82,
    },
    {
      name: "Abi",
      cgpa: 1.98,
    },
  ];

  return (
    <div className="">
      <h1 className="font-bold text-2xl text-center">
        Rendering Lists in React
      </h1>
      <h2 className="font-bold">Raw list</h2>
      <ul>
        <li>Creola Katherine Johnson: mathematician</li>
        <li>Mario José Molina-Pasquel Henríquez: chemist</li>
        <li>Mohammad Abdus Salam: physicist</li>
        <li>Percy Lavon Julian: chemist</li>
        <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
      </ul>
      <h2 className="font-bold">React List</h2>
      <ol type="1" className="">
        {people.map((person, index) => (
          <li key={person} className="text-sm ">
            {index + 1} {person}
          </li>
        ))}
      </ol>
      <h3 className="font-bold">Show people with chemist as profession</h3>
      {/* {people2
        .filter((item) => item.profession !== "chemist")
        .map((item) => (
          <li key={item.id} className="">
            {item.name} - {item.profession}
          </li>
        ))} */}

      {people2
        .filter((item) => item.profession !== "chemist")
        .map((item) => {
          const { id, name, profession } = item;
          return (
            <li key={id} className="">
              {name} - {profession}
            </li>
          );
        })}
      <br className="" />
      <h3 className="font-bold">Student Grades</h3>
      <h4 className="font-bold text-sm">First class</h4>
      {studentGrades
        .filter((grade) => grade.cgpa > 3.0 && grade.cgpa <= 4.0)
        .map((grade) => (
          <li className="">
            {grade.name} | {grade.cgpa}
          </li>
        ))}
      <br className="" />
      <h4 className="font-bold text-sm">Second class</h4>
      {studentGrades
        .filter((grade) => grade.cgpa >= 2.0 && grade.cgpa <= 3.0)
        .map((grade) => (
          <li className="">
            {grade.name} | {grade.cgpa}
          </li>
        ))}
      <br className="" />
      <h4 className="font-bold text-sm">Advised to Withdraw</h4>
      {studentGrades
        .filter((grade) => grade.cgpa < 2.0 && grade.cgpa >= 0)
        .map((grade) => (
          <li className="">
            {grade.name} | {grade.cgpa}
          </li>
        ))}
    </div>
  );
}

export function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

export const people3 = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];
  