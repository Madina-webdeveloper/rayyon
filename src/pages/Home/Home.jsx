import React from "react";
import "./home.css";
import CardHome from "../../UI/Card_home/Card_home";
import Frezerniy from "../../assets/images/frezerniy.jpg";
import Tokarniy from "../../assets/images/tokar.jpg";
import Zuboobrat from "../../assets/images/zuboobraz.jpg";
import List from "../../assets/images/list.jpg";
import Shlif from "../../assets/images/shlif.jpg";
import Dvigatel from "../../assets/images/dvigatel.jpg";
import Svarka from "../../assets/images/svarka.jpg";
// import Litiye from "../../assets/images/litiyr.jpg";
import LOGO from "../../assets/images/logo.png";
import { language } from "../../lang/index.jsx";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
export const Home = ({}) => {
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: "",
      number: "",
      email: "",
    },

    onSubmit: (values) => {
      let chat_id = -1001907647967;
      let text = `Name: ${values?.name} \n\n
       Email: ${values?.email}\n\n 
       Mobile: ${values?.number}`;
      let your_token = "6294235113:AAG1fH6h2gBavXeJA0U3fJTg6ZdMu3hEGX0";
      let url = `https://api.telegram.org/bot${your_token}/sendMessage?chat_id=${chat_id}&text=${text}/`;
      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();

      validation.resetForm();
    },
  });
  return (
    <>
      <section className="hero_S">
        <div className="container hero">
          <h1 className="hero__title">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.homePG?.heroSC?.title
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.heroSC?.title
              : language?.english?.homePG?.heroSC?.title}
          </h1>
          <p className="hero__desc">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.homePG?.heroSC?.desc
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.heroSC?.desc
              : language?.english?.homePG?.heroSC?.desc}
          </p>
          <a href="tel:+998903375353" className="hero__btn">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.homePG?.heroSC?.contact
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.heroSC?.contact
              : language?.english?.homePG?.heroSC?.contact}
          </a>
        </div>
      </section>
      <section>
        <div className="container home__catalog">
          <h2 className="home__catalog__title">
            {" "}
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.homePG?.catalogSC?.title
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.catalogSC?.title
              : language?.english?.homePG?.catalogSC?.title}
          </h2>
          <div className="home__catalog__wrapper">
            <NavLink to="/frezerniy" className="home__catalog__wrapper_link">
              {" "}
              <CardHome
                des_img={Frezerniy}
                card__desc={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.catalogSC?.frezerniy
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.catalogSC?.frezerniy
                    : language?.english?.homePG?.catalogSC?.frezerniy
                }
              />
            </NavLink>

            <NavLink to="/tokarniy" className="home__catalog__wrapper_link">
              <CardHome
                des_img={Tokarniy}
                card__desc={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.catalogSC?.tokarniy
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.catalogSC?.tokarniy
                    : language?.english?.homePG?.catalogSC?.tokarniy
                }
              />
            </NavLink>

            <NavLink to="/zuboobra" className="home__catalog__wrapper_link">
              {" "}
              <CardHome
                des_img={Zuboobrat}
                card__desc={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.catalogSC?.zuboobrat
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.catalogSC?.zuboobrat
                    : language?.english?.homePG?.catalogSC?.zuboobrat
                }
              />
            </NavLink>
            <NavLink to="/list" className="home__catalog__wrapper_link">
              <CardHome
                des_img={List}
                card__desc={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.catalogSC?.list
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.catalogSC?.list
                    : language?.english?.homePG?.catalogSC?.list
                }
              />
            </NavLink>

            <NavLink to="/shlif" className="home__catalog__wrapper_link">
              <CardHome
                des_img={Shlif}
                card__desc={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.catalogSC?.shlif
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.catalogSC?.shlif
                    : language?.english?.homePG?.catalogSC?.shlif
                }
              />
            </NavLink>
            <NavLink to="/dvigatel" className="home__catalog__wrapper_link">
              {" "}
              <CardHome
                des_img={Dvigatel}
                card__desc={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.catalogSC?.dvigatel
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.catalogSC?.dvigatel
                    : language?.english?.homePG?.catalogSC?.dvigatel
                }
              />
            </NavLink>

            <NavLink to="/svarka" className="home__catalog__wrapper_link">
              {" "}
              <CardHome
                des_img={Svarka}
                card__desc={
                  localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.catalogSC?.svarka
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.catalogSC?.svarka
                    : language?.english?.homePG?.catalogSC?.svarka
                }
              />
            </NavLink>
          </div>
        </div>
      </section>

      <section>
        <div className="container home__about">
          <h2 className="home__about__title">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.homePG?.aboutSC?.title
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.homePG?.aboutSC?.title
              : language?.english?.homePG?.aboutSC?.title}
          </h2>
          <div className="home__about_wrap">
            <div className="home__about__left">
              <p className="home__about_desc">
                {localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.homePG?.aboutSC?.desc
                  : localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.homePG?.aboutSC?.desc
                  : language?.english?.homePG?.aboutSC?.desc}
              </p>
            </div>
            <div className="home__about__right">
              <div className="home__about__right_cards">
                <h3 className="home__about__right_cards__title">2020</h3>
                <p className="home__about__right_cards__desc">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.aboutSC?.educationYear
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.aboutSC?.educationYear
                    : language?.english?.homePG?.aboutSC?.educationYear}
                </p>
              </div>
              <div className="home__about__right_cards">
                <h3 className="home__about__right_cards__title">8+</h3>
                <p className="home__about__right_cards__desc">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.aboutSC?.partner
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.aboutSC?.partner
                    : language?.english?.homePG?.aboutSC?.partner}
                </p>
              </div>
              <div className="home__about__right_cards">
                <h3 className="home__about__right_cards__title">100+</h3>
                <p className="home__about__right_cards__desc">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.aboutSC?.equipment
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.aboutSC?.equipment
                    : language?.english?.homePG?.aboutSC?.equipment}
                </p>
              </div>
              <div className="home__about__right_cards">
                <h3 className="home__about__right_cards__title">200+</h3>
                <p className="home__about__right_cards__desc">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.aboutSC?.successfulEq
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.aboutSC?.successfulEq
                    : language?.english?.homePG?.aboutSC?.successfulEq}
                </p>
              </div>
              <div className="home__about__right_cards">
                <h3 className="home__about__right_cards__title">7+</h3>
                <p className="home__about__right_cards__desc">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.aboutSC?.machineTypes
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.aboutSC?.machineTypes
                    : language?.english?.homePG?.aboutSC?.machineTypes}
                </p>
              </div>
              <div className="home__about__right_cards">
                <h3 className="home__about__right_cards__title">1000+</h3>
                <p className="home__about__right_cards__desc">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.homePG?.aboutSC?.satisfiedClient
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.homePG?.aboutSC?.satisfiedClient
                    : language?.english?.homePG?.aboutSC?.satisfiedClient}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container home__service">
          <div className="home__service_desc">
            <h2 className="home__service_desc__title">
              Консультация от наших специалистов
            </h2>
            <p className="home__service_desc__parag">
              Получите бесплатную консультацию от профессионалов, мы найдем для
              вас персональное решение! Свяжитесь с нами или оставьте заявку
              заполнив форму
            </p>
            <div className="home__service_desc_links">
              <a
                href="tel:+998903375353"
                className="home__service_desc_links_now"
              >
                Связаться сейчас
              </a>
              <a href="#contact" className="home__service_desc_links_later">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container home__manufacturers">
          <div className="home__manufacturers__wrap">
            <h2 className="home__manufacturers__wrap__title">
              {localStorage.getItem("lang") === "Russian"
                ? language?.russian?.homePG?.manufacturerSC?.title
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.homePG?.manufacturerSC?.title
                : language?.english?.homePG?.manufacturerSC?.title}
            </h2>
            <p className="home__manufacturers__wrap__desc">
              {localStorage.getItem("lang") === "Russian"
                ? language?.russian?.homePG?.manufacturerSC?.desc
                : localStorage.getItem("lang") === "Uzbek"
                ? language?.uzbek?.homePG?.manufacturerSC?.desc
                : language?.english?.homePG?.manufacturerSC?.desc}
            </p>
          </div>
          <div className="home__manufacturers__wrap__logo">
            <img src={LOGO} alt="logo" />
          </div>{" "}
        </div>
      </section>
      <section>
        <div className="container home__contact">
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
          <form
            className="home__contact__form"
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                validation.setFieldValue("name", e?.target?.value);
              }}
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
              onChange={(e) => {
                console.log(e?.target?.value);
                validation.setFieldValue("number", e?.target?.value);
              }}
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
              onChange={(e) => {
                console.log(e?.value);
                validation.setFieldValue("email", e?.target?.value);
              }}
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
      </section>
    </>
  );
};
