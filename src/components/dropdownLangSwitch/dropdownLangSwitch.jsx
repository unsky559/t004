import React from 'react';
import "./dropdownLangSwitch.scss";

const DropdownLangSwitch = () => {
    return (
        <div className="dropdownLangSwitch">
            <ul>
                <li className="selected"><a href="#">Herbrew</a></li>
                <li><a href="#">English</a></li>
            </ul>
        </div>
    );
};

export default DropdownLangSwitch;