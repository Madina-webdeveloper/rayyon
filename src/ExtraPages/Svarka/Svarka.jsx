import React from "react";
import Card from "../../UI/Card/Card";
import h32a from "./h32a.jpg";
import h32c from "./h32c.jpg";
import h30a from "./h30a.jpg";
import { language } from "../../lang/index.jsx";


export const Svarka = () => {
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
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.dvigatelPG?.titleSvarka
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.dvigatelPG?.titleSvarka
              : language?.english?.dvigatelPG?.titleSvarka}
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={h30a}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "CHMER"
                }
                card__type__wrap__name={"CHMER H30A"}
              />
              <Card
                card__type__img={h32a}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "CHMER"
                }
                card__type__wrap__name={"CHMER H32A"}
              />
              <Card
                card__type__img={h32c}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "CHMER"
                }
                card__type__wrap__name={"CHMER H32A / CA"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

