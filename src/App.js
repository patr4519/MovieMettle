import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "./components/CardItem";
import MainInput from "./components/MainInput";
import { fetchInitMovies } from "./redux/slices/movieSlice";
import { selectMovies } from "./redux/slices/movieSlice";

function App() {
  const dispatch = useDispatch();
  const { movies, status } = useSelector(selectMovies);

  const getInitMovies = async () => {
    dispatch(fetchInitMovies());
  };

  React.useState(() => {
    getInitMovies();
  }, []);

  return (
    <div className="App">
      <MainInput />

      {status === "pending" ? (
        <div>Loading</div>
      ) : (
        <div className="cardList">
          <ul>
            {movies.map((item, index) => (
              <li key={index}>
                <CardItem />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
