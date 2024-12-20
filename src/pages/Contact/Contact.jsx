import React ,{useState} from "react";
import "./contact.css";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { language } from "../../lang/index.jsx";

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [mobile, setMobile] = useState("");
  const [person, setPerson] = useState([]);
  const [email, setEmail] = useState("");

  const contactPerson = () => {
    const check = {
      firstName: firstName.trim().length === 0,
      email: email.trim().length === 0,
      mobile: mobile.trim().length === 0,
    };

    let chat_id = -1001632914715;
    let text = `Name: ${firstName}\nEmail: ${email}\nMobile: +${mobile}`;
    let your_token = "5904539735:AAGZhN_GiOzlIbldJw88KkL21KYIgB-MSj0";
    let url = `https://api.telegram.org/bot${your_token}/sendMessage?chat_id=${chat_id}&text=${text}/`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    if (check.firstName || check.lastName || check.email || check.mobile) {
      toast.error("Iltimos ma'lumotlaringizni kiriting ", {
        position: "top-right",
        autoClose: 500,
      });
    } else {
      const newPerson = {
        firstName: firstName,

        email: email,
        mobile: mobile,
      };
      setPerson([...person, newPerson]);
      setFirstName("");
      setEmail(""), setMobile("");
      toast.success(
        "Ma'lumotlaringiz yuborildi , tez orada adminlarimiz aloqaga chiqishadi",
        {
          position: "top-right",
          autoClose: 1000,
        }
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <section>
        <div className="container contact">
          <h1 className="contact__title">
            {localStorage.getItem("lang") === "Russian"
              ? language?.russian?.header?.contact
              : localStorage.getItem("lang") === "Uzbek"
              ? language?.uzbek?.header?.contact
              : language?.english?.header?.contact}
          </h1>
          <form
            action="#"
            onSubmit={() => {
              contactPerson();
              console.log(123);
            }}
            className="home__contact__form contact__wrap"
          >
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
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
              onChange={(e) => setMobile(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                localStorage.getItem("lang") === "Russian"
                  ? language?.russian?.homePG?.contactSC?.email
                  : localStorage.getItem("lang") === "Uzbek"
                  ? language?.uzbek?.homePG?.contactSC?.email
                  : language?.english?.homePG?.contactSC?.email
              }
              className="booking_sec_form_input"
            />

            <button
              onSubmit={() => {
                contactPerson();
              }}
              className="booking_sec_form_btn"
              type="submit"
            >
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
