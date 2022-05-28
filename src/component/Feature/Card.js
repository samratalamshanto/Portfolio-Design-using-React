import React from "react";

const Card = (props) => {
  const { title, descriotion, img } = props;
  console.log(props);
  return (
    <>
      <div className="box btn_shadow">
        <img src={img} alt="" />
        <h2>Title:{title}</h2>
        <p>{descriotion}</p>
        <a href="">
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </>
  );
};

export default Card;
