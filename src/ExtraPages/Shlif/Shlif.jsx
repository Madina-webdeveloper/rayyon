import React from "react";
import Card from "../../UI/Card/Card";
import comecrp1000 from "./comecrp1000.jpg";
import lbm50 from "./lbm850.jpg";
import pfgah from "./pfgah.png";
import pfgahd from "./pfgahd.png";
import pfgahds from "./pfgahds.png";
import pfgahr from "./pfgahr.png";
import pfgh from "./pfgh.jpg";
import pfgr from "./pfgr.jpg";
import pfgxh from "./pfgxh.jpg";
import rp330 from "./rp330.jpg";
import rp850 from "./rp850.jpg";
import rp1000 from "./rp1000.jpg";
import rp1300 from "./rp1300.jpg";
import rp1400 from "./rp1400.jpg";
import m9735b from "./3m9735b.jpg";
import { language } from "../../lang/index.jsx";
export const Shlif = () => {
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
            <h2 className="frezerniy__type__first">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.shlifPG?.titleS
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.shlifPG?.titleS
              : language?.english?.shlifPG?.titleS}
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={comecrp1000}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={
                  "Comec"
                }
                card__type__wrap__name={"Comec RP-1000 CNC"}
              />
            </div>
          </div>
          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.shlifPG?.titleT
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.shlifPG?.titleT
              : language?.english?.shlifPG?.titleT}
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={rp850}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Comec"
                }
                card__type__wrap__name={"Comec RP850"}
              />
              <Card
                card__type__img={rp1000}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={
                  "Comec"
                }
                card__type__wrap__name={"Comec RP1000"}
              />
              <Card
                card__type__img={rp1300}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={
                  "Comec"
                }
                card__type__wrap__name={"Comec RP1300"}
              />
              <Card
                card__type__img={rp1400}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={
                  "Comec"
                }
                card__type__wrap__name={"Comec RP-1400 CNC"}
              />
              <Card
                card__type__img={rp330}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={
                  "Comec"
                }
                card__type__wrap__name={"Comec RP330"}
              />
              <Card
                card__type__img={lbm50}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.shlifPG?.italy
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.shlifPG?.italy
                : language?.english?.shlifPG?.italy}
                card__type__wrap__manufacturer={
                  "Comec"
                }
                card__type__wrap__name={"Comec LBM850"}
              />
              <Card
                card__type__img={m9735b}
                card__type__wrap__country={localStorage.getItem("lang") === "Russian"
                ? language?.russian?.listPG?.china
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.listPG?.china
                : language?.english?.listPG?.china}
                card__type__wrap__manufacturer={
                  "Shanghai THL MACHINE TOOLS CO.LTD"
                }
                card__type__wrap__name={"3M9735B"}
              />
            </div>
          </div>
          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.shlifPG?.titleF
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.shlifPG?.titleF
              : language?.english?.shlifPG?.titleF}
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={pfgah}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Palmary"
                }
                card__type__wrap__name={"PFG - AH Series"}
              />
              <Card
                card__type__img={pfgahd}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Palmary"
                }
                card__type__wrap__name={"PFG-AHD Double Column Series"}
              />
              <Card
                card__type__img={pfgahds}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                 "Palmary"
                }
                card__type__wrap__name={"PFG-AHD Series"}
              />
              <Card
                card__type__img={pfgahr}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Palmary"
                }
                card__type__wrap__name={"PFG-AHR Series"}
              />
              <Card
                card__type__img={pfgh}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Palmary"
                }
                card__type__wrap__name={"PFG- H Series"}
              />
              <Card
                card__type__img={pfgr}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Palmary"
                }
                card__type__wrap__name={"PFG- R Series"}
              />
              <Card
                card__type__img={pfgxh}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Palmary"
                }
                card__type__wrap__name={"PFG-XH Series / PFG-XB  Series"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
