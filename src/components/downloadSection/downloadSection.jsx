import React from 'react';
import "./downloadSection.scss";
import IconBtn from "../iconBtn/iconBtn";

const DownloadSection = () => {
    return (
        <div className="downloadSection" style={{
            "background-image": "url(../static/images/bg_yooosi_app-min.png)"
        }}>
            <div className="container">

                <div className="promo">
                    <h4 className="promoSub">Available now</h4>
                    <h3 className="promoTitile">The Yooosi app</h3>
                </div>
                <div className="links">
                    <IconBtn big colorful
                             icon="static/icons/icon_apple.png"
                             hoverLabel="static/icons/icon_apple_d.png"/>
                    <IconBtn big colorful
                             icon="static/icons/icon_android.png"
                             hoverLabel="static/icons/icon_android_d.png"/>
                    <IconBtn big colorful
                             icon="static/icons/icon_fb.png"
                             hoverLabel="static/icons/icon_fb_d.png"/>
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;