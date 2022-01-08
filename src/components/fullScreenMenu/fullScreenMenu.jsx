import React, {useEffect, useState} from 'react';
import "./fullScreenMenu.scss";
import IconBtn from "../iconBtn/iconBtn";

const FullScreenMenu = (props) => {
    const enabled = props.enabled;

    const closeMenu = () => {
        enabled[1](false);
    }

    useEffect(() => {
       if(enabled[0]){
           document.body.style.overflowY = 'hidden';
       }else{
           document.body.style.overflowY = 'auto';
       }
    });


    if(enabled[0]){
        return (
            <div className="fullScreenMenu">
                <div className="background">
                    <div className="foreground">
                        <div className="content">
                            <div className="closeRow">
                                <IconBtn icon = "static/icons/close.png" onClick={closeMenu}/>
                            </div>
                            <nav className="bigLinks">
                                <ul>
                                    <li><a href="">Be-fan</a></li>
                                    <li><a href="">Live Yooosi</a></li>
                                    <li><a href="">Yooosi channels</a></li>
                                    <li><a href="">For streemers</a></li>
                                    <li><a href="">Broadcast chedule</a></li>
                                    <li><a href="">About us</a></li>
                                </ul>
                            </nav>
                            <section className="downloadApp">
                                <h4 className="downloadTitle">Download app</h4>
                                <div className="iconLinks">
                                    <a href=""><img src="static/icons/img-play-store.png" alt=""/></a>
                                    <a href=""><img src="static/icons/img-app-store.png" alt=""/></a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return null;
};

export default FullScreenMenu;