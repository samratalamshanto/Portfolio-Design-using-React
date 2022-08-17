import React from "react";

import CardPublications from "./CardPublications";
import PublicationsData from "./PublicationsData";

import "./Publications.css";
import "../../App.css";

const research =
  "https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/64/000000/external-research-seo-and-digital-marketing-parzival-1997-outline-color-parzival-1997.png";
const Publications = () => {
  return (
    <>
      <section className="research" id="research">
        <div className="content-section d_flex research_box">
          <div className="heading">
            <img src={research} alt="" />
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
