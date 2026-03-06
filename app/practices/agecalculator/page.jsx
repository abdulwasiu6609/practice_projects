"use client";
import { useState } from "react";
import { LuCalendarClock } from "react-icons/lu";

export default function AgeCalculator() {
  const [showAge, setShowAge] = useState(false);
  const [DOB, setDOB] = useState("");
  const [age, setAge] = useState({
    year: 0,
    month: 0,
    day: 0,
  });

  const calculateAge = () => {
    if (!DOB) return;

    const today = new Date();
    const birthDate = new Date(DOB);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // If days are negative, borrow days from previous month
    if (days < 0) {
      months--;
      const prevMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0,
      ).getDate();
      days += prevMonth;
    }

    // If months are negative, borrow from years
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({
      year: years < 0 ? 0 : years,
      month: months,
      day: days,
    });
    setShowAge(true);
  };
  return (
    <div className="bg-indigo-950 w-full h-svh flex justify-center items-start py-10">
      <div className="max-w-md  bg-indigo-950 w-full shadow-indigo-700 rounded-2xl   shadow-2xl drop-shadow-2xl drop-shadow-indigo-700   p-8 text-white flex flex-col  ">
        <h1 className="text-center font-bold text-5xl mb-5">Age</h1>
        <input
          type="date"
          name="date"
          id="date"
          className="border px-4 py-2 rounded ring-0 focus:ring-0 focus:ring-transparent outline-none text-lg text-white mb-4 "
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
        />

        <button
          className=" my-4 hover:bg-indigo-950 drop-shadow-2xl shadow-2xl shadow-indigo-700 p-2 mb-8 rounded transition-all duration-300 disabled:cursor-no-drop disabled:bg-transparent"
          disabled={!DOB}
          onClick={calculateAge}
        >
          Check
        </button>

        <div
          className={`flex flex-col shadow-2xl  rounded px-4 overflow-hidden transition-all duration-800 ${DOB !== "" && showAge ? "h-full py-4 " : "h-0 py-0"}`}
        >
          <div className="flex items-center space-x-6">
            <LuCalendarClock className="text-5xl" />
            <h2 className="text-2xl font-semibold">Exact Age</h2>
          </div>
          <div className="flex justify-around text-lg mt-4">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-950 shadow-xl shadow-indigo-700 drop-shadow-xl drop-shadow-indigo-700 size-16 mb-3 flex justify-center items-center   rounded-[100%]">
                {age.year}
              </div>
              <p className="capitalize text-sm mt-2">
                year{age.year > 1 && "s"}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <didiv className="bg-indigo-950 shadow-xl shadow-indigo-700 drop-shadow-xl drop-shadow-indigo-700 size-16 mb-3 flex justify-center items-center   rounded-[100%]">
                {age.month}
              </didiv>
              <p className="capitalize text-sm mt-2">
                month{age.month > 1 && "s"}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-950 shadow-xl shadow-indigo-700 drop-shadow-xl drop-shadow-indigo-700 size-16 mb-3 flex justify-center items-center   rounded-[100%]">
                {age.day}
              </div>
              <p className="capitalize text-sm mt-2">day{age.day > 1 && "s"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
