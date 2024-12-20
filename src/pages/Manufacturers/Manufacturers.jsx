import React from "react";
import "./manufacturers.css";
import Card_manufacturer from "../../UI/Card_manufacturer/Card_manufacturer";
import Zeiss from "../../assets/images/zeiss.png";
import Comec from "../../assets/images/comec.jpg";
import Chmer from "../../assets/images/chmer.png";
import Dispa from "../../assets/images/dispa.png";
import Beke from "../../assets/images/beke.png";
import Gweike from "../../assets/images/gweike.jpg";
import Inanlar from "../../assets/images/inanlar.jpeg";
import Induction from "../../assets/images/induction.jpg";
import Ken from "../../assets/images/ken.png";
import Palmary from "../../assets/images/palmary.jpg";
import Ram from "../../assets/images/ramRobotics.jpeg";
import SistemTechnic from "../../assets/images/sistemTechnic.jpg";
import ShanhaiTHL from "../../assets/images/shanhaithl.jpg";
import Thread from "../../assets/images/thread.jpg";
import Victor from "../../assets/images/victor.jpg";
import Werke from "../../assets/images/werke.jpg";
import Yichang from "../../assets/images/yichang.jpg";
import { language } from "../../lang/index.jsx"; 

export const Manufacturers = () => {
  return (
    <>
      <section>
        <div className="container manufacturers">
          <h1 className="manufacturers__title">{localStorage.getItem("lang") === "Russian" ? language?.russian?.header?.manufacturers : (localStorage.getItem("lang") === "Uzbek" ? language?.uzbek?.header?.manufacturers: language?.english?.header?.manufacturers)}</h1>

          <div className="manufacturers__wrap">
            <Card_manufacturer
              manufacturer_link={`https://www.zeiss.com/corporate/en/home.html`}
              manufacturer_link_img={Zeiss}
              manufacturer_link_name={"CARL ZEISS"}
            />
            <Card_manufacturer
              manufacturer_link={`https://www.comecpn.com/en/`}
              manufacturer_link_img={Comec}
              manufacturer_link_name={"Comec"}
            />
            <Card_manufacturer
              manufacturer_link={`https://www.chmer.com/`}
              manufacturer_link_img={Chmer}
              manufacturer_link_name={"CHMER"}
            />
            <Card_manufacturer
              manufacturer_link={`https://www.dispamakina.com/`}
              manufacturer_link_img={Dispa}
              manufacturer_link_name={"Dispa Makina"}
            />
            <Card_manufacturer
              manufacturer_link={`https://www.bekemachine.com/`}
              manufacturer_link_img={Beke}
              manufacturer_link_name={"NANJING BEKE CNC MACHINERY CO., LTD."}
            />
            <Card_manufacturer
              manufacturer_link={`https://www.gweikecnc.com/`}
              manufacturer_link_img={Gweike}
              manufacturer_link_name={"GWEIKE"}
            />
            <Card_manufacturer
              manufacturer_link={`https://www.inanlar.com.tr/en`}
              manufacturer_link_img={Inanlar}
              manufacturer_link_name={"INANLAR"}
            />
            <Card_manufacturer
              manufacturer_link={`https://www.ghinduction.com/`}
              manufacturer_link_img={Induction}
              manufacturer_link_name={"GH INDUCTION GROUP"}
            />
            <Card_manufacturer
              manufacturer_link={`https://www.kencnc.com/`}
              manufacturer_link_img={Ken}
              manufacturer_link_name={"KEN CNC"}
            />
            <Card_manufacturer
              manufacturer_link={`https://www.palmary.com/en`}
              manufacturer_link_img={Palmary}
              manufacturer_link_name={"Palmary"}
            />
            <Card_manufacturer
              manufacturer_link={`https://ramrobotics.com.tr/en-US`}
              manufacturer_link_img={Ram}
              manufacturer_link_name={"RAM ROBOTICS"}
            />
            <Card_manufacturer
              manufacturer_link={`https://thlmachine.en.alibaba.com/`}
              manufacturer_link_img={ShanhaiTHL}
              manufacturer_link_name={"SHANGHAI THL MACHINE TOOLS CO.LTD."}
            />
            <Card_manufacturer
              manufacturer_link={`http://en.xffee.com/Home.html`}
              manufacturer_link_img={SistemTechnic}
              manufacturer_link_name={"SISTEM TEKNIK INDUSTRIAL FURNACES INC."}
            />
            <Card_manufacturer
              manufacturer_link={`https://www.ygmtools.com/`}
              manufacturer_link_img={Thread}
              manufacturer_link_name={"THREAD ROLLING MACHINES GOVAMA"}
            />
            <Card_manufacturer
              manufacturer_link={`https://www.victortaichung.com/machine-tools/index.html`}
              manufacturer_link_img={Victor}
              manufacturer_link_name={"VICTOR TAICHUNG MACHINERY WORKS CO., LTD"}
            />
            <Card_manufacturer
              manufacturer_link={`https://ffg-ea.com/`}
              manufacturer_link_img={Werke}
              manufacturer_link_name={"FFG WERKE GMBH"}
            />
            <Card_manufacturer
              manufacturer_link={`http://www.cjmt.com.cn/en/`}
              manufacturer_link_img={Yichang}
              manufacturer_link_name={"YICHANG CHANGJIANG MACHINE TECHNOLOGY CO., LTD"}
            />
          </div>
        </div>
      </section>
    </>
  );
};
