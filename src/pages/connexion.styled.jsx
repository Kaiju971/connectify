import styled from "styled-components";

export const Container = styled("div")`
   width: 100%;
  height: 100vh;

  * {
    margin: 0;
    padding: 0;
    font-family: "Alkatra", cursive;
  }

  /* .Accueil {
    width: 100%;
    height: 100vh;
  } */

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: relative;
  }

  .content {
    padding: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: yellow;
  }

  .content .h1 {
    width: 50rem;
  }
`;

export const Item = styled("div")`
  text-align: "center";

  .gridItem {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .cell1 {
    grid-column: 1;
    grid-row: 1 span 2;
  }
  .cell2 {
    grid-column: 1;
    grid-row: 2;
  }
 
`;

export const Img = styled("img")`
  width: 50vw;
  height: 100vh;

`;
