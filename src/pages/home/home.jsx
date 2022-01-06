import React from 'react';
import "./home.scss";
import InteractiveBanner from "../../components/interactiveBanner/interactiveBanner";

const Home = () => {
    return (
        <main className="homePage">
            <section className="banner">
                <InteractiveBanner/>
            </section>
            <section className="download">

            </section>
        </main>
    );
};

export default Home;