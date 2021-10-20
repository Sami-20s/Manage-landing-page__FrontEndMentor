import React from "react";
import Buttons from "./Buttons";
import HeroImg from "./HeroImg";
import Text from "./Text";

const Header = () => {
    return (
        <header id="header" className="container-px">
            <div className="header__wrapper">
                <HeroImg />
                <Text>
                    <Buttons />
                </Text>
            </div>
        </header>
    );
};

export default Header;
