import React from 'react';
import "./bannerSliderProgress.scss";

const BannerSliderProgress = (props) => {

    const isRun = props.isRun;

    return (
        <div className={["bannerSliderProgress", isRun ? "animate" : null].join(" ")}>
            <div className="progress"></div>
            <div className="progressBack"></div>
        </div>
    );
};

export default BannerSliderProgress;