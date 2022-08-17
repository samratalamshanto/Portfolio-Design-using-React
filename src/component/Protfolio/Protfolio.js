import React from "react";

import "./Protfolio.css";

import dataProtfolio from "./ProtfolioData";
import CardProtfolio from "./CardProtfolio";

const project =
  "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-projects-social-media-agency-flaticons-lineal-color-flat-icons-2.png";

const Protfolio = () => {
  return (
    <>
      <section className="protfolio top" id="protfolio">
        <div className="container portfolio_container">
          <div className="heading text-center heading_protfolio">
            <br />
            <h3> What I Do..</h3>
            <div className="flex_portfolio">
              <img src={project} alt="" />
              <h1>Academic Project</h1>
            </div>
          </div>

          <div className="content grid contnet_protfolio">
            {dataProtfolio.map((val, index) => {
              // console.log(index);
              // console.log(val.image);
              return (
                <CardProtfolio
                  key={index}
                  img={val.image}
                  title={val.title}
                  gitlink={val.gitLink}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Protfolio;
