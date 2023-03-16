import React from "react";
import styles from "./Header.module.scss";
import favIcon from "../../img/favorites.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/slices/movieSlice";
import { selectFavorites } from "../../redux/slices/favoritesSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectFavorites);
  const favCount = items.length;

  return (
    <header>
      <div onClick={() => dispatch(fetchMovies())} className={styles.logo}>
        <Link to="/">MovieMettle</Link>
      </div>
      <div className={styles.favorites}>
        <img width={30} className="favIcon" src={favIcon} alt="favIcon" />
        <Link to="/favorites">Favorites</Link>
        {favCount > 0 && <span className={styles.favCount}>{favCount}</span>}
      </div>
    </header>
  );
};

export default Header;
