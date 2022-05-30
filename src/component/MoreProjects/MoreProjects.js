import React from "react";

import CardMoreProjects from "./CardMoreProjects";
import MoreProjectsData from "./MoreProjectsData";
import "./MoreProjects.css";
import "../../App.css";

const Resume = () => {
  return (
    <>
      <section className="moreprojects" id="moreprojects">
        <div className="content-section mtop d_flex moreProjects_box">
          <div className="heading">
            <h1>More Academic Projects</h1>
          </div>
          <div className="content">
            {MoreProjectsData.map((val, index) => {
              return (
                <CardMoreProjects
                  key={index}
                  year={val.year}
                  title={val.title}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
