import { Outlet } from "react-router-dom";
import Topbar from './Topbar';

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Connexion">connexion</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Inscription">Inscription</Link>
          </li>
          <li>
            <Link to="/Profil">Profil</Link>
          </li>
        </ul>
      </nav> */}
      <Topbar />

      <Outlet />
    </>
  );
};

export default Layout;
