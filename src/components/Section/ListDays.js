import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ListDays({ weekday, date, showtimes }) {
  return (
    <SectionContainer>
      <DateContainer>
        <p>{weekday}:</p>
        <p>{date}</p>
      </DateContainer>
      {showtimes.map((v, i) => (
        <Link key={i} to={`/sessao/${v.id}`}>
          <button>{v.name}</button>
        </Link>
      ))}
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  margin: 10px;

  button {
    margin: 5px;
    width: 83px;
    height: 43px;
    background: #e8833a;
    border-radius: 3px;
    border-color: #e8833a;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;
const DateContainer = styled.div`
  display: flex;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }
`;
