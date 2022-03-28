import data from "./data";
import {useState} from "react";
import Movie from "./Movie.js"

export default function MovieList( {movieList, setMovielist} ){
    //const [movieList, setMovielist] = useState(data);
    const movies = movieList.map((item,index) => {
      return (
        <Movie
          id={index}
          key={item.id}
          poster={item.poster}
          title={item.title}
          rating={item.rating}
          summary={item.summary}
        />
      );
    });
    return(
        <div>
             <div className="movies">
      {movies}
      </div>
        </div>
    )
}