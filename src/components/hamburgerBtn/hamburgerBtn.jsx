import React from 'react';
import "./hamburgerBtn.scss";

const HamburgerBtn = (props) => {
    return (
        <button className="hamburgerBtn" onClick={props.onClick}>
            <div className="hamburgerImg"></div>
        </button>
    );
};

export default HamburgerBtn;