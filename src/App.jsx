import { useMemo, useState } from "react";
import MovieList from "./components/MovieList";
import NewMovieForm from "./components/NewMovieForm";

const INITIAL_MOVIES = [
  {
    _id: "m1",
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    likes: 0,
    watched: false,
  },
  {
    _id: "m2",
    title: "La La Land",
    year: 2016,
    genre: "Musical",
    likes: 0,
    watched: true,
  },
  {
    _id: "m3",
    title: "Get Out",
    year: 2017,
    genre: "Thriller",
    likes: 0,
    watched: false,
  },
];

export default function App() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [query, setQuery] = useState("");

  const visibleMovies = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return movies;
    return movies.filter((m) => {
      const haystack = `${m.title} ${m.genre} ${m.year}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [movies, query]);

  function handleAddMovie(newMovie) {
    setMovies((prev) => [newMovie, ...prev]);
  }

  function handleLike(movieId) {
    setMovies((prev) =>
      prev.map((m) => (m._id === movieId ? { ...m, likes: m.likes + 1 } : m))
    );
  }

  function handleToggleWatched(movieId) {
    setMovies((prev) =>
      prev.map((m) =>
        m._id === movieId ? { ...m, watched: !m.watched } : m
      )
    );
  }

  function handleDelete(movieId) {
    setMovies((prev) => prev.filter((m) => m._id !== movieId));
  }

  return (
    <div style={{ maxWidth: 900, margin: "32px auto", padding: 16 }}>
      <header style={{ marginBottom: 16 }}>
        <h1 style={{ margin: 0 }}>🎬 Movie Watchlist Dashboard</h1>
        <p style={{ marginTop: 8, color: "#555" }}>
          React basics: components, JSX, state, props, lists. (Mongo-ready docs
          with <code>_id</code>, but no database today.)
        </p>
      </header>

      <section style={{ display: "grid", gap: 12, marginBottom: 16 }}>
        <NewMovieForm onAddMovie={handleAddMovie} />

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, genre, or year…"
            style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
          />
          <span style={{ color: "#555" }}>
            Showing <b>{visibleMovies.length}</b> / {movies.length}
          </span>
        </div>
      </section>

      <MovieList
        movies={visibleMovies}
        onLike={handleLike}
        onToggleWatched={handleToggleWatched}
        onDelete={handleDelete}
      />
    </div>
  );
}
