import React from "react";

import "../../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className=" f_flex">
          <div className="footer_container">
            <div className="content_footer d_flex">
              <div>
                <h2>Samrat Alam</h2>
                <h3>
                  <i className="fas fa-envelope"></i>
                  samratalamshanto710@gmail.com
                </h3>
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
                    <i className="fab fa-facebook"></i>
                  </a>
                </button>
                <button className="btn_shadow_footer">
                  <a
                    href="https://www.linkedin.com/in/samrat-alam-8392b5167/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </button>
                <button className="btn_shadow_footer">
                  <a
                    href="https://github.com/samratalamshanto"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </button>
              </div>
            </div>

            <div class="footer_bottom text-center">
              <hr />
              Copyright 2022 @samrat alam
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
