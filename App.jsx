import React from "react";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", padding: "20px" }}>
      <header style={styles.header}>
        <h1 style={styles.logo}>MyFlix</h1>
      </header>

      {/* Featured Banner */}
      <section style={styles.banner}>
        <div style={styles.bannerText}>
          <h2>Featured Movie</h2>
          <p>Experience the world of dreams with Inception.</p>
          <button style={styles.button}>Watch Now</button>
        </div>
      </section>

      {/* Movie Grid */}
      <MovieList />
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#141414",
    marginBottom: "20px",
  },
  logo: {
    color: "red",
    fontSize: "24px",
    fontWeight: "bold",
  },
  banner: {
    backgroundImage:
      "url('https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    color: "white",
    display: "flex",
    alignItems: "center",
    paddingLeft: "40px",
    marginBottom: "40px",
    borderRadius: "12px",
    position: "relative",
  },
  bannerText: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "20px",
    borderRadius: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "red",
    color: "white",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default App;
