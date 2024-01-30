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
        className={"flex justify-between items-center w-340 relative md:w-full"}
      >
        <a href={""} className={"w-28 inline-block"}>
          <img src={logo} alt="" className={"w-full object-cover"} />
        </a>

        <nav
          className={`${
            isHidden ? "" : "hidden"
          } absolute bg-white shadow-lg rounded-sm-ext w-340 md:w-fit top-14 md:static md:block  md:shadow-none`}
        >
          <ul
            className={
              "flex flex-col gap-6  items-center justify-center py-6 md:py-0 font-500 text-veryDarkBlue md:flex-row md:gap-4 md:text-sm"
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
