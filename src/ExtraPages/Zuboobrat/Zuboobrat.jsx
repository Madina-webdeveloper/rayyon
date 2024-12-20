import React from "react";
import cd250 from "./cd250.jpg";
import cdx250 from "./cdx250.jpg";
import h80 from "./h80.jpg";
import h200t from "./h200t.jpg";
import h250cd from "./h250cd.jpg";
import h250cdm from "./h250cdm.jpg";
import yk5180d from "./yk5180d.jpg";
import Card from "../../UI/Card/Card";
import { language } from "../../lang/index.jsx";

export const Zuboobrat = () => {
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
                    ? language?.russian?.zuboobratPG?.titleS
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.zuboobratPG?.titleS
                    : language?.english?.zuboobratPG?.titleS
                }
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={cd250}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.zuboobratPG?.germany
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.zuboobratPG?.germany
                    : language?.english?.zuboobratPG?.germany
                }
                card__type__wrap__manufacturer={
                  "FFG Werke GmbH"
                }
                card__type__wrap__name={"CD 250"}
              />
              <Card
                card__type__img={h200t}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.zuboobratPG?.germany
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.zuboobratPG?.germany
                    : language?.english?.zuboobratPG?.germany
                }
                card__type__wrap__manufacturer={
                  "FFG Werke GmbH"
                }
                card__type__wrap__name={"H 200T"}
              />
              <Card
                card__type__img={h250cd}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.zuboobratPG?.germany
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.zuboobratPG?.germany
                    : language?.english?.zuboobratPG?.germany
                }
                card__type__wrap__manufacturer={
                  "FFG Werke GmbH"
                }
                card__type__wrap__name={"H 250CD"}
              />
              <Card
                card__type__img={h250cdm}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.zuboobratPG?.germany
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.zuboobratPG?.germany
                    : language?.english?.zuboobratPG?.germany
                }
                card__type__wrap__manufacturer={
                  "FFG Werke GmbH"
                }
                card__type__wrap__name={"H 250CDM"}
              />
              <Card
                card__type__img={h80}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.zuboobratPG?.germany
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.zuboobratPG?.germany
                    : language?.english?.zuboobratPG?.germany
                }
                card__type__wrap__manufacturer={
                  "FFG Werke GmbH"
                }
                card__type__wrap__name={"H 80"}
              />
              <Card
                card__type__img={cdx250}
                card__type__wrap__country= {
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.zuboobratPG?.germany
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.zuboobratPG?.germany
                    : language?.english?.zuboobratPG?.germany
                }
                card__type__wrap__manufacturer={
                  "FFG Werke GmbH"
                }
                card__type__wrap__name={"CDX 250"}
              />
            </div>
          </div>
          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">
            {
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.zuboobratPG?.titleT
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.zuboobratPG?.titleT
                    : language?.english?.zuboobratPG?.titleT
                }
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={yk5180d}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Yichang Changjiang Machine Technology Co., Ltd"
                }
                card__type__wrap__name={"YK5180D"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
