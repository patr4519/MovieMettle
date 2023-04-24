import styles from "./LoginingForm.module.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCurUser } from "../../redux/slices/curUserSlice";
import { add } from "../../redux/slices/favoritesSlice";
import close from "../../img/closeFlashError.svg";
import eyeOpen from "../../img/eyeOpen.svg";
import axios from "axios";
import { createPortal } from "react-dom";

const LoginingForm = ({ setSignIn }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [flashError, setFlashError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

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
      let user = null;

      for (let i = 0; i < data.length; i++) {
        if (data[i].login === login && data[i].password === password) {
          user = data[i];
          dispatch(addCurUser(user));
          localStorage.setItem("curUser", JSON.stringify(user));
          if (user.favorites) {
            dispatch(add(user.favorites));
          }
          setSignIn((prev) => !prev);
          break;
        }
      }
      if (!user) {
        setFlashError((prev) => !prev);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {createPortal(
        <div className={styles["form-container"]}>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            {flashError && (
              <div className={styles.flashError}>
                Incorrect username or password.
                <img
                  onClick={() => setFlashError((prev) => !prev)}
                  className={styles.close}
                  height={16}
                  width={16}
                  src={close}
                  alt="close"
                />
              </div>
            )}
            <input
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
            <button className={styles.login} type="submit">
              Login
            </button>
            <button
              className={styles.close}
              onClick={() => setSignIn((prev) => !prev)}
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

export default LoginingForm;
