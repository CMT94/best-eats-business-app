import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import FoodCardsList from "./components/FoodCardsList";
import CategoriesList from "./components/CategoriesList";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <FoodCardsList />
      <CategoriesList />
    </React.Fragment>
  );
}

export default App;
