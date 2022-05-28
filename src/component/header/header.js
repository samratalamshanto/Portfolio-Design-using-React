import React, { useState } from "react";
import "./header.css";
import logo from "../../pic/png/logo.png";

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
                <a href="home">home</a>
              </li>
              <li>
                <a href="portfolio">portfolio</a>
              </li>
              <li>
                <a href="contact">contact</a>
              </li>
              <li>
                <a href="blog">blog</a>
              </li>
              <li>
                <button className="home-btn">BUY NOW</button>
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
      <section className="demo"></section>
    </>
  );
};

export default Header;
