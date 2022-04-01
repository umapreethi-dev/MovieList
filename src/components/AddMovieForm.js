import { useState } from "react";
import data from "./data";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from "react-router-dom";

export default function AddMovieForm({movieList, setMovielist}) {
 // const [movieList, setMovielist] = useState(data);
 console.log(movieList);
 const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  const newMovie = {
    title: title,
    rating: rating,
    summary: summary,
    poster: poster,
    trailer: trailer,
  };
  //console.log(mo)
  return (
    <div>
      <div className="form">
      <TextField id="standard-basic" label="Movie Name" variant="standard"
      onChange={(event) => setTitle(event.target.value)} />
        <TextField id="standard-basic" label="Rating" variant="standard"
     onChange={(event) => setRating(event.target.value)} />
      <TextField id="standard-basic" label="Summary" variant="standard"
    onChange={(event) => setSummary(event.target.value)}/>
      <TextField id="standard-basic" label="Poster" variant="standard"
      onChange={(event) => setPoster(event.target.value)}/>
      <TextField id="standard-basic" label="Trailer" variant="standard"
     onChange={(event) => setTrailer(event.target.value)} />
        <Button variant="contained"
        onClick={() => {
          setMovielist([...movieList, newMovie]);
          navigate("/movieList")
        }}
        >Add Movie</Button>

       
       
      </div>
    </div>
  );
}
