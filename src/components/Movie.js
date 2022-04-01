import { SettingsPhoneTwoTone } from "@mui/icons-material";
import "../App.css";
import Counter from "./Counter";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Movie(props) {
  const [show, setShow] = useState(true);
  const paraStyles = {
    display: show ? "block" : "none",
  };
  const navigate = useNavigate(); // usenavigate is to set route when clicked using button/other elements
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        height="400"
        image={props.poster}
        alt={props.title}
      />
      <CardContent>
        <CardActions disableSpacing>
        <div className="title-container">
           <div className="icons-container">
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>

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
          <Typography>⭐{props.rating}/5</Typography>
          </div>
        </CardActions>
        <Typography variant="body2" color="text.secondary" style={paraStyles}>
          {props.summary}
        </Typography>
      </CardContent>
      <CardActions>
      <div className="title-container">
        <Counter />
        </div>
        {props.deleteButton}
        <div className="icons-container">
        {props.editButton}
        </div>
      </CardActions>
    </Card>

   
  );
}
