import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1d5a43;
  color: yellow;
  text-align: "center";
  font-family: "Gravitas One", cursive;
`;

export const FormContainer = styled("div")`
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100%;
  padding-bottom: 15vh;
  background-color: #20835d;
  font-family: "Gravitas One", cursive;

  h2 {
    text-align: center;
    padding-top: 13px;
    font-family: "Gravitas One", cursive;
    color: yellow;
  }
`;

export const FlexContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 30vw;
  height: 70vh;
  background-color: #1d5a43;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 750px) {
    width: 80vw;
  }
`;

export const Img = styled("img")`
  width: 50vw;
  height: 100vh;
`;
export const Form = styled("div")`
  width: 50vw;
  height: 100vh;
`;
