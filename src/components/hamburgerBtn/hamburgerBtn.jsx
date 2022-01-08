import React from 'react';
import "./hamburgerBtn.scss";

const HamburgerBtn = (props) => {
    return (
        <div className={props.className}>
            <button className="hamburgerBtn" onClick={props.onClick}>
                <div className="hamburgerImg"></div>
            </button>
        </div>
    );
};

export default HamburgerBtn;