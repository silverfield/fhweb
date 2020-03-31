import {
    HashRouter as Router,
    NavLink,
    Switch,
    Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history'

import ScrollToTop from './ScrollToTop.js'

export default function SecondaryNav({

}) {
    return (
        <>
            <Router onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}>
                <ScrollToTop>
                <Switch>
                    <Route path="/my-music">
                        <nav className="secondary-nav">
                            <NavLink to="/my-music/everyday" className="second-link" activeClassName="active-link">everyday (demo album)</NavLink>
                            <NavLink to="/my-music/covers" className="second-link" activeClassName="active-link">covers</NavLink>
                            <NavLink to="/my-music/collaborations" className="second-link" activeClassName="active-link">collaborations</NavLink>
                        </nav>
                    </Route>
                </Switch>
                </ScrollToTop>
            </Router>
        </>
    );
  }
  