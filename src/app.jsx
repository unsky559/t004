import React from 'react';
import "./shared/reset.scss";
import "./shared/colors_wh.scss";
import "./shared/grid.scss";
import Header from "./components/header/header";
import Home from "./pages/home/home";

const App = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <Header/>
            <Home/>
        </div>
    );
};

export default App;