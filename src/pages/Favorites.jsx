import React from "react";
import { useSelector } from "react-redux";
import CardFav from "../components/CardFav";
import EmptyFavorites from "../components/EmptyFavorites";
import MyPopupForm from "../components/PopupForm";
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
        key={item.Title}
      />
    );
  });

  return (
    <div className="fav-wrapper">
      {items.length > 0 ? (
        <>
          <h3>Your favorites film(s):</h3>
          <MyPopupForm />
          {cardList}
        </>
      ) : (
        <EmptyFavorites />
      )}
    </div>
  );
};

export default Favorites;
