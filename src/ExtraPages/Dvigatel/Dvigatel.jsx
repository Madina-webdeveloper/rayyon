import React from "react";
import Card from "../../UI/Card/Card";
import thl60 from "./thl60.jpg";
import thl155m from "./thl155m.jpg";
import fsv100 from "./fsv100.jpg";
import fsv120 from "./fsv120.jpg";
import bst860 from "./bst860.jpg";
import bgv220 from "./bgv220.jpg";
import ac110 from "./ac110.jpg";
import ac170 from "./ac170.jpg";
import ac200 from "./ac200.jpg";
import acf170 from "./acf170.jpg";
import acf200 from "./acf200.jpg";
import acf200c from "./acf200cnc.jpg";
import rv516 from "./rv516.jpg";
import thl3 from "./thl3.jpg";
import spn800 from "./spn800.webp";
import bgv260 from "./bgv260.jpg";
import { language } from "../../lang/index.jsx";

export const Dvigatel = () => {
  return (
    <>
      {" "}
      <section>
        <div className="container frezerniy">
          <h1 className="frezerniy__title">{" "}
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.frezerniyPG?.title
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.frezerniyPG?.title
              : language?.english?.frezerniyPG?.title}</h1>

          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">{localStorage.getItem("lang") === "Russian"
              ? language?.russian?.dvigatelPG?.titleT
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.dvigatelPG?.titleT
              : language?.english?.dvigatelPG?.titleT}</h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={thl60}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.china
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.china
                : language?.english?.listPG?.china}
                card__type__wrap__manufacturer={
                  " Shanghai THL MACHINE TOOLS CO.LTD."
                }
                card__type__wrap__name={"THL/VT-60"}
              />
              <Card
                card__type__img={thl155m}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.china
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.china
                : language?.english?.listPG?.china}
                card__type__wrap__manufacturer={
                  " Shanghai THL MACHINE TOOLS CO.LTD."
                }
                card__type__wrap__name={"THL/CB 155M"}
              />
            </div>
          </div>
          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.frezerniyPG?.titleF
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.frezerniyPG?.titleF
              : language?.english?.frezerniyPG?.titleF}
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={fsv100}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec FSV100"}
              />
              <Card
                card__type__img={fsv120}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec FSV120"}
              />
              <Card
                card__type__img={bst860}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec BST860"}
              />
              <Card
                card__type__img={bgv220}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec BGV220"}
              />

              <Card
                card__type__img={ac170}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec AC170"}
              />
              <Card
                card__type__img={acf170}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec ACF-170"}
              />
              <Card
                card__type__img={ac200}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec AC200"}
              />
              <Card
                card__type__img={acf200}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec ACF-200"}
              />
              <Card
                card__type__img={acf200c}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec ACF-200 CNC"}
              />
            </div>
          </div>
          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.frezerniyPG?.titleFi
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.frezerniyPG?.titleFi
              : language?.english?.frezerniyPG?.titleFi}
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={thl3}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.china
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.china
                : language?.english?.listPG?.china}
                card__type__wrap__manufacturer={
                  "Shanghai THL MACHINE TOOLS CO.LTD."
                }
                card__type__wrap__name={"THL 3.0"}
              />
              <Card
                card__type__img={rv516}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec RV-516"}
              />
            </div>
          </div>
          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.frezerniyPG?.titleSix
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.frezerniyPG?.titleSix
              : language?.english?.frezerniyPG?.titleSix}
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={ac110}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec AC110"}
              />
              <Card
                card__type__img={spn800}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec SPN800"}
              />
              <Card
                card__type__img={bgv260}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={"Comec"}
                card__type__wrap__name={"Comec BGV-260"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
