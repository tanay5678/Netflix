import React from "react";
import "./css_screen/homeScreen.css";
import Nav from "../componets/Nav";
import Banner from "../componets/Banner";
import MovieRows from "../componets/MovieRows";
import request from "../request";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <MovieRows
        title="NETFLIX ORIGINALS"
        fetURL={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <MovieRows title="Trending Now " fetURL={request.fetchTrending} />
      <MovieRows title="Top Rated" fetURL={request.fetchTopRated} />
      <MovieRows title="Action Movies" fetURL={request.fetchActionMovies} />
      <MovieRows title="Comedy Movies" fetURL={request.fetchComedyMovies} />
      <MovieRows title="Horror Movies" fetURL={request.fetchHorrorMovies} />
      <MovieRows title="Romance Movies" fetURL={request.fetchRomanceMovies} />
      <MovieRows title="Documentaries" fetURL={request.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
