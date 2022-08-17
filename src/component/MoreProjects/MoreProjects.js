import React, { useState, useEffect } from "react";

import CardMoreProjects from "./CardMoreProjects";
// import MoreProjectsData from "./MoreProjectsData";
import "./MoreProjects.css";
import "../../App.css";
import axios from "axios";
//axios

const projects_img =
  "https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-clipboard-project-management-itim2101-lineal-color-itim2101.png";

const Resume = () => {
  const [projects1, setProjects1] = useState([]); //array

  const fetchdata = async () => {
    await axios
      .get("https://samrat-alam.herokuapp.com/projectsdataonly")
      .then((res) => {
        setProjects1(res.data.result);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <section className="moreprojects" id="moreprojects">
        <div className="content-sectio d_flex moreProjects_box">
          <div className="heading">
            <img src={projects_img} alt="" />
            <h1>More Academic Projects</h1>
          </div>
          <div className="content">
            {projects1.map((val, index) => {
              return (
                <CardMoreProjects
                  key={index}
                  year={val.year}
                  title={val.project_name}
                  link={val.project_link}
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
