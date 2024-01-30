import { useState } from "react";
import emailValidator from "../emailValidator";

function Footer() {
  const [isValid, setIsValid] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  function validEmail() {
    setIsValid(emailValidator(emailInput));
    console.log(isValid);
  }

  return (
    <div>
      <footer className={""}>
        <div className={"bg-brightRed"}>
          <section
            className={
              "md:w-1100 w-360 mx-auto flex flex-col justify-center items-center md:flex-row md:justify-between md:px4 md:py-8 py-24"
            }
          >
            <h2
              className={
                "font-700 text-3xl text-center md:text-left text-VeryLightGray  w-260 md:w-450"
              }
            >
              Simplify how your team works today.
            </h2>
            <button
              className={
                "bg-VeryLightGray text-brightRed rounded-3xl py-2 px-5 font-500 shadow-lg mt-6 md:mt-0"
              }
            >
              Get started
            </button>
          </section>
        </div>

        <div className={"bg-veryDarkBlue"}>
          <section
            className={
              "w-340 md:w-1100 mx-auto flex justify-between flex-col md:flex-row py-10"
            }
          >
            <div className={"flex gap-2 relative"}>
              <input
                className={"w-340 md:w-200 outline-none  rounded-3xl px-4"}
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
                }text-brightRed  text-xs absolute top-11 left-2`}
              >
                Please enter a valid email.
              </span>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
