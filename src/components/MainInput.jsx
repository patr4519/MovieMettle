import React from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchMovie } from "../redux/slices/movieSlice";

const MainInput = () => {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();

  const inputHandler = () => {
    dispatch(fetchMovies(inputValue));
    setInputValue("");
  };

  return (
    <div className="mainInput">
      <div className="search-container">
        <div className="input-container">
          <input
            value={inputValue}
            type="text"
            id="search-input"
            placeholder="Movie title..."
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button type="submit" onClick={inputHandler}>
          Search
        </button>
      </div>
    </div>
  );
};

export default MainInput;
