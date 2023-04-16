import React from "react";
import styles from "./Header.module.scss";
import favIcon from "../../img/favorites.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/slices/movieSlice";
import { selectFavorites } from "../../redux/slices/favoritesSlice";
import RegistrationForm from "../RegistrationForm";
import LoginingForm from "../LoginingForm";

const Header = () => {
  const dispatch = useDispatch();
  const [showSign, setShowSign] = React.useState(false);
  const [signUp, setSignUp] = React.useState(false);
  const [signIn, setSignIn] = React.useState(false);
  const { items } = useSelector(selectFavorites);
  const favCount = items.length;

  return (
    <header>
      <div onClick={() => dispatch(fetchMovies())} className={styles.logo}>
        <Link to="/">MovieMettle</Link>
      </div>
      <div className={styles.signPanel}>
        <button onClick={() => setShowSign((prev) => !prev)}>Profile</button>
        {showSign && (
          <div>
            <button onClick={() => setSignIn(prev => !prev)}>Sign In</button>
            <button onClick={() => setSignUp(prev => !prev)}>Sign Up</button>
          </div>
        )}
        {
          signUp && <RegistrationForm setSignUp={setSignUp}/>
        }
        {
          signIn && <LoginingForm setSignIn={setSignIn}/>
        }
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
