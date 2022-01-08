import React, {useEffect, useState} from 'react';
import "./interactiveBanner.scss";
import IconBtn from "../iconBtn/iconBtn";
import Button from "../button/button";
import BannerSlider from "../bannerSlider/bannerSlider";
import BannerSliderProgress from "../bannerSliderProgress/bannerSliderProgress";

const InteractiveBanner = () => {
    const data = [{
            title: "Post name",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea earum error exercitationem hic minus",
            imageUrl: "https://images.unsplash.com/photo-1641463789150-9d8a474ed1b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Shrek 2",
            description: "Lorem asd asd asd ipsum dolor sit amet, consectetur adipisicing elit. Ea earum error exercitationem hic minus",
            imageUrl: "https://icdn.lenta.ru/images/2020/12/14/15/20201214153333319/pwa_list_rect_1024_b482663c5eb139c66c39134f0f4001e9.jpg"
        },
        {
            title: "Span text",
            description: "Lorem asd asd asd ipsum dolor sit amet, consectetur adipisicing elit. Ea earum error exercitationem hic minus",
            imageUrl: "https://images.unsplash.com/photo-1627486585964-5d582aa47e1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        },
        {
            title: "Banner 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea earum error exercitationem hic minus",
            imageUrl: "https://images.unsplash.com/photo-1530172888244-f3520bbeaa55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Bad wather",
            description: "lorem askdask dfngldfs gnsdf ngkjsdfg nsdkfn glkjsdfjlgk.",
            imageUrl: "https://images.unsplash.com/photo-1536215987353-f486af56a22e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Post name",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea earum error exercitationem hic minus",
            imageUrl: "https://images.unsplash.com/photo-1641463789150-9d8a474ed1b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Poster 2 name",
            description: "Lorem asd asd asd ipsum dolor sit amet, consectetur adipisicing elit. Ea earum error exercitationem hic minus",
            imageUrl: "https://images.unsplash.com/photo-1626294096822-55e4512bc957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
        },
        {
            title: "Span text",
            description: "Lorem asd asd asd ipsum dolor sit amet, consectetur adipisicing elit. Ea earum error exercitationem hic minus",
            imageUrl: "https://images.unsplash.com/photo-1627486585964-5d582aa47e1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        },
        {
            title: "Banner 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea earum error exercitationem hic minus",
            imageUrl: "https://images.unsplash.com/photo-1530172888244-f3520bbeaa55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Bad wather",
            description: "lorem askdask dfngldfs gnsdf ngkjsdfg nsdkfn glkjsdfjlgk.",
            imageUrl: "https://images.unsplash.com/photo-1536215987353-f486af56a22e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
    ]

    const currentPoster = useState(3);
    const loadingContentState = useState(false);

    const [currentData, newCurrentData] = useState(data[currentPoster[0]]);

    const goNext = () => {
        if(data.length - 1 === currentPoster[0]){
            currentPoster[1](0);
        }else{
            currentPoster[1](currentPoster[0] + 1);
        }
    }

    const goPrev = () => {
        if(currentPoster[0] === 0){
            currentPoster[1](data.length - 1);
        }else{
            currentPoster[1](currentPoster[0] - 1);
        }
    }

    useEffect(() => {
        loadingContentState[1](true);
        setTimeout(() => {
            newCurrentData(data[currentPoster[0]]);
            loadingContentState[1](false);
            console.log(loadingContentState[0]);
        }, 500);
    }, [currentPoster[0]]);

    useEffect(() => {
        const switchInterval = setInterval(() => {
            if(data.length - 1 === currentPoster[0]){
                currentPoster[1](0);
            }else{
                currentPoster[1](currentPoster[0]+1);
            }
        }, 5000);
        return () => {
            clearInterval(switchInterval);
        }
    }, [currentPoster[0]])

    return (
        <div className="interactiveBanner">
            <div className="foreground">
                <div className="headerContent">
                    <div className="container">
                        <div className="posterDescription">
                            <div className={["content", loadingContentState[0] ? "loading" : null].join(" ")}>
                                <h2 className="posterName">{currentData.title}</h2>
                                <p className="posterDesc">{currentData.description}</p>
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

                    <BannerSlider currentPoster={currentPoster} data={data}/>

                    <div className="container">
                        <div className="bottomSlider">
                            <BannerSliderProgress isRun={!loadingContentState[0]}/>
                        </div>
                        <div className="bottomControls">
                            <IconBtn
                                onClick={goPrev}
                                hoverLabel="static/icons/arrow_back_hover.png"
                                icon="static/icons/arrow_back_default.png"/>
                            <IconBtn
                                onClick={goNext}
                                hoverLabel="static/icons/arrow_next_hover.png"
                                icon="static/icons/arrow_next_default.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background">
                <div className="bgUnderSplash"></div>
                <div className={["bgImage", loadingContentState[0] ? "loading" : null].join(" ")} style={{
                    backgroundImage : `url(${currentData.imageUrl})`
                }}></div>
            </div>
        </div>
    );
};

export default InteractiveBanner;