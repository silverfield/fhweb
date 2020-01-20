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
                    <Route path="/busking">
                        <nav className="secondary-nav">
                            <NavLink to="/busking/" className="second-link" activeClassName="active-link" exact={true}>causes supported</NavLink>
                            <NavLink to="/busking/material" className="second-link" activeClassName="active-link">material</NavLink>
                        </nav>
                    </Route>
                    <Route path="/original">
                        <nav className="secondary-nav">
                            <NavLink to="/original/silverfield" className="second-link" activeClassName="active-link">causes supported</NavLink>
                        </nav>
                    </Route>
                </Switch>
            </Router>
        </>
    );
  }
  