import React from "react";
import "./Protfolio.css";
// import img1 from "./images/absa.png";

const CardProtfolio = (props) => {
  const { img, title, gitlink } = props;
  // const img2 = import("./images/absa.png");
  // console.log(img1);
  // console.log(img2);

  return (
    <>
      <div className="btn_shadow box1">
        <div className="img">
          <div className="img_size">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="btn_shadow1 ">
          <a href={gitlink} target={"_blank"} rel="noreferrer">
            <i className="fab fa-github"> View Project </i>
          </a>
        </div>
        <div className="title mid_text">
          <h4>{title}</h4>
        </div>
      </div>
    </>
  );
};

export default CardProtfolio;
