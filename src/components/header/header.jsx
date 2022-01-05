import React from 'react';
import "./header.scss";
import Logo from "../logo/logo";
import IconBtn from "../iconBtn/iconBtn";
import Search from "../search/search";
import Dropdown from "../dropdown/dropdown";
import Button from "../button/button";
import HamburgerBtn from "../hamburgerBtn/hamburgerBtn";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logoBlock">
                    <div className="logoGroup">
                        <Logo/>
                    </div>
                    <IconBtn icon="static/icons/menu_dots.png"/>
                    <div className="notifyGroup">
                        <IconBtn icon="static/icons/icon_favorites.png"/>
                        <IconBtn icon="static/icons/icon_message.png" label={5}/>
                    </div>
                </div>
                <div className="searchBlock">
                    <Search/>
                </div>
                <div className="sideBlock">
                    <Dropdown/>
                    <Button>Start broadcast</Button>
                    <HamburgerBtn/>
                </div>
            </div>
        </header>
    );
};

export default Header;