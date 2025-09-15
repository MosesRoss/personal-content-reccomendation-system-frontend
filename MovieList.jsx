import React, { useEffect, useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h2 style={{ color: "white", marginBottom: "20px" }}>Popular Movies</h2>
      <div style={styles.grid}>
        {movies.map((movie) => (
          <div key={movie.id} style={styles.card} className="card">
            <img
              src={movie.image}
              alt={movie.title}
              style={styles.image}
            />
            <h3 style={{ color: "white" }}>{movie.title}</h3>
            <p style={{ color: "#aaa" }}>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#141414",
    padding: "10px",
    borderRadius: "8px",
    transition: "transform 0.3s",
  },
  image: {
    width: "100%",
    height: "270px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
};

export default MovieList;
