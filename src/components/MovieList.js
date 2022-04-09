import data from "./data";
import {useEffect, useState} from "react";
import Movie from "./Movie.js";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';

export default function MovieList( {movieList, setMovielist} ){
    const getMovies = () => {
      fetch("https://624e522677abd9e37c85941d.mockapi.io/movies")
      .then(data => data.json())
      .then(data => setMovielist(data));
    }

    useEffect(() => getMovies(),[])

    const handleDelete = (id)=> {
      // const copyMovieList = [...movieList];
      // copyMovieList.splice(index,1);
      // setMovielist(copyMovieList);
      fetch(`https://624e522677abd9e37c85941d.mockapi.io/movies/${id}`, {method: "DELETE"})
      .then(()=> getMovies());

    }
    const movies = movieList.map((item,index) => {
      return (
        <Movie
          id={item.id}
          key={item.id}
          poster={item.poster}
          title={item.title}
          rating={item.rating}
          summary={item.summary}
          deleteButton={<IconButton
            color="error"
            aria-label="expandicon"
            onClick={() => handleDelete(item.id)}
          >
            <DeleteIcon />
          </IconButton>
         }
         editButton={<IconButton
          color="primary"
          aria-label="expandicon"
          
        >
          <EditIcon />
        </IconButton>
       }
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