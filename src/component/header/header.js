import React, { useState } from "react";
import "./header.css";
import logo from "../../pic/png/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlindsOpen } from "@fortawesome/free-solid-svg-icons";
const open = <FontAwesomeIcon icon="fa-solid fa-blinds-open" />;

const Header = () => {
  //when scroll header part always at top
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  const [mobile, setmobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h2>SamratAlam</h2>
          </div>

          <div className="navlink">
            <ul
              className={mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setmobile(false)}
            >
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#resume">education</a>
              </li>
              <li>
                <a href="#protfolio">portfolio</a>
              </li>
              <li>
                <a href="#research">research</a>
              </li>

              <li>
                <button className="home-btn">
                  <a href="#emailbox">Contact</a>
                </button>
              </li>
            </ul>
            <button className="toogle" onClick={() => setmobile(!mobile)}>
              {mobile ? (
                <i className="fas fa-times close home-btn "></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
