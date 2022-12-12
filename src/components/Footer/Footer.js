import styled from "styled-components";

export default function Footer({ posterURL, title, weekday, name }) {
  return (
    <FooterContainer>
      <img src={posterURL} alt="movie" />
      <NamefooterContainer>
        <h1>{title}</h1>
        {name && (
          <p>
            {weekday} : {name}
          </p>
        )}
      </NamefooterContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100vw;
  height: 117px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  margin-top: 50px;
  display: flex;
  align-items: center;

  img {
    margin-left: 10px;
    width: 60px;
    height: 80px;
  }
  h1 {
    margin-left: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
  }
  p {
    margin-left: 10px;
  }
`;
const NamefooterContainer = styled.div``;
