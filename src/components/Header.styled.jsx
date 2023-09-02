import styled from "styled-components";

export const Container = styled("div")`
  overflow-x: hidden;

  .h6 {
    font-family: "Gravitas One", cursive;
    color: yellow;
  }
`;

export const CloseIconStyle = styled("div")`
  display: flex;
  justify-content: end;
  align-items: center;
  color: white;

  .close {
    text-transform: capitalize;
    opacity: 0;
    font-weight: 400;

    @media (max-width: 750px) {
      font-size: 4vw;
    }
  }

  &:hover .close {
    cursor: pointer;
    opacity: 1;

    -webkit-animation: slide-top 0.5s ease-out both;
    animation: slide-top 0.5s ease-out both;

    /*
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
    @-webkit-keyframes slide-top {
      0% {
        -webkit-transform: translateY(70px);
        transform: translateY(70px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
    @keyframes slide-top {
      0% {
        -webkit-transform: translateY(70px);
        transform: translateY(70px);
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
  }
`;

export const Img = styled("img")`
  width: 20vw;
  height: 100%;
`;
