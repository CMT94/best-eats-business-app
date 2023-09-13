import React from "react";

import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const NAV_LINKS = [
  { title: "Orders", icon: <TbTruckDelivery size={25} className="mr-4" /> },
  { title: "Favorites", icon: <MdFavorite size={25} className="mr-4" /> },
  { title: "Wallet", icon: <FaWallet size={25} className="mr-4" /> },
  { title: "Promotions", icon: <AiFillTag size={25} className="mr-4" /> },
  { title: "Help", icon: <MdHelp size={25} className="mr-4" /> },
  { title: "Best One", icon: <BsFillSaveFill size={25} className="mr-4" /> },
  {
    title: "Invite Friends",
    icon: <FaUserFriends size={25} className="mr-4" />,
  },
];

const Navbar = () => {
  const [isDeliverySelected, setIsDeliverySelected] = React.useState(true);
  const selectDelivery = () => setIsDeliverySelected(true);
  const selectPickup = () => setIsDeliverySelected(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Easts</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p
            className={`p-2 cursor-pointer ${
              isDeliverySelected
                ? "bg-black text-white rounded-full transition duration-200 ease-in-out"
                : ""
            }`}
            onClick={selectDelivery}
          >
            Delivery
          </p>
          <p
            className={`p-2 cursor-pointer ${
              !isDeliverySelected
                ? "bg-black text-white rounded-full transition duration-200 ease-in-out"
                : ""
            }`}
            onClick={selectPickup}
          >
            Pickup
          </p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search foods"
          className="bg-transparent p-2 w-full focus:outline-none"
        />
      </div>

      <button className="bg-black text-white rounded-full hover:bg-gray-800 transition duration-200 ease-in-out hidden md:flex items-center py-2">
        <BsFillCartFill size={20} className="mr-2" />
        <span>Cart</span>
      </button>

      {/* Overlay */}
      <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>

      {/* Sidedrawer */}
      <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300">
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {NAV_LINKS.map((link, linkIndex) => (
              <li
                key={linkIndex}
                className="text-xl py-4 flex items-center cursor-pointer"
              >
                <span>{link.icon}</span>
                <span>{link.title}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
