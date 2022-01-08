import React, {useState} from 'react';
import "./header.scss";
import Logo from "../logo/logo";
import IconBtn from "../iconBtn/iconBtn";
import Search from "../search/search";
import Dropdown from "../dropdown/dropdown";
import Button from "../button/button";
import HamburgerBtn from "../hamburgerBtn/hamburgerBtn";
import DropdownMessages from "../dropdownMessages/dropdownMessages";
import DropdownBtn from "../dropdownBtn/dropdownBtn";
import DropdownLangSwitch from "../dropdownLangSwitch/dropdownLangSwitch";
import DropdownFavs from "../dropdownFavs/dropdownFavs";
import DropdownControl from "../dropdownControl/dropdownControl";
import FullScreenMenu from "../fullScreenMenu/fullScreenMenu";

const Header = () => {
    const menuState = useState(false);

    const openMenu = () => {
        menuState[1](true);
    }

    return (
    <>
        <FullScreenMenu enabled={menuState}/>
        <header className="header">
            <div className="container">
                <div className="logoBlock">
                    <div className="logoGroup">
                        <Logo/>
                    </div>
                    <Dropdown header={<IconBtn icon="static/icons/menu_dots.png"/>}>
                        <DropdownControl/>
                    </Dropdown>
                    <div className="notifyGroup">
                        <Dropdown header={<IconBtn icon="static/icons/icon_favorites.png"/>}>
                            <DropdownFavs/>
                        </Dropdown>
                        <Dropdown header={<IconBtn icon="static/icons/icon_message.png" label={5}/>}>
                            <DropdownMessages/>
                        </Dropdown>
                    </div>
                </div>
                <div className="searchBlock">
                    <Search/>
                </div>
                <div className="sideBlock">
                    <Dropdown header={<DropdownBtn title="Hebrews"/>}>
                        <DropdownLangSwitch/>
                    </Dropdown>
                    <Button>Start broadcast</Button>
                    <HamburgerBtn onClick={openMenu}/>
                </div>
            </div>
        </header>
    </>
    );
};

export default Header;