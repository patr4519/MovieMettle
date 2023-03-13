import React from "react";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../redux/slices/movieSlice";

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
      <svg
        onClick={inputHandler}
        className="searchIcon"
        viewBox="0 0 50 50"
        width="25px"
        height="25px"
        fill="grey"
      >
        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
      </svg>
      {inputValue && (
        <>
          <svg
            onClick={() => setInputValue('')}
            className="clearIcon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
            />
          </svg>
          <svg
            className="line"
            fill="none"
            height="44"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
            width="44"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M12 5v14" />
          </svg>
        </>
      )}
    </div>
  );
};

export default MainInput;
