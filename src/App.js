import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import FoodCardsList from "./components/FoodCardsList";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <FoodCardsList />
    </React.Fragment>
  );
}

export default App;
