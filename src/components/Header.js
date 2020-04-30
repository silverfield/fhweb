import {
    HashRouter as Router,
    NavLink,
} from "react-router-dom";
import { withRouter } from "react-router";
import {useState} from "react"

import ScrollToTop from './ScrollToTop.js'


const MenuItem = withRouter(MenuItemImp);

function MenuItemImp({
    to,
    title,
    submenuItems=null,
    location
}) {
    const [inMenu, setInMenu] = useState(false);
    const [inSubMenu, setInSubMenu] = useState(false);

    let isActive = location.pathname.startsWith(to);

    let submenu = <></>

    if (submenuItems) {
        submenu = <div 
            className={'sub-menu' + ((inMenu || inSubMenu || isActive) ? ' active-sub' : '')}
            onMouseEnter={() => setInSubMenu(true)} 
            onMouseLeave={() => setInSubMenu(false)}
        >
            {submenuItems.map((i, ind) => <SubMenuItem key={ind} {...i}/>)}
        </div>
    }

    return <div className="menu-item" onMouseEnter={() => setInMenu(true)} onMouseLeave={() => setInMenu(false)}>
        <NavLink 
            to={to} 
            className={"main-link" + ((inMenu || inSubMenu) ? ' hovering-main' : '')} 
            activeClassName="active-link"
        >{title}</NavLink>
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
        <nav>
            <Router>
                <ScrollToTop>
                <div className="menu">
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
                </div>
                </ScrollToTop>
            </Router>
        </nav>
    );
}

export default function Header({

}) {
    return (
        <>
            <div className="header">
                <Menu/>
                <div id="header-title">Fero Hajnovič</div>
            </div>
        </>
    );
  }
  