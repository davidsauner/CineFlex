import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import ListDays from "./ListDays";

export default function Section() {
  const [infomovie, setInfoMovie] = useState([]);
  const { idfilme } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idfilme}/showtimes`
    );
    promise.then((value) => {
      setInfoMovie(value.data);
    });
  }, []);
  return (
    <>
      <ChoseTitleContainer>
        <p>Selecione o horário</p>
      </ChoseTitleContainer>
      {infomovie.days &&
        infomovie.days.map((v, i) => (
          <ListDays
            key={i}
            weekday={v.weekday}
            date={v.date}
            showtimes={v.showtimes}
          />
        ))}

      <Footer posterURL={infomovie.posterURL} title={infomovie.title} />
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
