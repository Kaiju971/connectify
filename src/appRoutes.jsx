import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Contact from "./pages/Contact";

import NoPage from "./pages/noPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/Accueil" element={<Accueil />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
