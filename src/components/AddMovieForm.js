import { useState } from "react";
import data from "./data";

export default function AddMovieForm() {
  const [movieList, setMovielist] = useState(data);
  const [title, setTitle] = useState("");

  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [poster, setPoster] = useState("");
  const newMovie = {
    title: title,
    rating: rating,
    summary: summary,
    poster: poster,
  };

  return (
    <div>
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
    </div>
  );
}
