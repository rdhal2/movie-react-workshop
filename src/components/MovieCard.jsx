export default function MovieCard({ movie, onLike, onToggleWatched, onDelete }) {
    const badgeStyle = {
      display: "inline-block",
      padding: "4px 10px",
      borderRadius: 999,
      border: "1px solid #ddd",
      fontSize: 12,
      color: "#444",
      background: "#fafafa",
    };
  
    return (
      <div
        style={{
          border: "1px solid #e5e5e5",
          borderRadius: 14,
          padding: 14,
          display: "grid",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div>
            <h3 style={{ margin: 0 }}>
              {movie.title}{" "}
              <span style={{ color: "#777", fontWeight: 400 }}>({movie.year})</span>
            </h3>
            <div style={{ marginTop: 6, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={badgeStyle}>Genre: {movie.genre}</span>
              <span style={badgeStyle}>_id: {movie._id}</span>
              <span style={badgeStyle}>
                {movie.watched ? "✅ Watched" : "👀 Not watched"}
              </span>
            </div>
          </div>
  
          <button
            onClick={() => onDelete(movie._id)}
            style={{
              border: "1px solid #ddd",
              background: "white",
              borderRadius: 10,
              padding: "8px 10px",
              cursor: "pointer",
              height: 40,
            }}
            title="Delete"
          >
            🗑️
          </button>
        </div>
  
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={() => onLike(movie._id)}
            style={{
              border: "1px solid #ddd",
              background: "white",
              borderRadius: 10,
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            ❤️ Like ({movie.likes})
          </button>
  
          <button
            onClick={() => onToggleWatched(movie._id)}
            style={{
              border: "1px solid #ddd",
              background: "white",
              borderRadius: 10,
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            {movie.watched ? "Mark Unwatched" : "Mark Watched"}
          </button>
        </div>
      </div>
    );
  }
  