import styles from "./CardItem.module.scss";

const CardItem = () => {
  return (
    <div className={styles.movieCard}>
      <img
        src="https://via.placeholder.com/150"
        alt="Movie Poster"
        className={styles.moviePoster}
      />
      <div className={styles.movieInfo}>
        <h2 className={styles.movieTitle}>Movie Title</h2>
        <p className={styles.movieDetails}>
          Year: <span className={styles.year}>YYYY</span>
        </p>
        <p className={styles.movieDetails}>
          Genre: <span className={styles.genre}>Genre</span>
        </p>
        <p className={styles.movieDetails}>
          Country: <span className={styles.country}>Country</span>
        </p>
        <p className={styles.movieDetails}>
          Duration: <span className={styles.duration}>XX min</span>
        </p>
      </div>
    </div>
  );
};

export default CardItem;
