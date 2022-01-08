import React from 'react';
import "./dropdownControl.scss";

const DropdownControl = () => {
    return (
        <div className="dropdownControls">
            <ul className="pad">
                <li className="selected"><a href="#">Account</a></li>
                <li className="selected"><a href="#">My subscriptions</a></li>
                <li className="selected"><a href="#">History</a></li>
            </ul>
            <ul>
                <li className="extended"><a href="#">Log out</a></li>
            </ul>
        </div>
    );
};

export default DropdownControl;