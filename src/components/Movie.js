import "../App.css"

export default function Movie(props) {
    return (
      <div className="movie">
        <div className="card">
          <img src={props.poster} className="poster" />
          <h1>{props.title}</h1>
          <p>{props.rating}/5</p>
          <p>{props.summary}</p>
        </div>
      </div>
    );
  }