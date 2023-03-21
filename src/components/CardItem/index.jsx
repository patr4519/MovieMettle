import styles from "./CardItem.module.scss";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/favoritesSlice";

const CardItem = ({
  item,
  year,
  genre,
  country,
  runtime,
  poster,
  title,
  ratings,
  addedToFav
}) => {
  const dispatch = useDispatch();

  const addToFav = (item) => {
    let favArr = JSON.parse(localStorage.getItem("favorites"));
    if (favArr !== null) {
      const findTitle = favArr.some((obj) => obj.Title === item.Title);
      if (findTitle) {
        return;
      } else {
        favArr.push(item);
        localStorage.setItem("favorites", JSON.stringify(favArr));
      }
    } else {
      localStorage.setItem("favorites", JSON.stringify([item]));
    }

    dispatch(add(item));
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
        {ratings && ratings.length >= 3 ? (
          displayRatings()
        ) : (
          <p className={styles.movieDetails}>No ratings available</p>
        )}
      </div>
      <button onClick={() => addToFav(item)}>F</button>
    </div>
  );
};

export default CardItem;
