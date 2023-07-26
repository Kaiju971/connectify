
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Accueil from "./pages/accueil";
// import Blogs from "./pages/Blogs";
import Contact from "./pages/contact";
// import NoPage from "./pages/NoPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
