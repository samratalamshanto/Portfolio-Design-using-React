import React from "react";

const CardMoreProjects = (props) => {
  const { title } = props;
  return (
    <>
      <section>
        <div className="box box_shadow">
          <div className="title_content d_flex">
            <div className="title">
              <h3>{title}</h3>
            </div>
            <div className="gpa">
              <button className="btn_shadow2">
                <i className="fab fa-github"></i> View
              </button>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default CardMoreProjects;
