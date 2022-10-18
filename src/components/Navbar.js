import React from 'react';
import {Bars, Nav, NavBtn, NavBtnLink, NavLink, NavLogo, NavMenu,} from './NavbarElements';
import NavbarLanguage from "./NavbarLanguage";

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    Logo
                </NavLogo>
                <Bars/>

                <NavMenu>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/experience">Experience</NavLink>
                    <NavLink to="/about">About Me</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/languages">Languages</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavBtn>
                        <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
                    </NavBtn>
                    <NavbarLanguage availableLanguages={props.availableLanguages}/>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar