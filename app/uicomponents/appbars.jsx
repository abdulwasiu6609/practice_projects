"use client";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiAndroidFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
// basic app bar
export default function AppBars() {
  return (
    <div className="bg-blue-600 flex justify-between text-white items-center px-4 py-2">
      <div className="flex items-center space-x-5">
        {/* menu icon */}
        <div className="text-4xl hover:bg-[#1449e648] p-1.5 rounded-full hover:cursor-pointer ">
          <IoIosMenu className="" />
        </div>

        {/* title */}
        <h1 className="text-2xl">News</h1>
      </div>

      {/* login button */}
      <button className="uppercase text-xl  hover:bg-[#1449e648] px-4 py-1 rounded">
        Login
      </button>
    </div>
  );
}

// app bar with menu

export function AppBarsWithMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-blue-600 flex justify-between text-white items-center px-4 py-2">
      <div className="flex items-center space-x-5">
        {/* menu icon */}
        <div className="text-4xl hover:bg-[#1449e648] p-1.5 rounded-full hover:cursor-pointer ">
          <IoIosMenu className="" />
        </div>

        {/* title */}
        <h1 className="text-2xl">Photos</h1>
      </div>

      {/* login button */}
      <div className="relative">
        <button
          onClick={(e) => setMenuOpen(!menuOpen)}
          className="text-2xl hover:bg-[#1449e648] p-2 rounded-full hover:cursor-pointer "
        >
          <FaUserCircle />
        </button>
        {/* dropdown menu */}
        {menuOpen && (
          <div className="absolute top-full right-0 bg-white text-black p-4 shadow-lg rounded-lg flex flex-col text-[20px]  text-left text-nowrap ">
            <Link
              href="#"
              className="py-1 px-4 hover:bg-gray-200 rounded text-gray-800"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="py-1 px-4 hover:bg-gray-200 rounded text-gray-800"
            >
              My account
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// app bar with responsive menu

export function AppBarsWithResponsiveMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="bg-blue-600 flex justify-between text-white items-center px-4 py-2">
      {/* menu icon */}
      <div className="relative">
        <button
          onClick={(e) => {
            setToggleMenu(!toggleMenu);
            setMenuOpen(false);
          }}
          className="text-4xl hover:bg-[#1449e648] p-1.5 rounded-full hover:cursor-pointer "
        >
          <IoIosMenu className="" />
        </button>
        {/* dropdown menu */}
        {toggleMenu && (
          <div className="absolute top-full left-0 bg-white text-black p-4 shadow-lg rounded-lg flex flex-col text-[20px]  text-left text-nowrap ">
            <Link
              href="#"
              className="py-1 px-4 hover:bg-gray-200 rounded text-gray-800"
            >
              Products
            </Link>
            <Link
              href="#"
              className="py-1 px-4 hover:bg-gray-200 rounded text-gray-800"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="py-1 px-4 hover:bg-gray-200 rounded text-gray-800"
            >
              Blog
            </Link>
          </div>
        )}
      </div>

      <div className="text-2xl flex items-center gap-2">
        <RiAndroidFill />
        {/* title */}
        <Link href="#" className="">
          LOGO
        </Link>
      </div>

      {/* setting */}
      <div className="relative">
        <button
          title="Open settings"
          onClick={(e) => {
            setMenuOpen(!menuOpen);
            setToggleMenu(false);
          }}
          className="text-2xl hover:bg-[#1449e648] p-2 rounded-full hover:cursor-pointer "
        >
          {/* avatar */}
          <img
            className="size-10 rounded-full"
            src="https://mui.com/static/images/avatar/2.jpg"
            alt="avatar"
          />
        </button>
        {/* dropdown menu */}
        {menuOpen && (
          <div className="absolute top-full right-0 bg-white text-black p-4 shadow-lg rounded-lg flex flex-col text-[20px]  text-left text-nowrap ">
            <Link
              href="#"
              className="py-1 px-4 hover:bg-gray-200 rounded text-gray-800"
            >
              Profile
            </Link>
            <Link
              href="#"
              className="py-1 px-4 hover:bg-gray-200 rounded text-gray-800"
            >
              Account
            </Link>
            <Link
              href="#"
              className="py-1 px-4 hover:bg-gray-200 rounded text-gray-800"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="py-1 px-4 hover:bg-gray-200 rounded text-gray-800"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
