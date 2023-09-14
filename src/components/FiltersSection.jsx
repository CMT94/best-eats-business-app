import React from "react";

const FiltersSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div>
        <p className="font-bold text-gray-700">Filter Type</p>
        <div className="flex justify-between flex-wrap">
          <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200">
            All
          </button>
          <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200">
            Burgers
          </button>
          <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200">
            Pizza
          </button>
          <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200">
            Salads
          </button>
          <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200">
            Chicken
          </button>
        </div>
      </div>

      <div>
        <p className="font-bold text-gray-700">Filter Price</p>
        <div className="flex justify-between max-w-[390px] w-full">
          <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200">
            $
          </button>
          <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200">
            $$
          </button>
          <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200">
            $$$
          </button>
          <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200">
            $$$$
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
