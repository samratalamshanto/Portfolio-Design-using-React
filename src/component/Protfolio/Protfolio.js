import React from "react";

import "./Protfolio.css";

import dataProtfolio from "./ProtfolioData";
import CardProtfolio from "./CardProtfolio";

const Protfolio = () => {
  return (
    <>
      <section className="protfolio top" id="protfolio">
        <div className="container portfolio_container">
          <div className="heading text-center heading_protfolio">
            <br />
            <h3> What I Do..</h3>
            <h1>Academic Project</h1>
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
