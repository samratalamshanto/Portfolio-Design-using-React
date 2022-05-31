import React from "react";

import CardPublications from "./CardPublications";
import PublicationsData from "./PublicationsData";
import "./Publications.css";
import "../../App.css";

const Publications = () => {
  return (
    <>
      <section className="research" id="research">
        <div className="content-section mtop d_flex research_box">
          <div className="heading">
            <h1>Research</h1>
          </div>
          <div className="content">
            {PublicationsData.map((val, index) => {
              return (
                <CardPublications
                  key={index}
                  conference={val.conference}
                  title={val.title}
                  link={val.researchGateLink}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Publications;
