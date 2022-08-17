import React, { useRef } from "react";

import "./Header.hero.css";
import "../../App.css";

import hero from "../../pic/png/hero.png";
import { Typewriter, useTypewriter } from "react-simple-typewriter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import backgroundVideo from "../../pic/video/white bg.mp4"; ///white bg.mp4

const facebook = <FontAwesomeIcon icon={faFacebook} />;
const github = <FontAwesomeIcon icon={faGithub} />;
const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />;
const insta = <FontAwesomeIcon icon={faInstagram} />;
const phone = <FontAwesomeIcon icon={faPhone} />;

const HeaderHero = () => {
  const { text } = useTypewriter({
    words: [" Developer", " Learner", " Coder", " Self Believer"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 70,
    delaySpeed: 1000,
  });

  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.7;
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top hero_container">
          <video
            autoPlay
            playbackRate={2}
            preload
            loop
            muted
            ref={videoRef}
            onCanPlay={() => setPlayBack()}
            id="background_video"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="left top">
            <h3>Welcome to my world...</h3>
            <h1>
              Hi, I'm <span>Samrat Alam</span>
            </h1>
            <h2>
              a{" "}
              <span>
                {text}
                <span className="cursor">|</span>
              </span>
            </h2>
            <p>Visit My Portfolio And Send Me Your Feedback.</p>
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Find With Me:</h4>
                <button className="btn_shadow">
                  <a
                    href="https://www.facebook.com/profile.php?id=100003190767005"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {facebook}
                  </a>
                </button>
                <button className="btn_shadow">
                  <a
                    href="https://www.linkedin.com/in/samrat-alam-8392b5167/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {linkedin}
                  </a>
                </button>
                <button className="btn_shadow">
                  <a
                    href="https://github.com/samratalamshanto"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {github}
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
                {/* <button className="btn_shadow">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://www.instagram.com/samratshanto/?hl=en"
                  >
                    {insta}
                  </a>
                </button> */}
                <button className="btn_shadow">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="tel:+8801674937832"
                  >
                    {phone}
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
