import React from "react";

import { foodsData, categories } from "../data/data";

import FiltersSection from "./FiltersSection";
import Card from "./shared/Card";

const FoodCardsList = () => {
  const [foodsList, setFoodsList] = React.useState(foodsData);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      <FiltersSection />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foodsList.map((foodItem) => (
          <Card
            key={foodItem.id}
            name={foodItem.name}
            img={foodItem.image}
            price={foodItem.price}
            category={foodItem.category}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCardsList;
