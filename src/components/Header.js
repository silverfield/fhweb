import {
    HashRouter as Router,
    NavLink,
} from "react-router-dom";
import {isMobile} from '../helpers/combo-helper'
import { withRouter } from "react-router";
import {useState, useEffect, useContext, createContext} from "react"

import ScrollToTop from './ScrollToTop.js'

const MenuItem = withRouter(MenuItemImp);

const StickyContext = createContext(false);

function MenuItemImp({
    to,
    title,
    submenuItems=null,
    location
}) {
    const [inMenu, setInMenu] = useState(false);
    const [inSubMenu, setInSubMenu] = useState(false);
    
    const isSticky = useContext(StickyContext);
    let isActive = location.pathname.startsWith(to);

    let submenu = <></>

    if (submenuItems) {
        submenu = <div 
            className={'sub-menu' + ((inMenu || inSubMenu || (isActive && !isSticky)) ? ' active-sub' : '')}
            onMouseEnter={() => setInSubMenu(true)} 
            onMouseLeave={() => setInSubMenu(false)}
        >
            {submenuItems.map((i, ind) => <SubMenuItem key={ind} {...i}/>)}
        </div>
    }

    let navLink = <NavLink 
        to={to} 
        className={"main-link" + ((inMenu || inSubMenu) ? ' hovering-main' : '')} 
        activeClassName="active-link"
    >{title}</NavLink>

    let dummyNavLink = <a
        className={"main-link" + ((inMenu || inSubMenu) ? ' hovering-main' : '') + (isActive ? ' active-link' : '')} 
    >{title}</a>

    return <div className="menu-item" onMouseEnter={() => setInMenu(true)} onMouseLeave={() => setInMenu(false)}>
        {(isMobile && submenuItems !== null) ? dummyNavLink : navLink }
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
    return <div className="menu">
        <MenuItem to="/home" title="home" />
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
    </div>
}

function NavBar({

}) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        var navbar = document.getElementById("nav");
        var menuSticky = document.getElementById("menu-sticky");
        var body = $('#body');

        function resizeStickyMenu() {
            menuSticky.style.left = body.css('marginLeft');
            menuSticky.style.right = body.css('marginRight');
        };
        resizeStickyMenu();
        
        window.onscroll = function() {
            if (window.pageYOffset >= navbar.clientHeight) {
                menuSticky.style.display = 'block';
                setIsSticky(true);
            } else {
                menuSticky.style.display = 'none';
                setIsSticky(false);
            }
        };

        window.onresize = function() {
            resizeStickyMenu();
        };
    });

    return (
        <StickyContext.Provider value={isSticky}>  
        <nav id="nav">
            <Router>
                <ScrollToTop>
                    <div id="menu-std">
                        <Menu/>
                    </div>
                    <div id="menu-sticky" style={{'display': 'none'}}>
                        <Menu/>
                    </div>
                </ScrollToTop>
            </Router>
        </nav>
        </StickyContext.Provider>
    );
}

export default function Header({

}) {
    return (
        <>
            <div className="header">
                <NavBar/>
                <div id="header-title">
                    Fero <br/>
                    Hajnovič <br/>
                    Music
                </div>
            </div>
        </>
    );
  }
  