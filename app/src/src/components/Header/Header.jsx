import React, {useState} from 'react';
import MyLink from "@/components/MyLink/MyLink";

const Header = () => {
    const [navbarBurgerActive, setNavbarBurgerActive] = useState(false);

    return (
        <>
            <header className="header">
                <div className="brand"><MyLink href={"/"}>anomalyy</MyLink></div>
                <nav className="navbar">
                    <ul className="menu">
                        <li><MyLink href={"/"}>Home</MyLink></li>
                        <li><MyLink href={"/contact"}>Contact</MyLink></li>
                        <li><MyLink href={"/about"}>About</MyLink></li>
                        <li><MyLink href={"/news"}>News</MyLink></li>
                    </ul>
                    <div className={`navbar-burger ${navbarBurgerActive ? "_active" : ""}`} onClick={() => setNavbarBurgerActive(!navbarBurgerActive)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>
            <ul className={`mobile-menu ${navbarBurgerActive ? "_active" : ""}`}>
                <li><MyLink href={"/"}>Home</MyLink></li>
                <li><MyLink href={"/contact"}>Contact</MyLink></li>
                <li><MyLink href={"/about"}>About</MyLink></li>
                <li><MyLink href={"/news"}>News</MyLink></li>
            </ul>
        </>
    );
};

export default Header;