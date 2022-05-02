// Styles
import Styles from './styles.module.scss';
//Images
import openSea from '../../theme/assets/icons/opensea_logo.svg';


const Banner = () => {
    return (
        <section className = { Styles.banner }>
            <div className = { Styles.container }>
                <div className = { Styles.banner_wrap }>
                    <h2 className = { Styles.caption }>TORNADO</h2>
                    <p className = { Styles.title }>EXPRESS CARD</p>
                    <p className = { Styles.info }>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className = { Styles.btn_wrap }>
                        <button className = { Styles.btn }>Mint</button>
                        <button className = { Styles.btn_opensea }>
                            <img src = { openSea } alt="open sea icon"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className = {Styles.line}>
                <span className = { Styles.line_text }>
                    TORNADO EXPRESS CARD - Ron Bielecki - Exclusive Membership - TORNADO EXPRESS CARD - Ron Bielecki - Exclusive Membership -
                </span>
            </div>
        </section>
    );
};

export default Banner;
