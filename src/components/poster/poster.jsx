import React from 'react';
import "./poster.scss";
import DrpIcon from "../drpIcon/drpIcon";
import Button from "../button/button";
import IconBtn from "../iconBtn/iconBtn";

const Poster = (props) => {
    const data = props.content;
    const selected = props.selected;
    return (
        <div className={["poster", selected ? "selected" : null].join(" ")} onClick={props.onClick}>
            <div className="posterForeground">
                <div className="posterButton">
                    <span>{data.title}</span>
                    <DrpIcon alternate/>
                </div>
                <div className="posterContenter">
                    <div className="contenterControls">
                        <IconBtn icon="static/icons/icon_favorite_default.png"/>
                        <Button>Start watching</Button>
                    </div>
                    <div className="contenterBody">
                        <span>{data.title}</span>
                    </div>
                    <div className="contenterFooter">
                        <DrpIcon alternate/>
                    </div>
                </div>
            </div>
            <div className="posterBackground">
                <img src={data.imageUrl} alt=""/>
            </div>
        </div>
    );
};

export default Poster;