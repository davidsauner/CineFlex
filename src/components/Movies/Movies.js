import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((value) => {
      setMovies(value.data);
    });
  }, []);

  return (
    <>
      <ChoseTitleContainer>
        <p>Selecione o filme</p>
      </ChoseTitleContainer>
      <MovieContainer>
        {movies.map((value) => (
          <Movie
            key={value.id}
            id={value.id}
            title={value.title}
            posterURL={value.posterURL}
            overview={value.overview}
            releaseDate={value.releaseDate}
          />
        ))}
      </MovieContainer>
    </>
  );
}

const ChoseTitleContainer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Roboto";
  }
`;
const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
