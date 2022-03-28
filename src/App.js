import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import MovieDetails from "./components/MovieDetails";
import { Route,Routes } from "react-router-dom";
import data from "./components/data";
import {useState} from "react";

function App() {
  const [movieList, setMovielist] = useState(data);
  return (
    <div>
       <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movielist" element={<MovieList movieList ={movieList} setMovielist ={setMovielist} />} />
        <Route path="/movies/:id" element={<MovieDetails movieList ={movieList} />} />
        <Route path="/addmovie" element={<AddMovieForm />} />
      </Routes>
     
      

    </div>
  );
}
 


export default App;
