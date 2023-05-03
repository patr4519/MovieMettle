import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../components/CardItem";
import MainInput from "../components/MainInput";
import NotFoundCard from "../components/NotFoundCard";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";
import { add } from "../redux/slices/favoritesSlice";
import { fetchAdditionalMovies, fetchMovies } from "../redux/slices/movieSlice";
import { selectMovies } from "../redux/slices/movieSlice";
import { addCurUser } from "../redux/slices/curUserSlice";
import { useRef } from "react";

function Home() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(selectMovies);
  const numMovieRef = useRef(-1);
  const [hasScrolled, setHasScrolled] = React.useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  React.useEffect(() => {
    const curUser = JSON.parse(localStorage.getItem("curUser"));
    if (curUser) {
      dispatch(addCurUser(curUser));
      dispatch(add(curUser.favorites));
    }
    dispatch(fetchMovies());
  }, [dispatch]);

  React.useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        if (numMovieRef.current < 0) {
          numMovieRef.current += 1;
        } else {
          numMovieRef.current += 10;
        }
        dispatch(fetchAdditionalMovies(numMovieRef.current));
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      {hasScrolled && (
        <button className="scrollToTop" onClick={handleScrollToTop}></button>
      )}
      <MainInput />
      <Toast />
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
