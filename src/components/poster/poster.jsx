import React from 'react';
import "./poster.scss";
import DrpIcon from "../drpIcon/drpIcon";
import Button from "../button/button";
import IconBtn from "../iconBtn/iconBtn";

const Poster = () => {
    return (
        <div className="poster">
            <div className="posterForeground">
                <div className="posterButton">
                    <span>SDA</span>
                    <DrpIcon alternate/>
                </div>
                <div className="posterContenter">
                    <div className="contenterControls">
                        <IconBtn icon="static/icons/icon_favorite_default.png"/>
                        <Button>Start watching</Button>
                    </div>
                    <div className="contenterBody">
                        <span>Test</span>
                    </div>
                    <div className="contenterFooter">
                        <DrpIcon alternate/>
                    </div>
                </div>
            </div>
            <div className="posterBackground">
                <img src="../static/images/img3.png" alt=""/>
            </div>
        </div>
    );
};

export default Poster;