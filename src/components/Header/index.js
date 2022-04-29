// Styles
import Styles from './styles.module.scss';

//Images
import logo from '../../theme/assets/icons/main_logo.svg';

const Header = () => {
    return (
        <header className = { Styles.header }>
            <div className = { Styles.container }>
                <div className = { Styles.logo_wrap }>
                    <img src = { logo } alt = "logo"/>
                </div>
                <nav className = { Styles.nav_wrap }>
                    <ul className = { Styles.nav_list }>
                        <li className = { Styles.nav_item }>
                            <a className = { Styles.nav_link } href = { '#about' }>About</a>
                        </li>
                        <li className = { Styles.nav_item }>
                            <a className = { Styles.nav_link } href = { '#benefits' }>Benefits</a>
                        </li>
                        <li className = { Styles.nav_item }>
                            <a className = { Styles.nav_link } href = { '#roadmap' }>Roadmap</a>
                        </li>
                        <li className = { Styles.nav_item }>
                            <a className = { Styles.nav_link } href = { '#faq' }>FAQ</a>
                        </li>
                        <li className = { Styles.nav_item }>
                            <a className = { Styles.nav_link } href = { '#team' }>Team</a>
                        </li>
                    </ul>
                    <div className={Styles.btn_wrap}>
                        <button className = { Styles.btn }>Connect</button>
                    </div>
                    <div className={Styles.locale}>Eng</div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
