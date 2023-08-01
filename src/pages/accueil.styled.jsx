import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;


  * {
    margin: 0;
    padding: 0;
    font-family: "Alkatra", cursive;
  }

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
    text-align: center;
    align-items: center;
    color: #216249;
  }
  .cell1 {
    grid-column: 1;
    grid-row: 1 / span 2;
    z-index: 1;
    font-family: "Gravitas One", cursive;
  }
  .cell2 {
    grid-column: 1;
    grid-row: 1 / span 2;
    z-index: 0;
    font-family: "Gravitas One", cursive;
    background-color: #20835d;
    text-align: center;
  }

  .cell3 {
 
    width:50vw;
    height:75vh;
    
  }


  p {
    text-align: center;
    color: white;
    margin-left: 7px;
    font-family: "Inter", sans-serif;
  }

  h2 {
    text-align: center;
    margin-bottom: 1px;
    margin-left: 7px;
    padding-bottom: 61px;
    font-family: "Gravitas One", cursive;
    color: yellow;
  }
`;

export const Img = styled("img")`
  width: 50vw;
  height: 90vh;
`;
