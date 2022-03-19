import logo from './logo.svg';
import './App.css';
import data from "./components/data";
import {useState} from "react";
import Movie from "./components/Movie"

function App() {
  const [movieList, setMovielist] = useState(data);

  const [title, setTitle] = useState("");

  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [poster, setPoster] = useState("");
  const newMovie = {
    title: title,
    rating: rating,
    summary: summary,
    poster: poster
  };

  console.log(movieList);
  const movies = movieList.map((item) => {
    return (
      <Movie
        poster={item.poster}
        title={item.title}
        rating={item.rating}
        summary={item.summary}
      />
    );
  });
  return (
    <div className="App">
      <div>
        <input
          type="text"
          name="movie"
          placeholder="Enter movie name"
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <br />

        <input
          type="number"
          name="rating"
          placeholder="Enter rating"
          onChange={(event) => setRating(event.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          name="summary"
          placeholder="Enter summary"
          onChange={(event) => setSummary(event.target.value)}
        />
        <br />
        <br />
        <input
          name="poster"
          placeholder="Enter image url"
          onChange={(event) => setPoster(event.target.value)}
        />
        <br />
        <br />
        <button
          type="submit"
          onClick={() => {
            setMovielist([...movieList, newMovie]);
          }}
        >
          Add Movie
        </button>
      </div>
      <div className="movies">
      {movies}
      </div>
    </div>
  );
}
 


export default App;
