import React, {useEffect, useRef} from 'react';
import "./bannerSlider.scss";
import Poster from "../poster/poster";

const BannerSlider = (props) => {
    const bannerRef = useRef();
    const data = props.data;
    const currentPoster = props.currentPoster;

    const switchTo = (index) => {
        return () => {
            currentPoster[1](index);
        }
    }

    useEffect(() => {
        const banner = bannerRef.current;
        const cardWidth = banner.children[0].clientWidth;
        banner.scrollLeft = cardWidth * currentPoster[0] + 15 * 2 * currentPoster[0];
    }, [currentPoster[0]])

    return (
        <div ref={bannerRef} className="bannerSlider">
            {
                data.map((el, index) => {
                    return <Poster
                        selected={currentPoster[0] === index}
                        key={index}
                        content={el}
                        onClick={switchTo(index)}/>
                })
            }
        </div>
    );
};

export default BannerSlider;