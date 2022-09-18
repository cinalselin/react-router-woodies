import { Link } from "react-router-dom";

import "./Nav.css";
import Logo from "../Images/Logo.png";

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
