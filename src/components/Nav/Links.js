import React from "react";

const Links = ({ list, isOpen }) => {
    return (
        <div
            className={`${
                isOpen
                    ? "nav__wrapper__links hide-for-mobile active"
                    : "nav__wrapper__links hide-for-mobile"
            }`}
        >
            <ul>
                {list.map(link => {
                    return (
                        <li key={link.id}>
                            <a href="#">{link.title}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Links;
