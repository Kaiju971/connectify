import styled from "styled-components";

export const Container = styled("div")`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Alkatra', cursive;
  }

  .Accueil {
    width: 100%;
    height: 100vh;
  }

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .content {
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
`;
