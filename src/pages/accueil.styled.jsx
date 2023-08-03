import styled from "styled-components";
// import fdactualite from "../image/fdactualite.jpg";

export const Container = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: auto;
  justify-items: center;

  * {
    margin: 0;
    padding: 0;
    font-family: "Alkatra", cursive;
  }

  video {
    grid-column: 1 / span 2;
    width: 100vw;
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
  h2 {
    text-align: center;
    padding-top: 13px;
    font-family: "Gravitas One", cursive;
    color: yellow;
  }
`;

export const Cell12 = styled("div")`
  grid-column: 1 / span 2;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  justify-items: center;
  align-items: center;

  video {
    width: 100%;
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .text12 {
    grid-column: 1;
    grid-row: 1 / span 2;
    color: #daca3bff;
    z-index: 10;
  }

  .text22 {
    grid-column: 1;
    grid-row: 1 / span 2;
    color: #1d5a43;
    z-index: 10;
  }

  .video22 {
    opacity: 0.5;
  }

  .back22 {
    width: 100vw;
    height: 122vh;
    background-color: #daca3bff;
    z-index: 100;
    text-align: center;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .videoblur {
    width: 100vw;
    filter: blur(2px);
  }
`;

export const FormInscr = styled("div")`
  grid-column: 1;
  grid-row: 1 / span 2;
  background-color: black;
  opacity: 0.74;
  text-align: center;
  border-radius: 20px;
  padding: 4vh;
`;

export const Cell31 = styled("div")`
  grid-column: 1;

  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #216249ff;
`;

export const Cell32 = styled("div")`
  grid-column: 2;
  height: 100vh;
  background-color: #20835d;
`;

export const Img = styled("img")`
  width: 50vw;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
`;

export const Texts = styled("div")`
  width: 50vw;
  min-height: 100vh;
  text-align: center;
  padding-left: 8vw;
  padding-right: 8vw;
  line-height: 4;
  color: #daca3bff;
`;

export const BoxContactForm = styled("div")`
  padding-top: 4vh;
  padding-bottom: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

// export const Item = styled("div")`
//   text-align: "center";
//   height: 100vh;

//   .gridItem {
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: 50% 50%;
//     text-align: center;
//     align-items: center;
//     color: #216249;
//   }
//   .cell1 {
//     grid-column: 1;
//     grid-row: 1 / span 2;
//     z-index: 1;
//     font-family: "Gravitas One", cursive;
//   }
//   .cell2 {
//     grid-column: 1;
//     grid-row: 1 / span 2;
//     z-index: 0;
//     font-family: "Gravitas One", cursive;
//     background-color: #20835d;
//     text-align: center;
//   }

//   p {
//     width: 100%;
//     text-align: center;
//     color: white;
//     padding-top: 10px;
//     font-family: "Inter", sans-serif;
//   }

// h2 {
//   text-align: center;
//   padding-top: 13px;
//   padding-bottom: 61px;
//   font-family: "Gravitas One", cursive;
//   color: yellow;
// }

//   .cell3 {
//     background-image: url(${fdactualite});
//     background-repeat: no-repeat;
//     background-size: cover;
//     /* position: relative; */
//     height: 100vh;
//   }
// `;

// export const Img3 = styled("div")`
//   width: 100%;
//   height: 100%;
//   flex-shrink: 0;
//   /* object-fit: fill; */
//   /* position: absolute; */
//   top: 0;
//   left: 0;
//   background-image: url(${fdactualite});
//   background-repeat: no-repeat;
//   background-size: cover;
//   object-fit: contain;
//   z-index: 20;
// `;

// export const Img6 = styled("img")`
//   width: 50%;
//   height: 100%;
//   position: absolute;
// `;

// export const Img7 = styled("img")`
//   width: 50%;
//   height: 100%;
//   position: absolute;
// `;
