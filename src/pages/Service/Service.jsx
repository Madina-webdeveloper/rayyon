import React from "react";
import "./service.css";
import Card_service from "../../UI/Card_service/Card_service";
import logo from "../../assets/images/logo.png";
import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
import service4 from "../../assets/images/service4.jpg";
import service3 from "../../assets/images/service3.jpg";
import service5 from "../../assets/images/service5.jpg";
import service6 from "../../assets/images/service6.jpg";
import service7 from "../../assets/images/service7.jpg";
import service8 from "../../assets/images/service8.jpg";
import { language } from "../../lang/index.jsx";
export const Service = () => {
  return (
    <>
      <section className="service_s">
        <div className="container service">
          <h1 className="service__title">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.servicePG?.title
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.servicePG?.title
              : language?.english?.servicePG?.title}
          </h1>

          <div className="service__wrap">
            <div className="service__wrap_box">
              <p className="service__wrap_box_desc">
                {localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.servicePG?.desc
                  : localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.servicePG?.desc
                  : language?.english?.servicePG?.desc}
              </p>
              <img src={logo} alt="logo" />
            </div>
            </div>
            </div>
            </section>
            
            <div className="service__wrap__box container">
              <Card_service
                imgService={service1}
                titleService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap1?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap1?.title
                    : language?.english?.servicePG?.wrap1?.title
                }
                descService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap1?.desc
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap1?.desc
                    : language?.english?.servicePG?.wrap1?.desc
                }
              />
              <Card_service
                imgService={service2}
                titleService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap2?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap2?.title
                    : language?.english?.servicePG?.wrap2?.title
                }
                descService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap2?.desc
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap2?.desc
                    : language?.english?.servicePG?.wrap2?.desc
                }
              />
              <Card_service
                imgService={service3}
                titleService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap3?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap3?.title
                    : language?.english?.servicePG?.wrap3?.title
                }
                descService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap3?.desc
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap3?.desc
                    : language?.english?.servicePG?.wrap3?.desc
                }
              />
              <Card_service
                imgService={service4}
                titleService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap4?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap4?.title
                    : language?.english?.servicePG?.wrap4?.title
                }
                descService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap4?.desc
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap4?.desc
                    : language?.english?.servicePG?.wrap4?.desc
                }
              />
              <Card_service
                imgService={service5}
                titleService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap5?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap5?.title
                    : language?.english?.servicePG?.wrap5?.title
                }
                descService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap5?.desc
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap5?.desc
                    : language?.english?.servicePG?.wrap5?.desc
                }
              />
              <Card_service
                imgService={service6}
                titleService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap6?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap6?.title
                    : language?.english?.servicePG?.wrap6?.title
                }
                descService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap6?.desc
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap6?.desc
                    : language?.english?.servicePG?.wrap6?.desc
                }
              />
              <Card_service
                imgService={service7}
                titleService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap7?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap7?.title
                    : language?.english?.servicePG?.wrap7?.title
                }
                descService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap7?.desc
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap7?.desc
                    : language?.english?.servicePG?.wrap7?.desc
                }
              />
              <Card_service
                imgService={service8}
                titleService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap8?.title
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap8?.title
                    : language?.english?.servicePG?.wrap8?.title
                }
                descService={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.servicePG?.wrap8?.desc
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.servicePG?.wrap8?.desc
                    : language?.english?.servicePG?.wrap8?.desc
                }
              />
            </div>
         
       
      
    </>
  );
};
