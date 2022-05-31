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
                <h3>Email: samratalamshanto710@gmail.com</h3>
              </div>

              <div className="content">
                <h2>For More Details:</h2>
                <h2>Contact:</h2>
                <br />
                <button className="btn_shadow">
                  <i className="fab fa-facebook"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-github"></i>
                </button>
                <button className="btn_shadow">
                  <i className="fab fa-linkedin"></i>
                </button>
              </div>
            </div>

            <div class="footer_bottom text-center">
              <hr />
              Copyright 2022 @samrat alam shanto
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
