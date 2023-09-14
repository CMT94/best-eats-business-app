import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <HeadlineCards />
    </React.Fragment>
  );
}

export default App;
