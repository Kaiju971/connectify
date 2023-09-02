import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;

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
  
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const Cell12 = styled("div")`
  grid-column: 1 / span 2;
  background-color: #daca3bff;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  justify-items: center;
  align-items: center;

  video {
    width: 100vw;
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

  @media (max-width: 750px) {
    grid-column: 1;
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

  @media (max-width: 750px) {
    margin-left: 4vw;
    margin-right: 4vw;
    height: 60vh;
  }
`;

export const Cell31 = styled("div")`
  grid-column: 1;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #216249ff;
`;

export const Cell31img = styled("div")`
  grid-column: 1;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #216249ff;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Cell31img1 = styled("div")`
  width: 100vw;
  height: 100vh;
  grid-column: 1;
  background-color: #216249ff;
  display: none;

  @media (max-width: 750px) {
    display: block;
  }
`;

export const Cell32 = styled("div")`
  grid-column: 2;
  height: 100vh;
  background-color: #20835d;
  width: 50vw;
  text-align: center;

  @media (max-width: 750px) {
    grid-column: 1;
    width: 100vw;
  }
`;

export const Img = styled("img")`
  width: 50vw;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;

  @media (max-width: 750px) {
    width: 100vw;
  }
`;

export const Img1 = styled("img")`
  width: 50vw;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Texts = styled("div")`
  min-height: 100vh;
  text-align: center;

  line-height: 4;
  color: #daca3bff;

  @media (max-width: 750px) {
    padding-left: 8vw;
    padding-right: 8vw;
    width: 100vw;
  }
`;

export const BoxContactForm = styled("div")`
  padding-top: 4vh;
  padding-bottom: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;
