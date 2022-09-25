import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <h4>Navigation</h4>
        <div className="navbar">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/work"> Work</NavLink>
          <NavLink to="/about"> About test</NavLink>
          <NavLink to="/contact"> Contact</NavLink>
        </div>
        <div> </div>
      </nav>
      <img src="geo.png" alt=""></img>
    </div>
  );
};

export default Nav;
