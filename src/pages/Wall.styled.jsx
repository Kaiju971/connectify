import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  /* height: 100vh; */
  font-family: "Alkatra", cursive;

  .title {
    font-family: "Gravitas One", cursive;
  }

  * {
    margin: 0;
    padding: 0;
  }

  h5 {
    text-align: center;
    padding-right: 20rem;
    padding-top: 4vh;
    /* color: #daca3b; */
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
  /* padding-bottom: 4vh; */
`;

export const GridImg = styled("div")`
  background-color: white;
  padding: 4vh;
  width: 70%;
  height: 45vh;
  font-family: "Alkatra", cursive;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  border: solid white;
  border-radius: 16px;
  box-shadow: 0px 4px 4px grey;
  margin-bottom: 4vh;
`;

export const Img = styled("img")`
  width: 80%;
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
  width: 70%;
  height: 10vh;
  border: solid white;
  border-radius: 16px;
  box-shadow: 0px 4px 4px grey;
  font-family: "Alkatra", cursive;
  background-color: white;
  text-align: center;
  margin-bottom: 4vh;
`;

export const GridSendBox = styled("div")`
  width: 80%;
  height: 15vh;
  font-family: "Alkatra", cursive;
  background-color: #20835d;
  display: flex;
  justify-content: space-evenly;
  align-items: start;

  .icon {
    transform: rotate(-40deg);
  }
`;
