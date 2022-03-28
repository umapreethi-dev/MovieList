import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function MovieDetails({ movieList }) {
  const { id } = useParams(); // extract id from url
  const navigate = useNavigate();
  const movie = movieList[id];
  console.log(movie.trailer);
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
