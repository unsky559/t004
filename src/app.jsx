import React, {useEffect, useState} from 'react';
import "./shared/reset.scss";
import "./shared/colors_wh.scss";
import "./shared/grid.scss";
import Header from "./components/header/header";
import Home from "./pages/home/home";

const App = () => {

    const menuState = useState(false);

    const stylesState = useState({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    });

    return (
        <div style={stylesState[0]}>
            <Header menuState={menuState}/>
            <Home/>
        </div>
    );
};

export default App;