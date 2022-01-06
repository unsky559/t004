import React from 'react';
import "./button.scss";

const Button = (props) => {
    const buttonClassname =  props.customClassName || "button";

    return (
        <button className={buttonClassname}>
            {props.children}
        </button>
    );
};

export default Button;