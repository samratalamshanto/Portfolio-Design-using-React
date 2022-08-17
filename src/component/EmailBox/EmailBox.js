import React from "react";

import MailForm from "./MailForm";
import "./EmailBox.css";
import "../../App.css";

const mailimg =
  "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-send-mail-communication-icongeek26-linear-colour-icongeek26.png";
const EmailBox = () => {
  return (
    <>
      <section className="emailbox" id="emailbox">
        <div className=" container_email">
          <div className="email_box">
            <br />
            <div className="text-center email_box_heading">
              <img src={mailimg} alt="" />
              <h1>Send Mail:</h1>
            </div>
            <br />
            <div className="mail_form_div">
              <MailForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailBox;
