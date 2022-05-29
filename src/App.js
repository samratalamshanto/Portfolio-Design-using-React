import React from "react";

import Header from "./component/header/header";
import HeaderHero from "./component/Hero/Header.hero";
import Resume from "../src/component/Resume/Resume";
import Protfolio from "../src/component/Protfolio/Protfolio";
import Feature from "./component/Feature/Feature";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <HeaderHero />
      <Resume />
      <Protfolio />
      {/* <Feature /> */}
      <div className="div_hello"></div>
    </div>
  );
};

export default App;
