import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './mains/Home'

import Everyday from './mains/my-music/Everyday'
import Covers from './mains/my-music/Covers'
import Collaborations from './mains/my-music/Collaborations'

import Busking from './mains/Busking'

import Repertoire from './mains/Repertoire'

import About from './mains/About'

import Contact from './mains/Contact'

export default function Main({

}) {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={() => { 
                        window.location.href = '#/home'; 
                        return null;
                    }}/>
                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/my-music" exact component={() => { 
                        window.location.href = '#/my-music/everyday'; 
                        return null;
                    }}/>
                    <Route path="/my-music/everyday" >
                        <Everyday />
                    </Route>
                    <Route path="/my-music/everyday" >
                        <Everyday />
                    </Route>
                    <Route path="/my-music/collaborations" >
                        <Collaborations />
                    </Route>
                    <Route path="/my-music/covers" >
                        <Covers />
                    </Route>

                    <Route path="/busking">
                        <Busking />
                    </Route>
                    <Route path="/repertoire">
                        <Repertoire />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        </>
    );
  }
  