import React from 'react';
import "./home.scss";
import InteractiveBanner from "../../components/interactiveBanner/interactiveBanner";
import DownloadSection from "../../components/downloadSection/downloadSection";

const Home = () => {
    return (
        <main className="homePage">
            <section className="banner">
                <InteractiveBanner/>
            </section>
            <section className="download">
                <DownloadSection/>
            </section>
        </main>
    );
};

export default Home;