import styled from "styled-components";

export default function Input({
  setNameUser,
  setCpfuser,
  nameuser,
  cpfuser,
  getNameAndCpf,
}) {
  return (
    <>
      <HootInput>
        <h1>Nome Do Comprador</h1>
        <input
          type="text"
          placeholder="Digite o seu nome..."
          onChange={(e) => setNameUser(e.target.value)}
          value={nameuser}
          name="name"
        />
        <h1>CPF Do Comprador</h1>
        <input
          type="text"
          placeholder="Digite seu CPF"
          onChange={(e) => setCpfuser(e.target.value)}
          value={cpfuser}
        />

        <button onClick={getNameAndCpf}>Reservar assento(s)</button>
      </HootInput>
    </>
  );
}
const HootInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: start;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #293845;
  }
  input {
    width: 327px;
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }
  button {
    margin-top: 5px;
    width: 225px;
    height: 42px;
    background: #e8833a;
    border-radius: 3px;
    color: #ffffff;
    font-weight: 400;
    font-size: 18px;
    border: 5px solid #e8833a;
  }
`;
