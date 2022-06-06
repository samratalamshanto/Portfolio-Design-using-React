import React from "react";

import CardMoreProjects from "./CardMoreProjects";
import MoreProjectsData from "./MoreProjectsData";
import "./MoreProjects.css";
import "../../App.css";

const projects =
  "https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-clipboard-project-management-itim2101-lineal-color-itim2101.png";

const Resume = () => {
  return (
    <>
      <section className="moreprojects" id="moreprojects">
        <div className="content-sectio d_flex moreProjects_box">
          <div className="heading">
            <img src={projects} alt="" />
            <h1>More Academic Projects</h1>
          </div>
          <div className="content">
            {MoreProjectsData.map((val, index) => {
              return (
                <CardMoreProjects
                  key={index}
                  year={val.year}
                  title={val.title}
                  link={val.gitLink}
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
