import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  /* height: 100vh; */
  font-family: "Alkatra", cursive;

  * {
    margin: 0;
    padding: 0;
  }

  h6 {
    text-align: center;
    padding-right: 20rem;
    color: #daca3b;
    font-family: "Gravitas One", cursive;
  }
`;

export const GridCadre = styled("div")`
  width: 80%;
  /* height: 100vh; */
  font-family: "Alkatra", cursive;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4vh;
  padding-bottom: 4vh;
`;

export const GridImg = styled("div")`
  background-color: white;
  padding: 4vh;
  text-align: center;
  width: 70%;
  /* height: 100vh; */
  font-family: "Alkatra", cursive;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const Img = styled("img")`
  text-align: center;
  width: 70%;
  /* height: 100vh; */
  font-family: "Alkatra", cursive;
  grid-column: 1;
  grid-row: 1;
`;

export const TextImg = styled("div")`
  grid-column: 1;
  grid-row: 2;
`;

export const GridTitle = styled("div")`
  width: 60%;
  /* height: 100vh; */
  /* border: solid white; */
  font-family: "Alkatra", cursive;
  background-color: white;
  margin-bottom: 4vh;
`;

export const GridSendBox = styled("div")`
  width: 80%;
  height: 10vh;
  font-family: "Alkatra", cursive;
  background-color: #20835d;
`;
