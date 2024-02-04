import { useState } from "react";
import emailValidator from "../emailValidator";
import logo from "../images/logo-white.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

function Footer() {
  const [isValid, setIsValid] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  function validEmail() {
    setIsValid(emailValidator(emailInput));
    // console.log(isValid);
  }

  return (
    <div>
      <footer className={""}>
        <div className={"bg-brightRed"}>
          <section
            className={
              "mx-auto flex w-360 flex-col items-center justify-center py-24 md:w-1100 md:flex-row md:justify-between  md:py-12"
            }
          >
            <h2
              className={
                "max-w-[300px] text-center text-5xl font-500 text-VeryLightGray  md:max-w-[350px] md:text-left md:text-3xl"
              }
            >
              Simplify how your team works today.
            </h2>
            <button
              className={
                "mt-6  rounded-3xl bg-VeryLightGray px-5 py-2 font-500 text-brightRed shadow-lg md:mt-0"
              }
            >
              Get started
            </button>
          </section>
        </div>

        <div className={" bg-veryDarkBlue "}>
          <div
            className={
              "relative mx-auto flex w-340  flex-col-reverse gap-10 py-10 md:w-1100 md:flex-row md:items-start md:justify-between md:gap-0 md:py-6"
            }
          >
            <section
              className={
                " flex h-40 flex-col-reverse items-center gap-10 py-2 md:flex-col md:justify-between "
              }
            >
              <p
                className={
                  "text-xs text-VeryLightGray md:absolute md:-right-3 md:top-32"
                }
              >
                Copyright 2020. All Rights Reserved.
              </p>

              <img className={""} src={logo} alt="" />

              <div
                className={
                  "footer-icons flex w-340 items-center justify-between md:w-full md:gap-4 "
                }
              >
                <img src={facebook} alt="" />
                <img src={youtube} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
                <img src={instagram} alt="" />
              </div>
            </section>

            <section className={"mx-aut w-300"}>
              <ul
                className={
                  "footer-ul flex h-40 flex-col flex-wrap text-VeryLightGray"
                }
              >
                <li>Home</li>
                <li>Pricing</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Community</li>
                <li>Privacy Policy</li>
              </ul>
            </section>

            <section
              className={
                " flex w-340 flex-col justify-between md:mx-0 md:w-260 md:flex-row  md:py-0"
              }
            >
              <div className={"relative flex gap-2"}>
                <input
                  className={"w-340 rounded-3xl px-4 outline-none  md:w-200"}
                  type="email"
                  placeholder={"Updates in your inbox..."}
                  name={"emailInput"}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <button onClick={validEmail} className={"btn"}>
                  Go
                </button>
                <span
                  className={`${
                    isValid ? "hidden" : ""
                  }text-brightRed  absolute left-2 top-12 text-xs`}
                >
                  Please enter a valid email.
                </span>
              </div>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
