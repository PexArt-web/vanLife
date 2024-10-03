import { Link, NavLink } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const logOut = () => {
    localStorage.removeItem("loggedIn");
    window.location.reload();
  };
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>

      <nav>
        <NavLink to="/host">Host</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/vans">Vans</NavLink>
        <Link to="login" className="login-link">
          <UserCircleIcon style={{ height: "40px", paddingTop: "20px" }} />
        </Link>
        <button onClick={logOut}>Log Out</button>
      </nav>
    </header>
  );
};

export default Header;
