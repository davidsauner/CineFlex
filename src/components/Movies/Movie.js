import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ posterURL, id }) {
  return (
    <Link to={`/filmes/${id}`}>
      <ImgMovie src={posterURL} alt="filme" />
    </Link>
  );
}
const ImgMovie = styled.img`
  width: 129px;
  height: 193px;
  margin: 10px;
`;
