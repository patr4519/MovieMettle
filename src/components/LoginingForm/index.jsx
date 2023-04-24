import styles from "./LoginingForm.module.scss";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCurUser } from "../../redux/slices/curUserSlice";
import { add } from "../../redux/slices/favoritesSlice";
import close from "../../img/closeFlashError.svg";

const LoginingForm = ({ setSignIn }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [flashError, setFlashError] = useState(false);
  const dispatch = useDispatch();

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
    <div className={styles["form-container"]}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        {flashError && (
          <div className={styles.flashError}>
            Incorrect username or password.
            <img onClick={() => setFlashError(prev => !prev)} className={styles.close} height={16} width={16} src={close} alt="close" />
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
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
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
    </div>
  );
};

export default LoginingForm;
