import React, { useRef } from "react";
import "./css/movierow.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../axios.js";

function MovieRows({ title, fetURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(fetURL);
      setMovies(result.data.results);
      return result;
    }
    fetchData();
  }, [fetURL]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters" drag="x" dragConstraints={{ right: 0 }}>
        {movies.map((mov) => (
          <img
            className={`row__poster ${isLargeRow && "row_posterLarger"}`}
            key={mov.id}
            loading="lazy"
            src={`${baseURL}${
              isLargeRow ? mov.poster_path : mov.backdrop_path
            }`}
            alt={mov.name}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRows;
