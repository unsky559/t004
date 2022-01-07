import React from 'react';
import "./interactiveBanner.scss";
import IconBtn from "../iconBtn/iconBtn";
import Button from "../button/button";
import BannerSlider from "../bannerSlider/bannerSlider";
import BannerSliderProgress from "../bannerSliderProgress/bannerSliderProgress";

const InteractiveBanner = () => {
    return (
        <div className="interactiveBanner">
            <div className="foreground">
                <div className="headerContent">
                    <div className="container">

                        <div className="posterDescription">
                            <div className="content">
                                <h2 className="posterName">Poster name</h2>
                                <p className="posterDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea earum error exercitationem hic minus nam, quaerat quo tempora veniam voluptatum?</p>
                            </div>
                        </div>
                        <div className="posterActions">
                            <Button>Start watching</Button>
                            <Button customClassName="transparentBtn">To Author's page</Button>
                            <IconBtn icon="static/icons/icon_favorite_default.png"/>
                        </div>
                    </div>
                </div>
                <div className="bottomContent">
                    <BannerSlider/>
                    <div className="container">
                        <div className="bottomSlider">
                            <BannerSliderProgress/>
                        </div>
                        <div className="bottomControls">
                            <IconBtn icon="static/icons/arrow_back_default.png"/>
                            <IconBtn icon="static/icons/arrow_next_default.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background" style={{
                'background-image': 'linear-gradient(transparent, #28282dcc), url(/static/images/background.png)'
            }}>

            </div>
        </div>
    );
};

export default InteractiveBanner;