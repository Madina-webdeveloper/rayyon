import React from "react";
import "./footer.css";
import { Link, NavLink } from "react-router-dom";
import { language } from "../lang/index.jsx";
import LOGO from "../assets/images/logo.png";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import telegram from "../assets/images/telegram.png";
import instagram from "../assets/images/instagram.png";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container ">
          <div className="footer">
            <div className="footer_left">
              <Link className="footer_left_title">
                <img src={LOGO} alt="logo" className="footer__logo" />
              </Link>
              <p className="footer_text">
                &copy; {new Date().getFullYear()} Copyright: RAYYON GROUP
              </p>
            </div>
            <div className="footer_right">
              <ul className="footer_right_socials">
                {" "}
                <h4 className="footer_right_des_title">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.contact
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.contact
                    : language?.english?.footer?.contact}
                </h4>
                <li>
                  <a
                    href="tel:+998903375353"
                    className="footer_right_socials_link"
                  >
                    <img src={phone} alt="" />
                    +998903375353
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:rayonsabr@gmail.com"
                    className="footer_right_socials_link"
                  >
                    <img src={email} alt="" />
                    rayonsabr@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+998903375353"
                    className="footer_right_socials_link"
                  >
                    <img src={telegram} alt="" />
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+998903375353"
                    className="footer_right_socials_link"
                  >
                    <img src={instagram} alt="" />
                    Instagram
                  </a>
                </li>
              </ul>
              <ul className="footer_right_des">
                <h4 className="footer_right_des_title">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.footer?.informations
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.footer?.informations
                    : language?.english?.footer?.informations}
                </h4>
                <li className="footer_right_des_li">
                  <NavLink to="/about" className="footer_right_des_li_link">
                    {localStorage.getItem("lang") === "Russian"
                      ? language?.russian?.footer?.about
                      : localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.footer?.about
                      : language?.english?.footer?.about}
                  </NavLink>
                </li>
                <li className="footer_right_des_li">
                  <NavLink to="/service" className="footer_right_des_li_link">
                    {localStorage.getItem("lang") === "Russian"
                      ? language?.russian?.footer?.service
                      : localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.footer?.service
                      : language?.english?.footer?.service}
                  </NavLink>
                </li>
                <li className="footer_right_des_li">
                  <NavLink to="/contact" className="footer_right_des_li_link">
                    {localStorage.getItem("lang") === "Russian"
                      ? language?.russian?.footer?.contact
                      : localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.footer?.contact
                      : language?.english?.footer?.contact}
                  </NavLink>
                </li>
                <li className="footer_right_des_li">
                  <NavLink
                    to="/manufacturers"
                    className="footer_right_des_li_link"
                  >
                    {localStorage.getItem("lang") === "Russian"
                      ? language?.russian?.footer?.manufacturers
                      : localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.footer?.manufacturers
                      : language?.english?.footer?.manufacturers}
                  </NavLink>
                </li>
                <li className="footer_right_des_li">
                  <NavLink to="/catalog" className="footer_right_des_li_link">
                    {localStorage.getItem("lang") === "Russian"
                      ? language?.russian?.footer?.catalog
                      : localStorage.getItem("lang") === "Uzbek"
                      ? language?.uzbek?.footer?.catalog
                      : language?.english?.footer?.catalog}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
