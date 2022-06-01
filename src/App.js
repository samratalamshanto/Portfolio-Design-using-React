import React from "react";

import Header from "./component/header/header";
import HeaderHero from "./component/Hero/Header.hero";
import Resume from "../src/component/Resume/Resume";
import Protfolio from "../src/component/Protfolio/Protfolio";
import Feature from "./component/Feature/Feature";
import MoreProjects from "../src/component/MoreProjects/MoreProjects";
import Publications from "../src/component/Publications/Publications";
import Footer from "../src/component/Footer/Footer";
import EmailBox from "../src/component/EmailBox/EmailBox";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <HeaderHero />
      <Resume />
      <Protfolio />
      <MoreProjects />
      <Feature />
      <Publications />
      <EmailBox />
      <Footer />
      {/* <div>
        <h1>helooooooooo</h1>
        <i className="fab fa-facebook">here</i>
      </div> */}
    </div>
  );
};

export default App;
