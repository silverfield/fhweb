import {
    HashRouter as Router,
    NavLink,
} from "react-router-dom";

import ScrollToTop from './ScrollToTop.js'


function MenuItem({
    to,
    title,
    submenuItems=null
}) {
    let submenu = <></>;
    if (submenuItems) {
        submenu = <div className="sub-menu">
            {items.map(i => <SubMenuItem {...i}/>)}
        </div>
    }

    return <div className="menu">
        <div className="menu-item">
            <NavLink to={to} className="main-link" activeClassName="active-link">{title}</NavLink>
        </div>
        {submenu}
    </div>
}

function SubMenuItem({
    to,
    title,
}) {
    return <div className="sub-menu-item">
        <NavLink to={to} className="second-link" activeClassName="active-link">{title}</NavLink>
    </div>
}

function Menu({

}) {
    return (
        <nav className="menu">
            <Router>
                <ScrollToTop>
                <MenuItem to="/home" title="home"/>
                <MenuItem to="/my-music" title="my music" submenuItems={[
                    {to: '/my-music/everyday', title: 'everyday (demo album)'},
                    {to: '/my-music/originals', title: 'other originals'},
                    {to: '/my-music/covers', title: 'covers'},
                    {to: '/my-music/collaborations', title: 'collaborations'}
                ]}/>
                <MenuItem to="/busking" title="busking 4 good"/>
                <MenuItem to="/repertoire" title="repertoire"/>
                <MenuItem to="/about" title="about me"/>
                <MenuItem to="/contact" title="contact me"/>
                </ScrollToTop>
            </Router>
        </nav>
    );
  }
  


export default function PrimaryNav({

}) {
    return (
        <div id="primary-nav-wrap">
            <nav className="primary-nav">
                <Router>
                    <ScrollToTop>
                    <NavLink to="/home" className="main-link" activeClassName="active-link">home</NavLink>
                    <NavLink to="/my-music" className="main-link" activeClassName="active-link">my music</NavLink>
                    <NavLink to="/busking" className="main-link" activeClassName="active-link">busking 4 good</NavLink>
                    <NavLink to="/repertoire" className="main-link" activeClassName="active-link">repertoire</NavLink>
                    <NavLink to="/about" className="main-link" activeClassName="active-link">about me</NavLink>
                    <NavLink to="/contact" className="main-link" activeClassName="active-link">contact me</NavLink>
                    </ScrollToTop>
                </Router>
            </nav>

            <div id="header-title">Fero Hajnovič</div>
        </div>
    );
  }
  