import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "./components/CardItem";
import MainInput from "./components/MainInput";
import { fetchInitMovies } from "./redux/slices/movieSlice";
import { selectMovies } from "./redux/slices/movieSlice";

function App() {
  const dispatch = useDispatch();
  const { movies, status } = useSelector(selectMovies);

  const getInitMovies = () => {
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
          {movies.map((item, index) => (
            <CardItem
            title={item.Title}
            poster={item.Poster}
            runtime={item.Runtime}
            country={item.Country} 
            year={item.Year}
            genre={item.Genre}
            key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
