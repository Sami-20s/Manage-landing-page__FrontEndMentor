import React from "react";

const Burger = ({ handleClick, isOpen }) => {
    return (
        <div
            className={`${
                isOpen
                    ? "nav__wrapper__burger hide-for-desktop burger-active"
                    : "nav__wrapper__burger hide-for-desktop"
            }`}
            onClick={handleClick}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Burger;
