import React from "react";
import "./cardService.css";

const Card_service = ({ imgService, titleService, descService }) => {
  return (
    <>
      <div className="cardService">
        <img src={imgService} alt="" />
        <h4 className="titleService">{titleService}</h4>
        <p className="descService">{descService}</p>
      </div>
    </>
  );
};

export default Card_service;
