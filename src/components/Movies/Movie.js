import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ posterURL, id }) {
  return (
    <Link to={`/filmes/${id}`}>
      <div data-test="movie">
        <ImgMovie src={posterURL} alt="filme" />
      </div>
    </Link>
  );
}
const ImgMovie = styled.img`
  width: 129px;
  height: 193px;
  margin: 10px;
`;
