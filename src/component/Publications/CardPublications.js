import React from "react";

const CardMoreProjects = (props) => {
  const { title, link, conference } = props;
  return (
    <>
      <section>
        <div className="box box_shadow">
          <div className="title_content d_flex">
            <div className="title">
              <span>Paper Title:</span>
              <h2> {title}</h2>
              <br />
              <span>Conference:</span>

              <h4> {conference}</h4>
            </div>
            <div className="gpa">
              <button className="btn_shadow3">
                <a href={link} target={"_blank"} rel="noreferrer">
                  Read..
                </a>
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
