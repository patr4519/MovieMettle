import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <a href="/">MovieMettle</a>
      </div>
    </header>
  );
};

export default Header;