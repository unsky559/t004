import React from 'react';
import "./bannerSlider.scss";
import Poster from "../poster/poster";

const BannerSlider = () => {
    return (
        <div className="bannerSlider">
            <Poster/>
            <Poster/>
            <Poster/>
            <Poster/>
            <Poster/>
        </div>
    );
};

export default BannerSlider;