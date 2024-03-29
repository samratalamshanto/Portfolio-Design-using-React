import React, { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faEnvelopeOpenText,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const msgSend = <FontAwesomeIcon icon={faEnvelope} />;

const MailForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const { name, email, msg } = user;

  const onChangeValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const showToastMessage = () => {
    toast.success(
      `Hello, ${name}. Your msg is sent. Thank you. Have a good day.`,
      {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-message",
        autoClose: 4000,
      }
    );
  };

  const onHandleForm = (e) => {
    e.preventDefault();

    showToastMessage();

    //axios
    let axiosConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(user),
    };
    axios
      .post("https://samrat-alam.herokuapp.com/create", user, axiosConfig) // "https://localhost:5000/create"
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error>>>>>> ", err);
      });

    setUser({
      name: "",
      email: "",
      msg: "",
    });
  };

  return (
    <>
      <div className="mail_form">
        <ToastContainer />
        <form action="" onSubmit={onHandleForm}>
          <div className="name_div">
            <label htmlFor="">Name: </label>
            <input
              type="text"
              placeholder="name"
              value={name}
              id="name"
              name="name"
              onChange={onChangeValue}
              required
            />
          </div>

          <div className="email_div">
            <label htmlFor="">Email: </label>
            <input
              type="email"
              placeholder="your@email.address"
              name="email"
              id="email"
              onChange={onChangeValue}
              value={email}
              required
            />
          </div>
          <div className="msg_div">
            <label htmlFor="">Message: </label>

            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Write message here.."
              value={msg}
              onChange={onChangeValue}
              required
            ></textarea>
          </div>
          <div className="btn_div">
            <button className="btn_shadow" type="submit">
              <span>
                <h3>
                  Send<span> {msgSend}</span>
                </h3>
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MailForm;
