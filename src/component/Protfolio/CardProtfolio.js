import React from "react";
import "./Protfolio.css";
const CardProtfolio = (props) => {
  const { img, title, gitlink } = props;
  console.log(gitlink);

  return (
    <>
      <div className="btn_shadow box1">
        <div className="img">
          <div className="img_size">
            <img src={img} alt="##" />
          </div>
        </div>
        <div className="btn_shadow1 ">
          <a href={gitlink}>View Project</a>
        </div>
        <div className="title text-center mid_text">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
};

export default CardProtfolio;
