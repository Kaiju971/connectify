import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  height: 100vh;

  * {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

export const Item = styled("div")`
  text-align: "center";

  @media (max-width: 750px) {
    width: 100vw;
    height: 100%;
  }
`;

export const Img = styled("img")`
  width: 50vw;
  height: 100vh;

  @media (max-width: 750px) {
    width: 100vw;
  }
`;

export const FormContainer = styled("div")`
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding-bottom: 15vh;
  background-color: #20835d;
  color: white;

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

export const Inscrivez = styled("div")`
  color: white;
`;
