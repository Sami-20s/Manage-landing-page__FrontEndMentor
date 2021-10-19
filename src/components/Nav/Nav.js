import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import Burger from "./Burger";
import Buttons from "./Buttons";
import Links from "./Links";

const Nav = () => {
    const { navList, Logo } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    if (isOpen) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }
    return (
        <nav id="nav" className="container">
            <div className="nav__wrapper">
                <Logo className="logo" />
                <Links list={navList} isOpen={isOpen} />
                <Buttons />
                <Burger handleClick={handleClick} isOpen={isOpen} />
            </div>
        </nav>
    );
};

export default Nav;
