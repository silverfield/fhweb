import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './mains/Home'
import CausesSupported from './mains/busking/CausesSupported'
import Material from './mains/busking/Material'
import Contact from './mains/Contact'
import Original from './mains/Original'

export default function Main({

}) {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/busking" exact>
                        <CausesSupported />
                    </Route>
                    <Route path="/busking/material">
                        <Material />
                    </Route>
                    <Route path="/original">
                        <Original />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/presentation" component={() => { 
                        window.location.href = '/presentation.html'; 
                        return null;
                    }}/>
                </Switch>
            </Router>
        </>
    );
  }
  