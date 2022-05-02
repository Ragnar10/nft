// Styles
import Styles from './styles.module.scss';
// Images
import opensea from '../../theme/assets/icons/opensea_logo.svg';
// Components
import Socials from '../Socials';


const Banner = () => {
    return (
        <section className = { Styles.banner }>
            <Socials
                classWrapper = { Styles.banner_socials }
                classList = { Styles.socials_list } />
            <div className = { Styles.container }>
                <div className = { Styles.banner_wrap }>
                    <h2 className = { Styles.caption }>{ 'TORNADO' }</h2>
                    <p className = { Styles.title }>{ 'EXPRESS CARD' }</p>
                    <p className = { Styles.info }>{ 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' }</p>
                    <div className = { Styles.btn_wrap }>
                        <button className = { Styles.btn }>{ 'Mint' }</button>
                        <button className = { Styles.btn_opensea }>
                            <img src = { opensea } alt = 'open sea icon' />
                        </button>
                    </div>
                </div>
            </div>
            <div className = { Styles.line_wrap }>
                <div className = { Styles.line_thin }>
                    <span>{ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' }</span>
                    <span>{ 'incididunt ut labore et dolore magna aliqua. ' }</span>
                    <span>{ 'Ut enim ad minim veniam, ' }</span>
                    <span>{ 'quis nostrud exercitation ' }</span>
                    <span>{ 'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }</span>
                </div>
                <div className = { Styles.line }>
                    <span>{ 'TORNADO EXPRESS CARD - ' }</span>
                    <span>{ 'Ron Bielecki ' }</span>
                    <span>{ '- Exclusive Membership - TORNADO EXPRESS CARD - ' }</span>
                    <span>{ 'Ron Bielecki ' }</span>
                    <span>{ '- Exclusive Membership - ' }</span>
                </div>
            </div>
        </section>
    );
};

export default Banner;
