import {
    HashRouter as Router,
    NavLink,
} from "react-router-dom";

export default function PrimaryNav({

}) {
    return (
        <div id="primary-nav-wrap">
            <nav className="primary-nav">
                <Router>
                    <NavLink to="/home" className="main-link" activeClassName="active-link">home</NavLink>
                    <NavLink to="/my-music" className="main-link" activeClassName="active-link">my music</NavLink>
                    <NavLink to="/busking" className="main-link" activeClassName="active-link">busking 4 good</NavLink>
                    <NavLink to="/repertoire" className="main-link" activeClassName="active-link">repertoire</NavLink>
                    <NavLink to="/about" className="main-link" activeClassName="active-link">about me</NavLink>
                    <NavLink to="/contact" className="main-link" activeClassName="active-link">contact me</NavLink>
                </Router>
            </nav>

            <div id="header-title">Fero Hajnovič</div>
        </div>
    );
  }
  