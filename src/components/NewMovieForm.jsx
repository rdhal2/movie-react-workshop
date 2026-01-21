import { useState } from "react";

export default function NewMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("2024");
  const [genre, setGenre] = useState("Drama");

  function handleSubmit(e) {
    e.preventDefault();

    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    const newMovie = {
      _id: `tmp_${Date.now()}`, // fake Mongo id for now
      title: cleanTitle,
      year: Number(year),
      genre,
      likes: 0,
      watched: false,
    };

    onAddMovie(newMovie);
    setTitle("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 14,
        padding: 14,
        display: "grid",
        gap: 10,
      }}
    >
      <h2 style={{ margin: 0, fontSize: 18 }}>➕ Add a movie</h2>

      <div style={{ display: "grid", gap: 10, gridTemplateColumns: "2fr 1fr 1fr" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Movie title…"
          style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        />

        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="number"
          min="1900"
          max="2100"
          style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        />

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        >
          <option>Action</option>
          <option>Comedy</option>
          <option>Drama</option>
          <option>Horror</option>
          <option>Musical</option>
          <option>Sci-Fi</option>
          <option>Thriller</option>
        </select>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button
          type="submit"
          style={{
            border: "1px solid #ddd",
            background: "white",
            borderRadius: 10,
            padding: "10px 14px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
        <span style={{ color: "#666", fontSize: 13 }}>
          Later: this becomes a POST request to your Mongo-backed API.
        </span>
      </div>
    </form>
  );
}
