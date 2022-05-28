import React from "react";

const CardProtfolio = (props) => {
  const { totallike, title } = props;
  return (
    <>
      <div className="box btn_shadow">
        <div className="category d_flex"></div>

        <div className="title">
          <h2>{title}</h2>
          <a href="#popup" className="arrow">
            <i className="fas fa-arrow"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardProtfolio;
