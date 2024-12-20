import React from "react";
import "./Card.css";
import { language } from "../../lang/index.jsx";
const Card = ({
  card__type__img,
  card__type__wrap__country,
  card__type__wrap__name,
  card__type__wrap__manufacturer,
}) => {
  return (
    <>
      <div className="card">
        <img src={card__type__img} alt="card__type__img" />
        <div className="card__type">
          <h3 className="card__type__wrap__name">{card__type__wrap__name}</h3>
          <p className="card__type__wrap__manufacturer">
          {
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.manufacturer
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.manufacturer
                    : language?.english?.frezerniyPG?.manufacturer
                }
            {card__type__wrap__manufacturer}
          </p>
          <p className="card__type__wrap__country">
          {
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.country
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.country
                    : language?.english?.frezerniyPG?.country
                } {card__type__wrap__country}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
