import React from "react";
import { useSelector } from "react-redux";
import CardFav from "../components/CardFav";
import { selectFavorites } from "../redux/slices/favoritesSlice";

const Favorites = () => {
  const { items } = useSelector(selectFavorites);

  const cardList = items.map((item, index) => {
    return (
      <CardFav
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

  return <>{cardList}</>;
};

export default Favorites;
