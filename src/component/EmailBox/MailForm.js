import React, { useState } from "react";

const MailForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const { name, email, msg } = user;
  const onHandleForm = (e) => {
    console.log(user);
    console.log("submitted");
    e.preventDefault();
    setUser({
      name: "",
      email: "",
      msg: "",
    });
  };
  const onChangeValue = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="mail_form">
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
              type="text"
              placeholder="email"
              name="email"
              id="email"
              onChange={onChangeValue}
              value={email}
              required
            />
          </div>
          <div className="msg_div">
            <label htmlFor="">Message:</label>

            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Write some notes.."
              value={msg}
              onChange={onChangeValue}
              required
            ></textarea>
          </div>
          <div className="btn_div">
            <button className="btn_shadow" type="submit">
              <h3>Send</h3>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MailForm;
