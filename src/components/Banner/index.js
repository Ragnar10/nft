// Styles
import Styles from './styles.module.scss';
//Images
import openSea from '../../theme/assets/icons/opensea_logo.svg';
//Components
import Socials from "../Socials";


const Banner = () => {
    return (
        <section className = { Styles.banner }>
            <Socials
                classWrapper = { Styles.banner_socials }
                classList = { Styles.socials_list }
            />
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
            <div className = { Styles.line_wrap }>
                <div className = {Styles.thin_line}>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                </div>
                <div className = {Styles.line}>
                    <span>
                        TORNADO EXPRESS CARD - Ron Bielecki - Exclusive Membership - TORNADO EXPRESS CARD - Ron Bielecki - Exclusive Membership -
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Banner;
