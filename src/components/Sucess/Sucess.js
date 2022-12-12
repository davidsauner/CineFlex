import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Sucess() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <ChoseTitleContainer>
        <p>Pedido feito com sucesso!</p>
      </ChoseTitleContainer>
      <DataLocationContainer data-test="movie-info">
        <p>Filme e sessao</p>
        <h1>{location.state.dayseats.movie.title}</h1>
        <h1>
          {location.state.dayseats.day.date} :{location.state.dayseats.name}
        </h1>
      </DataLocationContainer>
      <DataLocationContainer data-test="seats-info">
        <p>Ingressos</p>
        {location.state.ids.map((v, i) => (
          <h1 key={i}>Assento: {v}</h1>
        ))}
      </DataLocationContainer>
      <DataLocationContainer data-test="client-info">
        <p>Comprador</p>
        <h1>Nome: {location.state.name}</h1>
        <h1>CPF:{location.state.cpf}</h1>
      </DataLocationContainer>
      <ButtonConainer>
        <HomeButton data-test="go-home-btn" onClick={() => navigate("/")}>
          Voltar para o Home
        </HomeButton>
      </ButtonConainer>
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
    color: #247a6b;
    font-weight: 700;
    font-size: 24px;
  }
`;
const DataLocationContainer = styled.div`
  margin: 10px;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #293845;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #293845;
  }
`;
const ButtonConainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HomeButton = styled.button`
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  color: white;
  border-color: #e8833a;
`;
