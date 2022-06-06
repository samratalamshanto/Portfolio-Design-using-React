import React from "react";

import CardResume from "./CardResume";
import ResumeData from "./ResumeData";
import "./Resume.css";
import "../../App.css";

const education =
  "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-education-translation-and-language-xnimrodx-lineal-color-xnimrodx.png";

const Resume = () => {
  return (
    <>
      <section className="resume" id="resume">
        <div className="content-section d_flex resume_div">
          <div className="heading">
            <img src={education} alt="" />
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
