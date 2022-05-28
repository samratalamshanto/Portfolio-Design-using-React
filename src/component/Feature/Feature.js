import React from "react";

import Card from "./Card";
import data from "./FeaturesApi";
import "./Feature.css";

const Feature = () => {
  return (
    <>
      <section className="feature top" id="feature">
        <div className="container">
          <div className="heading">
            <h3>Projects:</h3>
            <h1>What I Do</h1>
          </div>

          <div className="content grid">
            {data.map((val, index) => {
              return (
                <Card
                  key={index}
                  title={val.title}
                  descriotion={val.descriotion}
                  img={val.image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
