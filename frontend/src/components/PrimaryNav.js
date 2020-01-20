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
                    <NavLink to="/" className="main-link" activeClassName="active-link" exact={true}>home</NavLink>
                    <NavLink to="/busking" className="main-link" activeClassName="active-link">busking 4 good</NavLink>
                    {/* <NavLink to="/presentation" className="main-link" activeClassName="active-link">presentation</NavLink> */}
                    <NavLink to="/original" className="main-link" activeClassName="active-link">original stuff</NavLink>
                    <NavLink to="/about" className="main-link" activeClassName="active-link">about me</NavLink>
                    <NavLink to="/contact" className="main-link" activeClassName="active-link">contact</NavLink>
                </Router>
            </nav>

            <div id="header-title">Fero Hajnovic</div>
        </div>
    );
  }
  