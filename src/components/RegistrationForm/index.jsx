import styles from "./RegistrationForm.module.scss";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import eyeOpen from "../../img/eyeOpen.svg";
import timestampToDate from "../../functions/timestampToDate";
import { SHA256 } from 'crypto-js';

function sha256(str) {
  return SHA256(str).toString();
}

const RegistrationForm = ({ setSignUp }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.get(
        "https://64116313e96e5254e2d3e6c8.mockapi.io/Users"
      );
      if (!data.some((user) => user.login === login)) {
        await axios.post("https://64116313e96e5254e2d3e6c8.mockapi.io/Users", {
          login: login.toLocaleLowerCase(),
          password: sha256(password),
          created: timestampToDate(Date.now()),
        });
        setSignUp((prev) => !prev);
      } else {
        alert('such user already exist')
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {createPortal(
        <div className={styles["form-container"]}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              name="login"
              value={login}
              onChange={handleLoginChange}
              placeholder="Login"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            {password && (
              <img
                className={styles.eyeOpen}
                onClick={handleTogglePassword}
                src={eyeOpen}
                alt="eye"
              />
            )}
            <button className={styles.register} type="submit">
              Register
            </button>
            <button
              className={styles.close}
              onClick={() => setSignUp((prev) => !prev)}
              type="submit"
            >
              Close
            </button>
          </form>
        </div>,
        document.body
      )}
    </>
  );
};

export default RegistrationForm;
