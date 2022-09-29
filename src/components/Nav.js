import { NavLink } from "react-router-dom";
import "../Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="grid-container">
          <div className="grid-item">
            <NavLink className="navLink" to="/">
              Home
            </NavLink>
          </div>
          <div className="grid-item">
            <NavLink className="navLink" to="/work">
              Work
            </NavLink>
          </div>
          <div className="grid-item">
            <NavLink className="navLink" to="/about">
              About
            </NavLink>
          </div>
          <div className="grid-item">
            <NavLink className="navLink" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
      {/* <img src="geo.png" alt=""></img> */}
    </div>
  );
};

export default Nav;
