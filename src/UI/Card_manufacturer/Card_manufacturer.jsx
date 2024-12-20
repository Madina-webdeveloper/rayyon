import React from "react";
import "./card_manufacturer.css";

const Card_manufacturer = ({
  manufacturer_link,
  manufacturer_link_img,
  manufacturer_link_name,
}) => {
  return (
    <>
      <a href={manufacturer_link} className="manufacturer_link" target="_blank">
        <img src={manufacturer_link_img} alt="manufacturer_link_img" />
        {manufacturer_link_name}
      </a>
    </>
  );
};
export default Card_manufacturer;