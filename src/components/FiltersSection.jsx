import React from "react";

const FILTERS_TYPE = [
  { title: "All", category: undefined },
  { title: "Burgers", category: "burger" },
  { title: "Pizza", category: "pizza" },
  { title: "Salads", category: "salad" },
  { title: "Chicken", category: "chicken" },
];

const FILTERS_PRICE = ["$", "$$", "$$$", "$$$$"];

const FiltersSection = (props) => {
  const { onFilterType, onFilterPrice } = props;

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div>
        <p className="font-bold text-gray-700">Filter Type</p>
        <div className="flex justify-between flex-wrap">
          {FILTERS_TYPE.map((filter, filterIndex) => (
            <button
              key={filterIndex}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200"
              onClick={() => onFilterType(filter.category)}
            >
              {filter.title}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="font-bold text-gray-700">Filter Price</p>
        <div className="flex justify-between max-w-[390px] w-full">
          {FILTERS_PRICE.map((filter, filterIndex) => (
            <button
              key={filterIndex}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200"
              onClick={() => onFilterPrice(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
