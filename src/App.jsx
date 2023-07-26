// import logo from './logo.svg';
// import './App.css';
// import React from "react";
import * as S from "./app.styled";
import AppRoutes from "./appRoutes";
import Layout from "./pages/layout";

function App() {
  return (
    <S.Container>
      <AppRoutes>
        <Layout />
      </AppRoutes>
    </S.Container>
  );
}

export default App;
