import React from "react";

import dataProtfolio from "./ProtfolioData";
import CardProtfolio from "./CardProtfolio";

const Protfolio = () => {
  return (
    <>
      <section className="protfolio top" id="protfolio">
        <div className="container">
          <div className="heading text-center">
            <h3> Visit My Protfolio And Keep Your Feedback..</h3>
            <h1>My Protfolio</h1>
          </div>

          <div className="content grid">
            {dataProtfolio.map((val, index) => {
              return (
                <CardProtfolio
                  key={index}
                  title={val.title}
                  totallike={val.totalLike}
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
