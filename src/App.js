import React from "react";
import CardList from "./components/CardList";
import MainInput from "./components/MainInput";

const apiKey = "9fc0fef8";
const movieTitle = "Coca";
const initialMovies = ["The Green Mile", "Schindler's List", "The Shawshank Redemption", "Coco", "Interstellar", "Pulp Fiction", "Back to the Future", "The Lord of the Rings: The Fellowship of the Ring", "Fight Club"];

async function getInitialMovies() {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function App() {
  React.useEffect(() => {
    getInitialMovies();
  }, [])

  return (
    <div className="App">
      <MainInput />
      <CardList />
    </div>
  );
}

export default App;
