import React from "react";

import CardResume from "./CardResume";
import ResumeData from "./ResumeData";
import "./Resume.css";
import "../../App.css";

const Resume = () => {
  return (
    <>
      <section className="resume" id="resume">
        <div className="content-section mtop d_flex">
          <div className="heading">
            <h1>Education Quality</h1>
          </div>
          <div className="content">
            {ResumeData.map((val, index) => {
              return (
                <CardResume
                  key={index}
                  year={val.year}
                  title={val.title}
                  gpa={val.gpa}
                  desc={val.desc}
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
