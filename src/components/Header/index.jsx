import React from "react";
import styles from "./Header.module.scss";
import favIcon from "../../img/favorites.png"

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <a href="/">MovieMettle</a>
      </div>
      <div className={styles.favorites}>
        <img width={30} className="favIcon" src={favIcon} alt='favIcon'/>
        <a href="/">Favorites</a>
      </div>
    </header>
  );
};

export default Header;