import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../components/CardItem";
import MainInput from "../components/MainInput";
import NotFoundCard from "../components/NotFoundCard";
import Skeleton from "../components/Skeleton";
import { fetchFavorites } from "../redux/slices/favoritesSlice";
import { fetchMovies } from "../redux/slices/movieSlice";
import { selectMovies } from "../redux/slices/movieSlice";

function Home() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(selectMovies);

  function response(items) {
    if (items.every((obj) => obj.Response === "True")) {
      const cardList = items.map((item, index) => {
        return (
          <CardItem
            item={item}
            title={item.Title}
            poster={item.Poster}
            runtime={item.Runtime}
            country={item.Country}
            year={item.Year}
            genre={item.Genre}
            ratings={item.Ratings}
            key={index}
          />
        );
      });

      return cardList;
    } else {
      return <NotFoundCard />;
    }
  }

  const getInitData = async () => {
    dispatch(fetchMovies()).then(dispatch(fetchFavorites()));
  };

  React.useState(() => {
    getInitData();
  }, []);

  return (
    <div className="Home">
      <MainInput />
      {status === "rejected" ? (
        <div>Error</div>
      ) : (
        <div className="cardList">
          {status === "pending" ? <Skeleton /> : response(items)}
        </div>
      )}
    </div>
  );
}

export default Home;
