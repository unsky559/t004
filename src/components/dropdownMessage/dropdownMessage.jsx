import React from 'react';
import "./dropdownMessage.scss";
import UserPic from "../userPic/userPic";

const DropdownMessage = () => {
    return (
        <div className="dropdownMessage">
            <UserPic/>
            <div className="content">
                <div className="contentHeader">
                    <span className="username">
                        Username
                    </span>
                    <date className="date">
                        31 October 2021
                    </date>
                </div>
                <div className="contentBody">
                    <p className="messagePreview">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, similique!</p>
                </div>
            </div>
        </div>
    );
};

export default DropdownMessage;