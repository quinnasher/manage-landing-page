import logo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import { useState } from "react";

function Header() {
  const [isHidden, setIsHidden] = useState(false);

  function toggleIsHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <div>
      <header
        className={"relative flex w-340 items-center justify-between md:w-full"}
      >
        <a href={""} className={"inline-block w-28"}>
          <img src={logo} alt="" className={"w-full object-cover"} />
        </a>

        <nav
          className={`${
            isHidden ? "" : "hidden"
          } absolute top-14 z-40 w-340 rounded-sm-ext bg-white shadow-lg md:static md:block md:w-fit  md:shadow-none`}
        >
          <ul
            className={
              "flex flex-col items-center  justify-center gap-6 py-6 font-500 text-veryDarkBlue md:flex-row md:gap-4 md:py-0 md:text-sm"
            }
          >
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>

        <button className={"btn hidden md:block"}>
          <span className={""}>Get Started</span>
        </button>

        <div className={"md:hidden"}>
          <button className={`h-10`} onClick={toggleIsHidden}>
            <img
              className={"object-fit"}
              src={isHidden ? closeIcon : hamburgerIcon}
              alt=""
            />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
