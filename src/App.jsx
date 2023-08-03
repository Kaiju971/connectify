// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// import * as S from "./app.styled";
import AppRoutes from "./appRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Global as GlobalStyles, css } from "@emotion/react";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <GlobalStyles
        styles={css`
          #root,
          body,
          html {
            margin: 0;
            scroll-behavior: smooth;
            overflow-x: hidden;
            overflow-y: scroll;
            scrollbar-width: none;
            -ms-overflow-style: none; /* IE 10+ */
            scrollbar-width: none; /* Firefox */
            &::-webkit-scrollbar {
              /* chrome based */
              width: 0px;
            }
          }
          /* #root {
            position: relative;
          } */
        `}
      />
      <Footer />
    </>
  );
}

export default App;
