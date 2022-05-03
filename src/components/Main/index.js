// Styles
import Styles from './styles.module.scss';
// Components
import Header from '../Header';
import Banner from '../Banner';
import Footer from '../Footer';
import VideoContent from '../VideoContent';
import About from '../About';
import WhatExpect from '../WhatExpect';
import Steps from '../Steps';
import FAQ from '../FAQ';
import Connect from '../Connect';

const Main = () => {
    return (
        <div className = { Styles.container }>
            <div className = { Styles.wrapper }>
                <Header />
                <main className = { Styles.main }>
                    <Banner />
                    <VideoContent />
                    <About />
                    <WhatExpect />
                    <Steps />
                    <FAQ />
                    <Connect />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
