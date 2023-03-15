import React from "react";
import styles from "./Header.module.scss";
import favIcon from "../../img/favorites.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/slices/movieSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <div onClick={() => dispatch(fetchMovies())} className={styles.logo}>
        <Link to="/">MovieMettle</Link>
      </div>
      <div className={styles.favorites}>
        <img width={30} className="favIcon" src={favIcon} alt="favIcon" />
        <Link to="/favorites">Favorites</Link>
      </div>
    </header>
  );
};

export default Header;
