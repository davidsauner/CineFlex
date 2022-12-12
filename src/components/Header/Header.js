import styled from "styled-components";

export default function Header() {
  return (
    <>
      <TitleContainer>
        <Title>CINEFLEX</Title>
      </TitleContainer>
    </>
  );
}

const TitleContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
`;
const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #e8833a;
`;
