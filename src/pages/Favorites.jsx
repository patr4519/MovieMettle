import React from "react";
import { useSelector } from "react-redux";
import CardFav from "../components/CardFav";
import EmptyFavorites from "../components/EmptyFavorites";
import MyPopupForm from "../components/PopupForm";
import { selectFavorites } from "../redux/slices/favoritesSlice";
import { selectCurUser } from "../redux/slices/curUserSlice";
import axios from "axios";

const Favorites = () => {
  const { items } = useSelector(selectFavorites);
  const curUser = useSelector(selectCurUser).items[0];
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

  const handleSave = async () => {
    try {
      await axios.put(`https://64116313e96e5254e2d3e6c8.mockapi.io/Users/${curUser.id}`, {
        favorites: items,
      });
      console.log("Data saved");
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  };
  
  return (
    <div className="fav-wrapper">
      {items.length > 0 ? (
        <>
          <h3>Your favorites film(s):</h3>
          <MyPopupForm />
          <button onClick={() => handleSave()}>
            Save favorites on the server
          </button>
          {cardList}
        </>
      ) : (
        <EmptyFavorites />
      )}
    </div>
  );
};

export default Favorites;
