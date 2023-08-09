import styled from "styled-components";
import { Button } from "@mui/material";

export const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  * {
    margin: 0;
    padding: 0;
    font-family: "Alkatra", cursive;
  }
`;
export const GridImges = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

export const Img1 = styled("img")`
  grid-row: 1 / span 2;
  grid-column: 1;
  width: 100vw;
  height: 80vh;
`;
export const ImgContainer = styled("div")`
  background-color: rgba(162, 159, 159, 0.7);
  grid-row: 1 / span 2;
  grid-column: 1;
  z-index: 10;
  width: 80vw;
  height: 40vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Img2 = styled("img")`
  grid-row: 1 / span 2;
  grid-column: 1;
  border-radius: 50%;
  width: 5.5vw;
  margin-left: 3rem;
  margin-top: -3rem;
  z-index: 11;
`;

export const Content = styled("div")`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: auto;
`;

export const Star = styled("div")`
  grid-row: 1 / span 2;
  grid-column: 1;
  margin-left: 3rem;
  margin-top: -3rem;
  border: 3px blueviolet;
  background: #8d5dff;
  width: 80px;
  height: 80px;
  position: relative;
  transform: rotate(20deg);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: 80px;
    background: #8d5dff;
    transform: rotate(135deg);
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: 80px;
    transform: rotate(135deg);
    mix-blend-mode: overlay;
  }
`;

export const ContStar = styled("div")`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: start;
  justify-items: center;
`;

export const Filter = styled("div")`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 23.8vh;
  
`;

export const MyButton = styled(Button)`
  width: 15vw;
  height: 10vh;
`;

export const Wall = styled("div")`
  grid-column: 2;
`;
export const Gallery = styled("div")`
  grid-column: 2;
  margin-top: 10vh;
`;
export const Video = styled("div")`
  grid-column: 2;
  margin-top: 10vh;
`;
export const Music = styled("div")`
  grid-column: 2;
  margin-top: 10vh;
`;
