import React, { useState } from "react";

import styles from "./LoginForm.module.scss";

import axios from "axios";

import Form from "./Form";

export const SignIn = () => {
  const [signInLog, setSignInLog] = useState("");
  const [signInPwd, setSignInPwd] = useState("");
  const [email, setEmail] = useState("");

  const auth = {
    login: signInLog,
    password: signInPwd,
    email: email,
  };

  const signIn = async () => {
    if (signInLog === "" || signInPwd === "" || email === "") {
      alert("Fill in all the fields");
    } else {
      await axios.post("https://sneakers-course.herokuapp.com/api/users", auth);
      window.location.href = "/LoginForm"; // need for renew component and get data in login form
    }
    setSignInLog("");
    setSignInPwd("");
    setEmail("");
  };

  return (
    <div className="sneakers">
      <Form
        choice={false}
        setEmail={setEmail}
        email={email}
        setSignInLog={setSignInLog}
        signInLog={signInLog}
        setSignInPwd={setSignInPwd}
        signInPwd={signInPwd}
        signIn={signIn}
      />
    </div>
  );
};
