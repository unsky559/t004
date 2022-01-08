import React from 'react';
import "./dropdownFavs.scss";
import UserPic from "../userPic/userPic";
import IconBtn from "../iconBtn/iconBtn";

const DropdownFavs = () => {
    return (
        <div className="dropdownFavs">
            <button className="favBtn">
                <div className="userData">
                    <UserPic/>
                    <span className="username">
                        Username
                    </span>
                </div>

                <div className="controls">
                    <IconBtn icon="../static/icons/icon_heard.png"
                             hoverLabel="../static/icons/icon_heard_d.png"/>
                </div>
            </button>
        </div>
    );
};

export default DropdownFavs;