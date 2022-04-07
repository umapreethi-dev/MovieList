import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import MovieDetails from "./components/MovieDetails";
import NotFoundPage from "./components/NotFoundPage";
import { Route, Routes, Navigate } from "react-router-dom";
import data from "./components/data";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function App() {
  const [movieList, setMovielist] = useState(data);
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
            element={<MovieDetails movieList={movieList} />}
          />
          <Route
            path="/addmovie"
            element={
              <AddMovieForm movieList={movieList} setMovielist={setMovielist} />
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
