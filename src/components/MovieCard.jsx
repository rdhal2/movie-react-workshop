/*
=====================================================
WORKSHOP STEP 4 — COMPONENTS + PROPS
WHAT TO SAY:
"This is a component. It receives data via props
and decides how to display it."
=====================================================
*/

export default function MovieCard({ movie, onLike, onToggleWatched }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
      }}
    >



      <p style={{ color: "#555" }}>Genre: {movie.genre}</p>

  
  
   


    </div>
  );
}
