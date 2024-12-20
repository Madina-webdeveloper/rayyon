import React from "react";
import Card from "../../UI/Card/Card";
import "./tokarniy.css";
import vmtx400 from "../../assets/images/vmtx400.jpg";
import vturnq200 from "../../assets/images/vturnq200.jpg";
import vturnv760 from "../../assets/images/vturnv760.jpg";
import vturnv1000 from "../../assets/images/vturnv1000.jpg";
import vturn560 from "../../assets/images/vturnv560.jpg";
import { language } from "../../lang/index.jsx";


export const Tokarniy = () => {
  return (
    <>
      <section>
        <div className="container frezerniy">
          <h1 className="frezerniy__title">  {
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.title
                    : language?.english?.frezerniyPG?.title
                }</h1>

          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">
            {
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.tokarPG?.titleS
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.tokarPG?.titleS
                    : language?.english?.tokarPG?.titleS
                }
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={vmtx400}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Victor Taichung Machinery Works Co., Ltd"
                }
                card__type__wrap__name={"VMT-X400"}
              />
              <Card
                card__type__img={vturnq200}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Victor Taichung Machinery Works Co., Ltd"
                }
                card__type__wrap__name={"Vturn-Q200"}
              />
            </div>
          </div>
          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">
            {
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.tokarPG?.titleT
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.tokarPG?.titleT
                    : language?.english?.tokarPG?.titleT
                }
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={vturn560}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Victor Taichung Machinery Works Co., Ltd"
                }
                card__type__wrap__name={"Vturn-V560"}
              />
              <Card
                card__type__img={vturnv1000}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Victor Taichung Machinery Works Co., Ltd"
                }
                card__type__wrap__name={"Vturn-V1000"}
              />
              <Card
                card__type__img={vturnv760}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Victor Taichung Machinery Works Co., Ltd"
                }
                card__type__wrap__name={"Vturn-V760"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
