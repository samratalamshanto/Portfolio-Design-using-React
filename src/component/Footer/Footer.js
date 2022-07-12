import React from "react";

import "../../App.css";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpen,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const facebook = <FontAwesomeIcon icon={faFacebook} />;
const github = <FontAwesomeIcon icon={faGithub} />;
const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />;
const gmail = <FontAwesomeIcon icon={faPaperPlane} />;
const phone = <FontAwesomeIcon icon={faPhone} />;

const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className=" f_flex">
          <div className="footer_container">
            <div className="content_footer d_flex">
              <div className="footer_header_top">
                <h2>Samrat Alam</h2>

                <a href="mailto:samratalamshanto710@gmail.com">
                  {" "}
                  <h3> {gmail} To Send Email Click Here !</h3>
                </a>
              </div>

              <div className="content">
                <h2>For More Details</h2>
                <h2>Contact with me:</h2>
                <br />
                <button className="btn_shadow_footer">
                  <a
                    href="https://www.facebook.com/profile.php?id=100003190767005"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {facebook}
                  </a>
                </button>
                <button className="btn_shadow_footer">
                  <a
                    href="https://www.linkedin.com/in/samrat-alam-8392b5167/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {linkedin}
                  </a>
                </button>
                <button className="btn_shadow_footer">
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

            <div class="footer_bottom text-center">
              <hr />
              Copyright 2022 @samrat alam
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
