import styles from "./RegistrationForm.module.scss";
import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = ({ setSignUp }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // .put("https://64116313e96e5254e2d3e6c8.mockapi.io/Users/1", {
  //   test: 'test4'
  // })
  // .then(() => console.log('done'))

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://64116313e96e5254e2d3e6c8.mockapi.io/Users", {
        login: login,
        password: password,
        created: Date.now()
      });
      setSignUp((prev) => !prev);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles["form-container"]}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Register</button>
        <button
          className={styles.close}
          onClick={() => setSignUp((prev) => !prev)}
          type="submit"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
