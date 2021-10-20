import React from "react";

const Text = ({ children }) => {
    return (
        <div className="header__wrapper__text">
            <h1>Bring everyone together to build better products.</h1>
            <p>
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
            </p>
            {children}
        </div>
    );
};

export default Text;
