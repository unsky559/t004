import React, {useEffect, useState} from 'react';
import "./interactiveBanner.scss";
import IconBtn from "../iconBtn/iconBtn";
import Button from "../button/button";
import BannerSlider from "../bannerSlider/bannerSlider";
import BannerSliderProgress from "../bannerSliderProgress/bannerSliderProgress";

const InteractiveBanner = () => {
    const data = [
        {
            title: "Henri Pham",
            description: "We were exploring at night in search of some interesting lights to make use of reflections and flares out of. Funny enough we came across a few neon lights from a fish & chip restaurant and to be honest I didn’t think it would work out this well!",
            imageUrl: "https://images.unsplash.com/photo-1504131598085-4cca8500b677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        },
        {
            title: "Christmas tree",
            description: "Christmas Tree EXEC was the first widely disruptive computer worm, which paralyzed several international computer networks in December 1987. The virus ran on the IBM VM/CMS operating system.",
            imageUrl: "https://images.unsplash.com/photo-1641627498987-e0d1e1af3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        },
        {
            title: "City",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur cum cumque esse itaque iure molestias nihil pariatur provident quos.",
            imageUrl: "https://images.unsplash.com/photo-1641637968245-95471a9c90df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        },
        {
            title: "Roe deer",
            description: "Runnin' Down A Dream",
            imageUrl: "https://images.unsplash.com/photo-1592386367624-ccf3cd60e337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80"
        },
        {
            title: "Shrek",
            description: "Cool dude, positive. Favorite cartoon of millions. Shrek is a 2001 American computer-animated comedy film loosely based on the 1990 fairy tale picture book of the same name by William Steig.",
            imageUrl: "https://icdn.lenta.ru/images/2020/12/14/15/20201214153333319/pwa_list_rect_1024_b482663c5eb139c66c39134f0f4001e9.jpg"
        },
        {
            title: "Wants to work",
            description: "Typical WEB developer",
            imageUrl: "https://images.unsplash.com/photo-1494368308039-ed3393a402a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1543&q=80"
        },
        {
            title: "Legend",
            description: "My future car",
            imageUrl: "https://images.unsplash.com/photo-1495013034289-3664878e32f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80"
        },
        {
            title: "Lovely",
            description: "It's me if you hire me",
            imageUrl: "https://img03.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/3/f8/3f81b6ab23e3751d25ee63d098c48c69.png"
        },
        {
            title: "One more banner",
            description: "One more description.",
            imageUrl: "https://images.unsplash.com/photo-1641231431225-b6854b15c2a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
    ]

    const currentPoster = useState(0);
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