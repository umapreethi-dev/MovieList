import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {useEffect, useState} from "react";

export default function MovieDetails() {
  const { id } = useParams(); // extract id from url
  
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`https://624e522677abd9e37c85941d.mockapi.io/movies/${id}`)
    .then(data => data.json())
    .then(data => setMovie(data));
  },[])
 
  return (
    <div style={{ margin: "2%" }}>
      <iframe
        width="100%"
        height="560"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie">
        <div>
            <div className="title-container">
          <h1>{movie.title}</h1>
          <p> ⭐ {movie.rating}/5</p>
          </div>

          <p>{movie.summary}</p>

          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            startIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
