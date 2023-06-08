import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
        <nav className="navbar">
          <li className="navbar-button nav-btn">
            <Link to={`/`}>
              <b>BQ</b> Assignment
            </Link>
          </li>
          <div className="navbar-right">
            <ul>
              <li className="navbar-button">
                <Link to={`/quiz`}>Quiz</Link>
              </li>
              <li className="navbar-button">
                <Link to={`/todo`}>Todo</Link>
              </li>
              <li className="navbar-button">
                <Link to={`/calculator`}>Calculator</Link>
              </li>
              <li className="navbar-button">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="navbar-button">
                <Link to={`/contact`}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
  );
}
