import { useMemo, useState } from "react";
import NewMovieForm from "./components/NewMovieForm";
import MovieCard from "./components/MovieCard";

const INITIAL_MOVIES = [
  { _id: "m1", title: "The Dark Knight", year: 2008, genre: "Action", watched: false, liked: false },
  { _id: "m2", title: "La La Land", year: 2016, genre: "Musical", watched: true, liked: false },
  { _id: "m3", title: "Get Out", year: 2017, genre: "Thriller", watched: false, liked: false },
];

export default function App() {

  /* code */ 

  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [query, setQuery] = useState("");


  /* This code decides which movies are shown on the screen based on what the user typed in the search bar. 
  “visibleMovies is just the list we actually show on screen.
  If the search bar is empty, it shows everything.
  If the user types, we filter the list.”
  */
  const visibleMovies = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return movies; /* if the search bar is empty, show all movies */
    return movies.filter((m) =>
      `${m.title} ${m.genre} ${m.year}`.toLowerCase().includes(q)
    );
  }, [movies, query]);


 


  return (
    <div style={{ maxWidth: 900, margin: "32px auto", padding: 16 }}>
      <h1>🎬 Movie Watchlist</h1>

      <p style={{ color: "#555" }}>
        Starter app for the React workshop. We will add interactivity step by step.
      </p>
  

      

    </div>
  );
}
