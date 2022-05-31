import React from "react";

const Card = (props) => {
  const { title, descriotion, img } = props;
  return (
    <>
      <div className="box btn_shadow content_feature_box">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{descriotion}</p>
      </div>
    </>
  );
};

export default Card;
