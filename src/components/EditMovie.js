import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function EditMovie({ movieList }) {
  const { id } = useParams();
  // const movie = movieList[id];
  // console.log(movie)
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`https://624e522677abd9e37c85941d.mockapi.io/movies/${id}`)
      .then((data) => data.json())
      .then((data) => setMovie(data));
  }, []);
  console.log(movie);
  
  return (
    <div>
     { movie && <EditMovieForm movie={movie}/> }
    </div>
  );
}


function EditMovieForm({movie}){
  console.log(movie.id)
  const navigate = useNavigate();
  const [title, setTitle] = useState(movie.title);

  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [poster, setPoster] = useState(movie.poster);
  const [trailer, setTrailer] = useState(movie.trailer);
  const updatedMovie = {
    title: title,
    rating: rating,
    summary: summary,
    poster: poster,
    trailer: trailer,
  };
  return(
    <div className="form">
    <TextField
      id="standard-basic"
      value={title}
      label="Movie Name"
      onChange={(event) => setTitle(event.target.value)}
    />

    <TextField
      id="standard-basic"
      label="Rating"
      value={rating}
      onChange={(event) => setRating(event.target.value)}
    />
    <TextField
      id="standard-basic"
      label="Summary"
      value={summary}
      onChange={(event) => setSummary(event.target.value)}
    />
    <TextField
      id="standard-basic"
      label="Poster"
      value={poster}
      onChange={(event) => setPoster(event.target.value)}
    />
    <TextField
      id="standard-basic"
      label="Trailer"
      value={trailer}
      onChange={(event) => setTrailer(event.target.value)}
    />
    <Button
      variant="contained"
      color="success"
      onClick={() => {
        //setMovielist([...movieList, newMovie]);
        fetch(`https://624e522677abd9e37c85941d.mockapi.io/movies/${movie.id}`, 
        {
        method: "PUT",
        body: JSON.stringify(updatedMovie),
        headers: {
          "Content-Type": "application/json",
        },
        })
          .then((data) => data.json())
          .then((data) => navigate("/movielist"));
      }}
    >
      Save
    </Button>
  </div>
  )
}