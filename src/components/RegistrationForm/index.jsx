import styles from "./RegistrationForm.module.scss";
import React, { useState } from "react";
import axios from "axios";
import eyeOpen from "../../img/eyeOpen.svg";

const RegistrationForm = ({ setSignUp }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Add state for password visibility

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
      await axios.post("https://64116313e96e5254e2d3e6c8.mockapi.io/Users", {
        login: login,
        password: password,
        created: Date.now(),
      });
      setSignUp((prev) => !prev);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles["form-container"]}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default RegistrationForm;
