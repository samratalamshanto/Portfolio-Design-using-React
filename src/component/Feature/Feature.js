import React from "react";

import Card from "./Card";
import data from "./FeaturesApi";
import "./Feature.css";
import "../../App.css";

import img_skills from "../../pic/png/skills.png";

const Feature = () => {
  return (
    <>
      <section className="feature top" id="feature">
        <div className="feature_box">
          <div className="heading text-center feature_container">
            <img src={img_skills} alt="" />
            <h1>Skills</h1>
          </div>

          <div className="content grid content_feature">
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
