import React from "react";
import CardList from "./components/CardItem";
import MainInput from "./components/MainInput";

const apiKey = "9fc0fef8";
const movieTitle = "Coco";
const initialMovies = ["The Green Mile", "Schindler's List", "The Shawshank Redemption", "Coco", "Interstellar", "Pulp Fiction", "Back to the Future", "The Lord of the Rings: The Fellowship of the Ring", "Fight Club"];

async function getInitialMovies() {
  try {
    let requests = initialMovies.map(item => fetch(`http://www.omdbapi.com/?t=${item}&apikey=${apiKey}`));
    let repsonses = await Promise.all(requests);
    let items = await Promise.all(repsonses.map(r => r.json()));
    console.log(items);
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const [items, setItems] = React.useState([]);

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