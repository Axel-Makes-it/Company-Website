import React from "react";
import "../styles/Nav.css";
import logo from "../images/logo.svg";

function Nav() {
  return (
    <div className="nav__container">
      <div className="nav">
        <ul className="nav-ul-one">
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>
              Solutions <div id="plus">+</div>
            </span>
          </li>
          <li>
            <span>Pricing</span>
          </li>
        </ul>
        <div className="logo">
          <img src={logo} width={45} alt="logo" />{" "}
          <span>
            Click2<span id="dot">.</span>ai
          </span>
        </div>
        <ul>
          <li>
            <span>Log In</span>
          </li>
          <li>
            <span id="signup">Sign Up</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
