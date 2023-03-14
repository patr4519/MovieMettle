import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "./components/CardItem";
import Header from "./components/Header";
import MainInput from "./components/MainInput";
import { fetchMovies } from "./redux/slices/movieSlice";
import { selectMovies } from "./redux/slices/movieSlice";

function App() {
  const dispatch = useDispatch();
  const { movies, status } = useSelector(selectMovies);

  const cardList = movies.map((item, index) => (
    <CardItem
      title={item.Title}
      poster={item.Poster}
      runtime={item.Runtime}
      country={item.Country}
      year={item.Year}
      genre={item.Genre}
      key={index}
    />
  ));

  React.useState(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="App">
      <Header />
      <MainInput />
      {status === "rejected" ? (
        <div>Error</div>
      ) : (
        <div className="cardList">
          {status === "pending" ? <div>Loading...</div> : cardList}
        </div>
      )}
    </div>
  );
}

export default App;
