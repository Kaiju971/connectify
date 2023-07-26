import { Outlet } from "react-router-dom";
import Topbar from './Topbar';

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
<Topbar />

      <Outlet />
    </>
  );
};

export default Layout;
