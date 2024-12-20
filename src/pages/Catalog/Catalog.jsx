import React from "react";
import "./catalog.css"
import CardHome from "../../UI/Card_home/Card_home";
import { NavLink } from "react-router-dom";
import Frezerniy from "../../assets/images/frezerniy.jpg";
import Tokarniy from "../../assets/images/tokar.jpg";
import Zuboobrat from "../../assets/images/zuboobraz.jpg";
import List from "../../assets/images/list.jpg";
import Shlif from "../../assets/images/shlif.jpg";
import Dvigatel from "../../assets/images/dvigatel.jpg";
import Svarka from "../../assets/images/svarka.jpg";
// import Litiye from "../../assets/images/litiyr.jpg";
import { language } from "../../lang/index.jsx";
export const Catalog = () => {
  return (
    <>
      <section className="catalog">
        <div className="container ">
          <div className="about__box">
            {" "}
            <h1 className="about__box__title">{localStorage.getItem("lang") === "Russian" ? language?.russian?.catalogPG?.title : (localStorage.getItem("lang") === "Uzbek" ? language?.uzbek?.catalogPG?.title: language?.english?.catalogPG?.title)}</h1>
            <p className="about__box__desc">
            {localStorage.getItem("lang") === "Russian" ? language?.russian?.catalogPG?.desc : (localStorage.getItem("lang") === "Uzbek" ? language?.uzbek?.catalogPG?.desc: language?.english?.catalogPG?.desc)}
            </p>
          </div>
          </div>
          </section>
          <section>
          <div className="home__catalog container">
          <h2 className="home__catalog__title">
            {" "}
            {localStorage.getItem("lang") === "Russian" ? language?.russian?.catalogwrapTitle : (localStorage.getItem("lang") === "Uzbek" ? language?.uzbek?.catalogwrapTitle: language?.english?.catalogwrapTitle)}
          </h2>
          <div className=" home__catalog_s">
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
        </div>
        
      </section>
    </>
  );
};
