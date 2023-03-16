import React from "react";
import { Link } from "react-router-dom";

const EmptyFavorites = () => {
  return (
    <div className="emptyFav">
      <h3 className="title">You have not favorites films yet...</h3>
      <Link to="/">
        <div>
          <button type="submit">Go Back</button>
        </div>
      </Link>
    </div>
  );
};

export default EmptyFavorites;
