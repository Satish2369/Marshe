"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const CollapsibleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-0 h-full z-50 flex">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-12 w-12 absolute mt-4 mr-6 right-0 z-10 flex items-center justify-center `}
      >
        {isOpen ? (
          <RxCross2 size={36} className="text-[#333333]" />
        ) : (
          <RxHamburgerMenu size={36} className="text-[#333333]" />
        )}
      </button>

      <div
        className={`bg-white w-64 h-full shadow-xl transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mt-[12vw]">
          <ul className="space-y-1 text-black ">
            {[
              "Profile",
              "Notifications",
              "orders",
              "Wallet",
              "Settings",
              "login",
            ].map((item) => (
              <li key={item} className="m-8">
                {item !== "login" ? (
                  <button className="w-full text-center p-2 hover:bg-gray-100 rounded cursor-pointer">
                    {item}
                  </button>
                ) : (
                  <Link href="/login">
                    <button className="w-full text-center text-white p-2 bg-[#320505] rounded cursor-pointer">
                      {item}
                    </button>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleMenu;
