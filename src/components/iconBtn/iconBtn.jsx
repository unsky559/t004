import React from 'react';
import "./iconBtn.scss";

const IconBtn = (props) => {
    const icon = props.icon;
    const iconAlt = "Icon" || props.iconAlt;

    const label = props.label;

    return (
        <div className="iconBtnCont">
            {
                label && <div className="iconBtnLabel">
                <span>
                    {label}
                </span>
                </div>
            }
            <button className="iconBtn">
                <img src={icon} alt={iconAlt}/>
            </button>
        </div>
    );
};

export default IconBtn;