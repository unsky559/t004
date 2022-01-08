import React, {useState} from 'react';
import "./dropdown.scss";
import DrpIcon from "../drpIcon/drpIcon";
import DropdownBtn from "../dropdownBtn/dropdownBtn";

const Dropdown = (props) => {
    const isOpen = useState(false);
    const header = props.header;
    const body = props.children;

    const switchState = () => {
        isOpen[1](!isOpen[0]);
    }

    return (
        <div className="dropdownContainer">
            <div className="dropdown" onClick={switchState}>
                {header}
            </div>
            {
                isOpen[0] &&
                <div className="dropdown_drop">
                    {body}
                </div>
            }
        </div>
    );
};

export default Dropdown;