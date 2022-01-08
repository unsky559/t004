import React from 'react';
import "./bannerSlider.scss";
import Poster from "../poster/poster";

const BannerSlider = (props) => {
    const data = props.data;
    const currentPoster = props.currentPoster;

    const switchTo = (index) => {
        return () => {
            currentPoster[1](index);
        }
    }

    return (
        <div className="bannerSlider">
            {
                data.map((el, index) => {
                    return <Poster selected={currentPoster[0] === index} content={el} onClick={switchTo(index)}/>
                })
            }
        </div>
    );
};

export default BannerSlider;