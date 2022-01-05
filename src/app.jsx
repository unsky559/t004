import React from 'react';
import "./shared/reset.scss";
import "./shared/colors_wh.scss";
import "./shared/grid.scss";
import Header from "./components/header/header";

const App = () => {
    return (
        <div>
            <Header/>
            <h1>Helloworld!</h1>
        </div>
    );
};

export default App;