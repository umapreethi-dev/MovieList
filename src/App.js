import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import MovieDetails from "./components/MovieDetails";
import EditMovie from "./components/EditMovie";
import NotFoundPage from "./components/NotFoundPage";
import { Route, Routes, Navigate } from "react-router-dom";
import data from "./components/data";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function App() {
  const [movieList, setMovielist] = useState([]);
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: 0, minHeight: "100vh"}} elevation={3} >
      <div>
        <NavBar mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movielist"
            element={
              <MovieList movieList={movieList} setMovielist={setMovielist} />
            }
          />
          <Route
            path="/movies/:id"
            element={<MovieDetails />}
          />
          <Route
            path="/addmovie"
            element={
              <AddMovieForm movieList={movieList} setMovielist={setMovielist} />
            }
          />
          <Route
            path="/movies/edit/:id"
            element={
              <EditMovie movieList={movieList} setMovielist={setMovielist} />
            }
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
