import React from 'react';
import "./dropdown.scss";
import DrpIcon from "../drpIcon/drpIcon";

const Dropdown = () => {
    return (
        <div className="dropdown">
            <button>
                <div className="dropdownHeader">
                    <span>
                        Hebrew
                    </span>
                    <DrpIcon/>
                </div>
            </button>
        </div>
    );
};

export default Dropdown;