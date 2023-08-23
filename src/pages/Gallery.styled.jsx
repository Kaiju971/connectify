import styled from "styled-components";

export const Container = styled("div")`
  width: 100%;

  * {
    margin: 0;
    padding: 0;
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
export const Box = styled("div")`
  margin-right: 33rem;
`;

export const Img = styled("img")(
  ({ isSelected }) => `
  width: 100%;
  margin-right: 33rem;
    transition: filter 0.3s ease-in-out;
  z-index: ${({ isSelected }) => (isSelected ? "10" : "-1")};
  filter: ${({ isSelected }) => (isSelected ? "none" : "blur(4px)")};

  &:hover {
    -webkit-animation: scale-up-right 0.4s cubic-bezier(0.6, 0.04, 0.98, 0.335)
      both;
    animation: scale-up-right 0.4s cubic-bezier(0.6, 0.04, 0.98, 0.335) both;

    /**
 * ----------------------------------------
 * animation scale-up-right
 * ----------------------------------------
 */
    @-webkit-keyframes scale-up-right {
      0% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
      }
    }
    @keyframes scale-up-right {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 100% 0%;
        transform-origin: 100% 0%;;
      }
      100% {
        -webkit-transform: scale(2);
        transform: scale(2);
        -webkit-transform-origin: 100% 0%;
        transform-origin: 100% 0%;;
      }
    }
  }
`
);

export const Img3 = styled("img")(
  ({ isSelected }) => `
  width: 100%;
  height: 36.2vh;
  margin-right: 33rem;
    transition: filter 0.3s ease-in-out;
  z-index: ${({ isSelected }) => (isSelected ? "10" : "-1")};
  filter: ${({ isSelected }) => (isSelected ? "none" : "blur(4px)")};  &:hover {
    -webkit-animation: scale-up-right 0.4s cubic-bezier(0.6, 0.04, 0.98, 0.335)
      both;
    animation: scale-up-right 0.4s cubic-bezier(0.6, 0.04, 0.98, 0.335) both;

    /**
 * ----------------------------------------
 * animation scale-up-right
 * ----------------------------------------
 */
    @-webkit-keyframes scale-up-right {
      0% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
      }
    }
    @keyframes scale-up-right {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
      }
      100% {
        -webkit-transform: scale(2);
        transform: scale(2);
        -webkit-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
      }
    }
  }
`
);

export const PhotoBox = styled("div")`
  display: grid;
  grid-template-columns: 40% 40%;
  grid-template-rows: auto;
  row-gap: 2%;
  column-gap: 1.1%;
  align-items: center;
`;

export const ListItem = styled("div")`
  width: 96%;
`;
