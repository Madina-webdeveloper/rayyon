import React from "react";
import "./frezerniy.css";
import Card from "../../UI/Card/Card";
import vcenter400 from "../../assets/images/vcenterh400.jpg";
import vcenter500 from "../../assets/images/vcenter500.jpg";
import vcenter630hd from "../../assets/images/vcenterh630hd.jpg";
import vcenter630hs from "../../assets/images/vcenterh630hs.jpg";
import vcenter800ax from "../../assets/images/vcenter800ax.jpg";
import focus5 from "../../assets/images/focus5.jpg";
import vturn from "../../assets/images/vturnx200.jpg";
import vcenter380 from "../../assets/images/vcenter380ax.jpg";
import vcenter630 from "../../assets/images/vcenter630ax.jpg";
import kenlimax from "../../assets/images/kenlinmaxb.jpg";
import kencompact from "../../assets/images/kencompactb.jpg";
import vcenter145 from "../../assets/images/Vcenter-145.png";
import vcenter165 from "../../assets/images/Vcenter-165.png";
import vcenter205 from "../../assets/images/vcenter205.jpg";
import vcenter76 from "../../assets/images/vcenter76.jpg";
import vcenter85b from "../../assets/images/Vcenter85b.jpg";
import vcenter85 from "../../assets/images/Vcenter85.jpg";
import vcenterp76 from "../../assets/images/vcenterp76.jpg";
import vcenter102 from "../../assets/images/vcenter102e.jpg";
import vcenterg135 from "../../assets/images/vcenterg135.webp";
import { language } from "../../lang/index.jsx";

export const Frezerniy = () => {
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
                    ? language?.russian?.frezerniyPG?.titleS
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.titleS
                    : language?.english?.frezerniyPG?.titleS
                }
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={vcenter400}
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
                card__type__wrap__name={"Vcenter-H400"}
              />
              <Card
                card__type__img={vcenter500}
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
                card__type__wrap__name={"Vcenter-500/H500HS"}
              />

              <Card
                card__type__img={vcenter630hd}
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
                card__type__wrap__name={"Vcenter-H630HD/H1000"}
              />
              <Card
                card__type__img={vcenter630hs}
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
                card__type__wrap__name={"Vcenter-H630HS"}
              />
            </div>
          </div>
          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">
            {
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.titleT
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.titleT
                    : language?.english?.frezerniyPG?.titleT
                }
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={vcenter800ax}
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
                card__type__wrap__name={"Vcenter-AX800,Vcenter-AX800II"}
              />
              <Card
                card__type__img={focus5}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={" KEN CNC"}
                card__type__wrap__name={"Focus 5"}
              />

              <Card
                card__type__img={vcenter380}
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
                card__type__wrap__name={"Vcenter-AX380"}
              />
              <Card
                card__type__img={vturn}
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
                card__type__wrap__name={"Vturn-X200"}
              />
              <Card
                card__type__img={vcenter630}
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
                card__type__wrap__name={"Vcenter-AX630"}
              />
              <Card
                card__type__img={kenlimax}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "KEN CNC"
                }
                card__type__wrap__name={"KEN LINMAX B"}
              />
              <Card
                card__type__img={kencompact}
                card__type__wrap__country={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={"KEN CNC"}
                card__type__wrap__name={"KEN COMPACT B"}
              />
            </div>
          </div>
          <div className="frezerni__first">
            <h2 className="frezerniy__type__first">
            {
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.titleF
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.titleF
                    : language?.english?.frezerniyPG?.titleF
                }
            </h2>
            <div className="frezerniy__type__first__wrap">
              <Card
                card__type__img={vcenter145}
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
                card__type__wrap__name={"Vcenter-145"}
              />
              <Card
                card__type__img={vcenter165}
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
                card__type__wrap__name={"Vcenter-165"}
              />
              <Card
                card__type__img={vcenter205}
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
                card__type__wrap__name={"Vcenter-205"}
              />
              <Card
                card__type__img={vcenter76}
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
                card__type__wrap__name={"Vcenter-F76/F106"}
              />
              <Card
                card__type__img={vcenter85b}
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
                card__type__wrap__name={"Vcenter-85B/102B"}
              />
              <Card
                card__type__img={vcenter85}
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
                card__type__wrap__name={"Vcenter-A85/A110"}
              />
              <Card
                card__type__img={vcenterp76}
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
                card__type__wrap__name={"Vcenter-A85/A110"}
              />
              <Card
                card__type__img={vcenterg135}
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
                card__type__wrap__name={"Vcenter-A85/A110"}
              />
              <Card
                card__type__img={vcenter102}
                card__type__wrap__country=  {
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.frezerniyPG?.taiwan
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.frezerniyPG?.taiwan
                    : language?.english?.frezerniyPG?.taiwan
                }
                card__type__wrap__manufacturer={
                  "Victor Taichung Machinery Works Co., Ltd"
                }
                card__type__wrap__name={"Vcenter-A85/A110"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
