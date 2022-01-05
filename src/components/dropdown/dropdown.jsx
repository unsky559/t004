import React from 'react';
import "./dropdown.scss";

const Dropdown = () => {
    return (
        <div className="dropdown">
            <button>
                <div className="dropdownHeader">
                    <span>
                        Hebrew
                    </span>
                    <div className="drpIcon"></div>
                </div>
            </button>
        </div>
    );
};

export default Dropdown;