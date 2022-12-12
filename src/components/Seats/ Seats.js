import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import colors from "../../data/colors";
import Input from "./Input";
import Footer from "../Footer/Footer";

function Seat({ seats, selectSeat }) {
  const { disponivel, indisponivel, selecionado } = colors;

  return (
    <>
      {seats.map((v, i) =>
        v.selected ? (
          <SeatsButton
            key={i}
            color={selecionado}
            onClick={() => selectSeat(v.id)}
            data-test="seat"
          >
            {v.name}
          </SeatsButton>
        ) : v.isAvailable ? (
          <SeatsButton
            key={i}
            color={disponivel}
            onClick={() => selectSeat(v.id)}
            data-test="seat"
          >
            {v.name}
          </SeatsButton>
        ) : (
          <SeatsButton
            key={i}
            color={indisponivel}
            data-test="seat"
            onClick={() =>
              alert(
                "Assento ja selecionado, por gentileza escolher outro com marcação disponivel! Caso não possua nenhum assento disponivel, escolher outra sessão!"
              )
            }
          >
            {v.name}
          </SeatsButton>
        )
      )}
    </>
  );
}

export default function Seats() {
  const { disponivel, indisponivel, selecionado } = colors;
  const { idsessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [dayseats, setDaySeats] = useState({});
  const [nameuser, setNameUser] = useState("");
  const [cpfuser, setCpfuser] = useState("");
  const navigate = useNavigate();
  function getNameAndCpf() {
    const newselect = seats.filter((v) => v.selected).map((v) => v.name);
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      {
        ids: newselect,
        name: nameuser,
        cpf: cpfuser,
      }
    );

    promise.then((v) =>
      navigate("/sucesso", {
        state: {
          ids: newselect,
          name: nameuser,
          cpf: cpfuser,
          dayseats,
        },
      })
    );
  }

  function selectSeat(id) {
    const newSeats = seats.map((v) => {
      if (v.id === id && v.isAvailable) {
        return {
          ...v,
          selected: !v.selected,
        };
      }
      return {
        ...v,
      };
    });

    setSeats([...newSeats]);
  }

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idsessao}/seats`
    );
    promise.then((v) => {
      setSeats(v.data.seats);
      setDaySeats(v.data);
    });
  }, []);

  return (
    <>
      <ChoseTitleContainer>
        <p>Selecione o(s) assento(s)</p>
      </ChoseTitleContainer>
      <SeatsContainer>
        <NumberSeatsContainer>
          <Seat key={seats.id} seats={seats} selectSeat={selectSeat} />
        </NumberSeatsContainer>
        <ExempleSeats>
          <ExempleButton>
            <SeatsButton color={disponivel} />
            <p>Disponivel</p>
          </ExempleButton>
          <ExempleButton>
            <SeatsButton color={selecionado} />
            <p>Selecionado</p>
          </ExempleButton>
          <ExempleButton>
            <SeatsButton color={indisponivel} />
            <p>Indisponivel</p>
          </ExempleButton>
        </ExempleSeats>
      </SeatsContainer>
      <InputContainer>
        <Input
          setCpfuser={setCpfuser}
          setNameUser={setNameUser}
          nameuser={nameuser}
          cpfuser={cpfuser}
          getNameAndCpf={getNameAndCpf}
        />
      </InputContainer>
      {dayseats.movie && (
        <Footer
          posterURL={dayseats.movie.posterURL}
          title={dayseats.movie.title}
          weekday={dayseats.day.weekday}
          name={dayseats.name}
        />
      )}
    </>
  );
}

const ChoseTitleContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Roboto";
  }
`;
const SeatsButton = styled.button`
  width: 26px;
  height: 26px;
  background: ${(p) => p.color};
  border: 1px solid #808f9d;
  border-radius: 12px;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const SeatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const NumberSeatsContainer = styled.div`
  max-width: 460px;
  flex-wrap: wrap;
`;
const ExempleSeats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const ExempleButton = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  p {
    font-family: "Roboto";
  }
`;
