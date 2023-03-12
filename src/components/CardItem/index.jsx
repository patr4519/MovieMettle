import styles from "./CardItem.module.scss";

const CardItem = ({year, genre, country, runtime, poster, title}) => {
  return (
    <div className={styles.movieCard}>
      <img
        src={poster}
        alt="Movie Poster"
        className={styles.moviePoster}
      />
      <div className={styles.movieInfo}>
        <h2 className={styles.movieTitle}>{title}</h2>
        <p className={styles.movieDetails}>
          Year: <span className={styles.year}>{year}</span>
        </p>
        <p className={styles.movieDetails}>
          Genre: <span className={styles.genre}>{genre}</span>
        </p>
        <p className={styles.movieDetails}>
          Country: <span className={styles.country}>{country}</span>
        </p>
        <p className={styles.movieDetails}>
          Duration: <span className={styles.duration}>{runtime}</span>
        </p>
      </div>
    </div>
  );
};

export default CardItem;
