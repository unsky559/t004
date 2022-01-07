import React from 'react';
import "./drpIcon.scss";

const DrpIcon = (props) => {
    return (
        <div className={["drpIcon", props.alternate && "alternate"].join(" ")}>

        </div>
    );
};

export default DrpIcon;