import React from "react";
import "./cardHome.css";

const Card_home = ({ des_img, card__desc }) => {
  return (
    <>
      <div className="card_des">
        <img src={des_img} alt="img" className="card_img" />
        <h4 className="card__desc">{card__desc}</h4>
      </div>
    </>
  );
};

export default Card_home;
