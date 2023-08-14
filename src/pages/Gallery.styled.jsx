import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  /* height: 100vh; */

  * {
    margin: 0;
    padding: 0;
  }

  h5 {
    text-align: center;
    padding-right: 20rem;
    color: #daca3b;
    font-family: "Gravitas One", cursive;
  }

  .title {
    font-family: "Gravitas One", cursive;
    padding-bottom: 7vh;
  }
`;
export const Box = styled("div")`
  margin-right: 33rem;
`;

export const Img = styled("Img")`
  width: 100%;
  /* height: 100vh; */
  margin-right: 33rem;
`;

export const Img4 = styled("Img")`
  width: 100%;
  height: 36.2vh;
  margin-right: 33rem;
`;

export const PhotoBox = styled("div")`
  display: grid;
  grid-template-columns: 40% 40%;
  grid-template-rows: auto;
  row-gap: 2%;
  column-gap: 1.1%;
  align-items:center;
`;

export const ListItem = styled("div")`
  width: 96%;
  
`;
