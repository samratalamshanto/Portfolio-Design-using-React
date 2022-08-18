import React from "react";

const Card = (props) => {
  const { value, title, description, img } = props;

  return (
    <>
      <div className=" btn_shadow content_feature_box">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Card;
