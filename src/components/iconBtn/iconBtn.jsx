import React from 'react';
import "./iconBtn.scss";

const IconBtn = (props) => {
    const icon = props.icon;
    const iconAlt = "Icon" || props.iconAlt;

    const label = props.label;
    const hoverLabel = props.hoverLabel || icon;
    const big = props.big ? "big" : null;
    const colorful = props.colorful ? "colorful" : null;

    return (
        <div className={props.className}>
            <div className="iconBtnCont">
                {
                    label && <div className="iconBtnLabel">
                <span>
                    {label}
                </span>
                    </div>
                }
                <button className={["iconBtn", big, colorful].join(" ")} onClick={props.onClick}>
                    <img src={icon} alt={iconAlt} className="label"/>
                    <img src={hoverLabel} alt={iconAlt} className="hoverLabel"/>
                </button>
            </div>
        </div>
    );
};

export default IconBtn;