import React from "react";
import "./Header.hero.css";
import "../../App.css";
import hero from "../../pic/png/hero.png";
import { Typewriter } from "react-simple-typewriter";

const HeaderHero = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top hero_container">
          <div className="left top">
            <h3>Welcome to my world...</h3>
            <h1>
              Hi, I'm <span>Samrat Alam</span>
            </h1>
            <h2>
              a{" "}
              <span>
                Self Believer | Developer | <br /> Coder | Learner.
              </span>
              <span>
                <Typewriter
                  words={[""]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>Visit My Protfolio And Keep Your Feedback..</p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Find With Me:</h4>
                <button className="btn_shadow">
                  <a href="https://www.facebook.com/profile.php?id=100003190767005">
                    <i className="fab fa-facebook"></i>
                  </a>
                </button>
                <button className="btn_shadow">
                  <a href="https://www.linkedin.com/in/samrat-alam-8392b5167/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </button>
                <button className="btn_shadow">
                  <a href="https://github.com/samratalamshanto">
                    <i className="fab fa-github"></i>
                  </a>
                </button>
                {/* <button className="btn_shadow">
                  <a href="https://www.instagram.com/samratshanto/?hl=en">
                    {" "}
                    <i
                      class="fab fa-researchgate"
                      style={{ fontSize: "17px" }}
                    ></i>
                  </a>
                </button> */}
                <button className="btn_shadow">
                  <a href="https://www.instagram.com/samratshanto/?hl=en">
                    {" "}
                    <i className="fab fa-instagram"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="right top">
            <div className="right_img">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderHero;
