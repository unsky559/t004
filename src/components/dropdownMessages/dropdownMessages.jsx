import React from 'react';
import "./dropdownMessages.scss";
import DropdownMessage from "../dropdownMessage/dropdownMessage";

const DropdownMessages = () => {
    return (
        <div className="dropdownMessages">
            <DropdownMessage/>
            <DropdownMessage/>
            <DropdownMessage/>
        </div>
    );
};

export default DropdownMessages;