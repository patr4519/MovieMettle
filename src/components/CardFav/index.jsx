import styles from "./CardFav.module.scss";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/slices/favoritesSlice";

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

  const removeCard = (title) => {
    let favArr = JSON.parse(localStorage.getItem("favorites"));
    let newArr = favArr.filter((obj) => obj.Title !== title)
    localStorage.setItem("favorites", JSON.stringify(newArr));

    dispatch(remove(title));
  };

  let imd;
  let rt;
  let metacritic;

  for (let i = 0; i < ratings.length; i++) {
    imd = ratings[0]?.Value;
    rt = ratings[1]?.Value;
    metacritic = ratings[2]?.Value;
  }

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
        <p className={styles.movieDetails}>
          Internet Movie Database: <span className={styles.bold}>{imd}</span>
        </p>
        <p className={styles.movieDetails}>
          Rotten Tomatoes: <span className={styles.bold}>{rt}</span>
        </p>
        <p className={styles.movieDetails}>
          Metacritic: <span className={styles.bold}>{metacritic}</span>
        </p>
      </div>
      <button onClick={() => removeCard(item.Title)}>Remove</button>
    </div>
  );
};

export default CardFav;
