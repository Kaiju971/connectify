// import logo from './logo.svg';
// import './App.css';
// import React from "react";
import * as S from "./app.styled";
import AppRoutes from "./appRoutes";
import Topbar from "./pages/Topbar";

function app() {
  return (
    <S.Container>
      <Topbar />
      <AppRoutes />
    </S.Container>
  );
}

export default app;
