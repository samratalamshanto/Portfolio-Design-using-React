import React from "react";

import CardResume from "./CardResume";
import ResumeData from "./ResumeData";

const Resume = () => {
  return (
    <>
      <section className="resume" id="resume">
        <div className="container top">
          <div className="heading top-center"></div>
        </div>

        <div className="content-section mtop d_flex">
          <div className="left">
            <div className="heading">
              <h3>2017-2022</h3>
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
        </div>
      </section>
    </>
  );
};

export default Resume;
