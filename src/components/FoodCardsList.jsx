import React from "react";

import { foodsData } from "../data/data";

import FiltersSection from "./FiltersSection";
import Card from "./shared/Card";

const FoodCardsList = () => {
  const [foodsList, setFoodsList] = React.useState(foodsData);

  const filterTypeHandler = (category) => {
    let tmpFilteredList = [...foodsData];

    if (category) {
      tmpFilteredList = foodsData.filter((item) => item.category === category);
    }

    setFoodsList(tmpFilteredList);
  };

  const filterPriceHandler = (price) => {
    const tmpFilteredList = foodsData.filter((item) => item.price === price);
    setFoodsList(tmpFilteredList);
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-4">
        Top Rated Menu
      </h1>

      <FiltersSection
        onFilterType={filterTypeHandler}
        onFilterPrice={filterPriceHandler}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foodsList.map((foodItem) => (
          <Card
            key={foodItem.id}
            name={foodItem.name}
            img={foodItem.image}
            price={foodItem.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCardsList;
