import React from "react";
import styles from "./Header.module.scss";
import favIcon from "../../img/favorites.png";
import profile_Icon from "../../img/profile_Icon.svg";
import avatar from "../../img/avatar.png";
import exit from "../../img/exit.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/slices/movieSlice";
import { selectFavorites } from "../../redux/slices/favoritesSlice";
import RegistrationForm from "../RegistrationForm";
import LoginingForm from "../LoginingForm";
import { clearCurUser, selectCurUser } from "../../redux/slices/curUserSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [showSign, setShowSign] = React.useState(false);
  const [signUp, setSignUp] = React.useState(false);
  const [signIn, setSignIn] = React.useState(false);
  const curUser = useSelector(selectCurUser).items[0];
  const { items } = useSelector(selectFavorites);
  const favCount = items.length;

  return (
    <header>
      <div onClick={() => dispatch(fetchMovies())} className={styles.logo}>
        <Link to="/">MovieMettle</Link>
      </div>
      <div className={styles.signPanel}>
        {!curUser ? (
          <>
            <img
              height={25}
              onClick={() => setShowSign((prev) => !prev)}
              src={profile_Icon}
              alt="profile_Icon"
            />
            {showSign && (
              <div className={styles.sign}>
                <button
                  className={styles.signIn}
                  onClick={() => setSignIn((prev) => !prev)}
                >
                  Sign In
                </button>
                <button
                  className={styles.signUp}
                  onClick={() => setSignUp((prev) => !prev)}
                >
                  Sign Up
                </button>
              </div>
            )}
            {signUp && <RegistrationForm setSignUp={setSignUp} />}
            {signIn && <LoginingForm setSignIn={setSignIn} />}
          </>
        ) : (
          <div className={styles.avatar}>
            <img height={45} src={avatar} alt="avatar" />
            <span>{curUser.login}</span>
            <img onClick={() => {
              localStorage.clear();
              // window.location.reload();
              dispatch(clearCurUser())
            }} width={20} className={styles.exit} src={exit} alt="exit" />
          </div>
        )}
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
