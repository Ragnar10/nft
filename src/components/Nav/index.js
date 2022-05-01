// Styles
import Styles from './styles.module.scss';

const Nav = () => {
    return (
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
        </nav>
    );
};

export default Nav;
