import React from "react";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../redux/slices/movieSlice";
import searchIcon from "../img/searchIcon.svg";

const MainInput = () => {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();

  const inputHandler = () => {
    dispatch(fetchMovie(inputValue));
    setInputValue("");
  };

  let visibleSearch = false;
  if (inputValue.length > 0) {
    visibleSearch = true;
  }

  return (
    <div className="mainInput">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Movie title..."
      />
      <img
        onClick={inputHandler}
        // className="searchIcon"
        className={`searchIcon ${visibleSearch ? 'visible' : ''}`}
        src={searchIcon}
        alt="searchIcon"
        width={25}
        height={25}
      />
    </div>
  );
};

export default MainInput;
