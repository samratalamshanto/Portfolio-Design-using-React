import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} />;

const CardMoreProjects = (props) => {
  const { title, link } = props;
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
                <a href={link} target={"_blank"} rel="noreferrer">
                  {github}
                </a>
              </button>
            </div>
          </div>
          <hr />
          <br />
        </div>
      </section>
    </>
  );
};

export default CardMoreProjects;
