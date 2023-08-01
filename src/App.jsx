// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// import * as S from "./app.styled";
import AppRoutes from "./appRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
