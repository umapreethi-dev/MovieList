import data from "./data";
import {useState} from "react";
import Movie from "./Movie.js";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';

export default function MovieList( {movieList, setMovielist} ){
    //const [movieList, setMovielist] = useState(data);

    const handleDelete = (index)=> {
      const copyMovieList = [...movieList];
      copyMovieList.splice(index,1);
      setMovielist(copyMovieList);
    }
    const movies = movieList.map((item,index) => {
      return (
        <Movie
          id={index}
          key={item.id}
          poster={item.poster}
          title={item.title}
          rating={item.rating}
          summary={item.summary}
          deleteButton={<IconButton
            color="error"
            aria-label="expandicon"
            onClick={() => handleDelete(index)}
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