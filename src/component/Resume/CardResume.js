import React from "react";

const CardResume = (props) => {
  const { title, year, gpa, desc } = props;
  return (
    <>
      <section>
        <div className="box box_shadow">
          <div className="title_content d_flex">
            <div className="title">
              <h2>{title}</h2>
              <span>{year}</span>
            </div>
            <div className="gpa">
              <button className="btn_shadow">GPA : {gpa}</button>
            </div>
          </div>
          <hr />
          <p>{desc}</p>
        </div>
      </section>
    </>
  );
};

export default CardResume;
