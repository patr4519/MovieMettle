import React from "react";
import styles from "./CardFav.module.scss";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/slices/favoritesSlice";
import PlotModal from "../Modal";
import RatePanel from "../RatePanel";

const CardFav = ({
  item,
  year,
  genre,
  country,
  runtime,
  poster,
  title,
  ratings,
}) => {
  const dispatch = useDispatch();
  const [showRate, setShowRate] = React.useState(false);

  const removeCard = (title) => {
    // let favArr = JSON.parse(localStorage.getItem("favorites"));
    // let newArr = favArr.filter((obj) => obj.Title !== title);
    // localStorage.setItem("favorites", JSON.stringify(newArr));

    dispatch(remove(title));
  };

  const displayRatings = () => {
    return ratings.map((rating, index) => (
      <p className={styles.movieDetails} key={index}>
        {rating.Source}: <span className={styles.bold}>{rating.Value}</span>
      </p>
    ));
  };

  return (
    <div className={styles.movieCard}>
      <img src={poster} alt="Movie Poster" className={styles.moviePoster} />
      <div className={styles.movieInfo}>
        <h2 className={styles.movieTitle}>{title}</h2>
        <p className={styles.movieDetails}>
          Year: <span className={styles.bold}>{year}</span>
        </p>
        <p className={styles.movieDetails}>
          Genre: <span className={styles.bold}>{genre}</span>
        </p>
        <p className={styles.movieDetails}>
          Country: <span className={styles.bold}>{country}</span>
        </p>
        <p className={styles.movieDetails}>
          Duration: <span className={styles.bold}>{runtime}</span>
        </p>
        <hr />
        <p>Ratings:</p>
        {ratings && ratings.length >= 1 ? (
          displayRatings()
        ) : (
          <p className={styles.movieDetails}>No ratings available</p>
        )}
        <PlotModal plot={item.Plot} />
        {showRate === false && (
          <button
            onClick={() => setShowRate((prev) => !prev)}
            className="rateButton"
          >
            Rate the movie
          </button>
        )}
        {showRate && <RatePanel item={item} setShowRate={setShowRate} />}
        {item.rate ? <p className={styles.yourRate}>Your rate: <span className={`${
              item.rate <= 4
                ? styles.redRate
                : item.rate <= 6
                ? styles.greyRate
                : styles.greenRate
            }`}>{item.rate}</span></p> : ""}
      </div>
      <button
        className={styles.removeButton}
        onClick={() => removeCard(item.Title)}
      >
        Remove
      </button>
    </div>
  );
};

export default CardFav;
