import React, { useState, useEffect } from "react";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Contact from "./pages/Contact";
import Profil from "./pages/Profil";
import Login from "./pages/screens/auth/Login";
import NoPage from "./pages/noPage";
// import { setClientToken } from "./pages/Spotify";
// import { useEffect } from "react";

export default function AppRoutes() {
  // const [token, setToken] = useState("");
  // useEffect(() => {
  //   const token = window.localStorage.getItem("token");
  //    const hash = window.location.hash;
  //    window.location.hash = "";
  //    if (!token && hash) {
  //      const _token = hash.split("&")[0].split("=")[1];
  //      window.localStorage.setItem("token", _token);
  //      setToken(_token);
  // setClientToken(_token);
  //    } else {
  //      setToken(token);
  // setClientToken(token);
  //    }
  //  }, []);
  //  return !token ? (
  // <Login />
  //  ) : (
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/accueil" element={<Accueil />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/deconnexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}
