"use client";
import { useState } from "react";

import { FaEnvelope, FaMinus, FaPlus } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function BasicBadge() {
  return (
    <div className="mx-auto w-max text-gray-500 relative">
      {/* message Icon */}
      <FaEnvelope size={24} />
      {/* badge */}
      <div className=" bg-blue-600 text-gray-200 text-center size-4 text-[10px] rounded-full flex justify-center items-center absolute -top-1 -right-1.5  border">
        4
      </div>
    </div>
  );
}

export function BadgeVisibility() {
  return (
    <div className="mx-auto w-max text-gray-500 relative">
      {/* message Icon */}
      <FaEnvelope size={24} />
      {/* badge */}
      <div className=" bg-blue-600 text-gray-200 text-center size-1 text-[10px] rounded-full flex justify-center items-center absolute top-0 -right-0.5 "></div>
    </div>
  );
}

export function BadgeMessage() {
  const [messageCounter, setMessageCounter] = useState(0);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-max text-gray-500 relative">
        {/* message Icon */}
        <FaEnvelope size={24} />
        {/* badge */}
        <div className=" bg-blue-600 text-gray-200 text-center size-4 text-[7px] rounded-full flex justify-center items-center absolute -top-1 -right-1.5  border">
          {messageCounter}
        </div>
      </div>
      <div className="">
        <button
          onClick={(e) => {
            messageCounter > 0 && setMessageCounter(messageCounter - 1);
          }}
          disabled={messageCounter < 1}
          className="border bg-gray-200 hover:bg-gray-400 border-gray-200 text-sm text-gray-500 p-2 rounded mr-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          <FaMinus />
        </button>
        <button
          onClick={(e) => {
            messageCounter <= 20 && setMessageCounter(messageCounter + 1);
          }}
          disabled={messageCounter >= 20}
          className="border bg-gray-200 hover:bg-gray-400 border-gray-200 text-sm text-gray-500 p-2 rounded mr-2 disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
