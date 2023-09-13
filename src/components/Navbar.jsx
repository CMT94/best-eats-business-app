import React from "react";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

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
      <div>
        <button className="bg-black text-white rounded-full hover:bg-gray-800 transition duration-200 ease-in-out hidden md:flex items-center py-2">
          <BsFillCartFill size={20} className="mr-2" />
          <span>Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
