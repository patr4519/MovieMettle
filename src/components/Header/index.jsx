import React from "react";
import styles from "./Header.module.scss";
import favIcon from "../../img/favorites.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <Link to="/">MovieMettle</Link>
      </div>
      <div className={styles.favorites}>
        <img width={30} className="favIcon" src={favIcon} alt="favIcon" />
        {/* <a href="/">Favorites</a> */}
        <Link to="/favorites">Favorites</Link>
      </div>
    </header>
  );
};

export default Header;
