import React from "react";
import Avatar from "../molecules/Avatar";

export default function Navbar({ title }: { title: string }) {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 lg:shadow-sm lg:shadow-gray-600 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            {title}
          </a>
          <h1 className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3 text-white">
            Painel Admin
          </h1>
          <div className="flex-col md:flex-row list-none items-center hidden md:flex">
            <Avatar />
          </div>
        </div>
      </nav>
    </>
  );
}
