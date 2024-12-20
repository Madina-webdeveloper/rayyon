import React from "react";
import "./about.css";
import { language } from "../../lang/index.jsx";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container ">
          <div className="about__box">
            {" "}
            <h1 className="about__box__title">{localStorage.getItem("lang") === "Russian"
              ? language?.russian?.aboutPG?.heroSC?.title
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.aboutPG?.heroSC?.title
              : language?.english?.aboutPG?.heroSC?.title}</h1>
            <p className="about__box__desc">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.aboutPG?.heroSC?.desc
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.aboutPG?.heroSC?.desc
              : language?.english?.aboutPG?.heroSC?.desc}
            </p>
          </div>
          </div>
          </section>
          <section>
            <div className="container">
          <div className="about__wrap">
            <h1 className="about__wrap__title">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.aboutPG?.wrapSC?.title
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.aboutPG?.wrapSC?.title
              : language?.english?.aboutPG?.wrapSC?.title}
            </h1>
            <p className="about__wrap__desc">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.aboutPG?.wrapSC?.desc
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.aboutPG?.wrapSC?.desc
              : language?.english?.aboutPG?.wrapSC?.desc}
            </p>
            <a href="#contact" className="hero__btn about_btn">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.aboutPG?.wrapSC?.btn
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.aboutPG?.wrapSC?.btn
              : language?.english?.aboutPG?.wrapSC?.btn}
            </a>
          </div>

          <div className=" home__contact">
            <h2 className="home__contact__title">
              {localStorage.getItem("lang") === "Russian"
                ? language?.russian?.homePG?.contactSC?.title
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.homePG?.contactSC?.title
                : language?.english?.homePG?.contactSC?.title}
            </h2>
            <p className="home__contact__desc">
              {localStorage.getItem("lang") === "Russian"
                ? language?.russian?.homePG?.contactSC?.desc
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.homePG?.contactSC?.desc
                : language?.english?.homePG?.contactSC?.desc}
            </p>
            <form className="home__contact__form">
              <input
                type="text"
                placeholder={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.contactSC?.name
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.contactSC?.name
                    : language?.english?.homePG?.contactSC?.name
                }
                className="booking_sec_form_input"
              />
              <input
                type="number"
                placeholder={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.contactSC?.number
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.contactSC?.number
                    : language?.english?.homePG?.contactSC?.number
                }
                className="booking_sec_form_input"
              />
              <input
                type="email"
                placeholder={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.contactSC?.email
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.contactSC?.email
                    : language?.english?.homePG?.contactSC?.email
                }
                className="booking_sec_form_input"
              />

              <button className="booking_sec_form_btn" type="submit">
                {localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.homePG?.contactSC?.btn
                  : localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.homePG?.contactSC?.btn
                  : language?.english?.homePG?.contactSC?.btn}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
