import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { lang, language, setSelectionsLang } from "../lang/index.jsx";
import LOGO from "../assets/images/logo.png";
import uk from "../assets/images/russia.png";
import russia from "../assets/images/uk.png";
import uzbek from "../assets/images/uzbek.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(localStorage.getItem("lang"));

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <Link to="/" className="title">
              <img src={LOGO} alt="logo" className="header__logo" />
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
              <li>
                <NavLink to="/about">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.about
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.about
                    : language?.english?.header?.about}
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.service
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.service
                    : language?.english?.header?.service}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.contact
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.contact
                    : language?.english?.header?.contact}
                </NavLink>
              </li>
              <li>
                <NavLink to="/manufacturers">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.manufacturers
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.manufacturers
                    : language?.english?.header?.manufacturers}
                </NavLink>
              </li>
              <li>
                <NavLink to="/catalog">
                  {localStorage.getItem("lang") === "Russian"
                    ? language?.russian?.header?.catalog
                    : localStorage.getItem("lang") === "Uzbek"
                    ? language?.uzbek?.header?.catalog
                    : language?.english?.header?.catalog}
                </NavLink>
              </li>
              <select
                className="nav__select"
                onChange={(e) => {
                  setSelectionsLang(e?.target?.value);
                }}
              >
                <option value= {localStorage.getItem("lang") === lang.english
                    ? lang.english
                    : localStorage.getItem("lang") === lang.russian
                    ? lang.russian
                    : lang.uzbek}>
                  {localStorage.getItem("lang") === lang.english
                    ? lang.english
                    : localStorage.getItem("lang") === lang.russian
                    ? lang.russian
                    : lang.uzbek}
                </option>
                <option
                  value={
                    localStorage.getItem("lang") !== lang.russian
                      ? lang.russian
                      : localStorage.getItem("lang") === lang.english
                      ? lang.english
                      : lang.uzbek
                  }
                >
                  {localStorage.getItem("lang") !== lang.russian
                    ? lang.russian
                    : localStorage.getItem("lang") === lang.english
                    ? lang.english
                    : lang.uzbek}
                </option>

                <option
                  value={
                    localStorage.getItem("lang") !== lang.english
                      ? lang.english
                      : lang.russian
                  }
                >
                  {localStorage.getItem("lang") !== lang.english
                    ? lang.english
                    : lang.uzbek}
                </option>
              </select>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
