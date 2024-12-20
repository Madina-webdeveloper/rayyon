import React from "react";
import Card from "../../UI/Card/Card";
import "./list.css";
import hap135 from "./hap135.jpg";
import hap300 from "./hap300.jpg";
import hap1512 from "./hap1512.jpg";
import hap2017 from "./hap2017.jpg";
import hap2521 from "./hap2521.jpg";
import hap3025 from "./hap3025.jpg";
import hap4031 from "./hap4031.jpg";
import modarate from "./modarate.jpg";
import we67k from "./we67k.png";
import { language } from "../../lang/index.jsx";

export const List = () => {
  return (
    <>
      <section>
        <div className="container frezerniy">
          <h1 className="frezerniy__title">
            {" "}
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.frezerniyPG?.title
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.frezerniyPG?.title
              : language?.english?.frezerniyPG?.title}
          </h1>

          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">  {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.listPG?.titleS
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.listPG?.titleS
              : language?.english?.listPG?.titleS}</h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={hap135}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.turkey
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.turkey
                : language?.english?.listPG?.turkey}
                card__type__wrap__manufacturer={"INANLAR"}
                card__type__wrap__name={"PRESTIGE - Press Brake CNC-HAP 25/21"}
              />

              <Card
                card__type__img={hap2017}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.turkey
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.turkey
                : language?.english?.listPG?.turkey}
                card__type__wrap__manufacturer={"INANLAR"}
                card__type__wrap__name={"MODERATE - Press Brake CNC-HAP 20/17"}
              />
              <Card
                card__type__img={hap2521}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.turkey
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.turkey
                : language?.english?.listPG?.turkey}
                card__type__wrap__manufacturer={"INANLAR"}
                card__type__wrap__name={"PRESTIGE - Press Brake CNC-HAP 15/12"}
              />
              <Card
                card__type__img={hap300}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.turkey
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.turkey
                : language?.english?.listPG?.turkey}
                card__type__wrap__manufacturer={"INANLAR"}
                card__type__wrap__name={
                  "PRESTIGE - Press Brake CNC-HAP 30/25 (300-540)"
                }
              />
              <Card
                card__type__img={hap3025}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.turkey
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.turkey
                : language?.english?.listPG?.turkey}
                card__type__wrap__manufacturer={"INANLAR"}
                card__type__wrap__name={"PRESTIGE - Press Brake CNC-HAP 30/25"}
              />
              <Card
                card__type__img={hap4031}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.turkey
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.turkey
                : language?.english?.listPG?.turkey}
                card__type__wrap__manufacturer={"INANLAR"}
                card__type__wrap__name={"PRESTIGE - Press Brake CNC-HAP 40/31"}
              />
              <Card
                card__type__img={modarate}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.turkey
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.turkey
                : language?.english?.listPG?.turkey}
                card__type__wrap__manufacturer={"INANLAR"}
                card__type__wrap__name={"MODERATE - Press Brake CNC-HAP 30/25"}
              />
            </div>
          </div>
          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">{localStorage.getItem("lang") === "Russian"
              ? language?.russian?.listPG?.titleT
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.listPG?.titleT
              : language?.english?.listPG?.titleT}</h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={we67k}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.china
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.china
                : language?.english?.listPG?.china}
                card__type__wrap__manufacturer={
                  "NANJING BEKE CNC MACHINERY CO., LTD."
                }
                card__type__wrap__name={"WE67K with CYBELEC Cybtouch 12"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
