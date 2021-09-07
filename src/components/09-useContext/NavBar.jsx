import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">UseContext</Link>

      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <NavLink exact activeClassName="active" to="/" className="nav-item nav-link">Home</NavLink>
          <NavLink exact activeClassName="active" to="/about" className="nav-item nav-link">About</NavLink>
          <NavLink exact activeClassName="active" to="/login" className="nav-item nav-link">Login</NavLink>
        </div>
      </div>
    </nav>
  );
}
 // La diferencia entre NavLink y Nav, es uqe navlink permite porner el atributo activeClass y exact que indica la ruta exacta en la que nos encontramos.