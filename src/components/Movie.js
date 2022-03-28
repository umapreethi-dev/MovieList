import { SettingsPhoneTwoTone } from "@mui/icons-material";
import "../App.css";
import Counter from "./Counter";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export default function Movie(props) {
  const [show, setShow] = useState(true);
  const paraStyles = {
    display: show ? "block" : "none",
  };
  const navigate = useNavigate(); // usenavigate is to set route when clicked using button/other elements
  return (
    <div className="movie">
      <div className="card">
        <img src={props.poster} className="poster" />
        <div className="title-container">
          <div className="icons-container">
            <h3>{props.title}</h3>
            <IconButton
              color="primary"
              aria-label="expandicon"
              onClick={() => setShow(!show)}
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              color="primary"
              aria-label="expandicon"
              onClick={() => navigate(`/movies/${props.id}`)}
            >
              <InfoIcon />
            </IconButton>
          </div>
          <p> ⭐{props.rating}/5</p>
        </div>

        <p style={paraStyles}>{props.summary}</p>
        <Counter />
      </div>
    </div>
  );
}
