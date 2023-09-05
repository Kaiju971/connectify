import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;

  * {
    margin: 0;
    padding: 0;
  }

  video {
    grid-column: 1 / span 2;
    width: 57vw;
    height: 80vh;
    object-fit: cover;
    position: relative;
  }

  h5 {
    text-align: center;
    padding-right: 15rem;
    color: #daca3b;
    font-family: "Gravitas One", cursive;
  }
  .title {
    font-family: "Gravitas One", cursive;
    padding-bottom: 7vh;
  }
`;
