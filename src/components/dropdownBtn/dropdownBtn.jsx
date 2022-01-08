import React from 'react';
import "./dropdownBtn.scss";
import DrpIcon from "../drpIcon/drpIcon";

const DropdownBtn = (props) => {

    const title = props.title;

    return (
        <button className="dropdownBtn">
            <div className="dropdownHeader">
                <span>
                    {title}
                </span>
                <DrpIcon/>
            </div>
        </button>
    );
};

export default DropdownBtn;