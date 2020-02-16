import {
    HashRouter as Router,
    NavLink,
    Switch,
    Route,
} from "react-router-dom";

export default function SecondaryNav({

}) {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/my-music">
                        <nav className="secondary-nav">
                            <NavLink to="/my-music/everyday" className="second-link" activeClassName="active-link">everyday (demo album)</NavLink>
                            <NavLink to="/my-music/covers" className="second-link" activeClassName="active-link">covers</NavLink>
                            <NavLink to="/my-music/collaborations" className="second-link" activeClassName="active-link">collaborations</NavLink>
                        </nav>
                    </Route>
                </Switch>
            </Router>
        </>
    );
  }
  