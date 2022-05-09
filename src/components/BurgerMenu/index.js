// Localization
import { useTranslation } from 'react-i18next';
// Hooks
import { useToggle } from '../../hooks';
// Styles
import Styles from './styles.module.scss';
import logo from '../../theme/assets/icons/main_logo.png';
// Components
import Localization from '../Localization';

const BurgerMenu = () => {
    const [toggle, setToggle] = useToggle();
    const { t } = useTranslation();

    const dropdown = toggle ? Styles.burger_menu_open : Styles.burger_menu;

    document.body.style.overflow = toggle ? 'hidden' : null;

    return (
        <div className = { Styles.burger }>
            <div
                onClick = { () => setToggle(true) }
                className = { Styles.burger_icon }>
                <span />
                <span />
                <span />
            </div>
            <div className = { dropdown }>
                <div className = { Styles.menu_header }>
                    <div className = { Styles.header_logo }>
                        <img src = { logo } alt = 'logo' />
                    </div>
                    <button className = { Styles.header_btn }>{ 'Connect' }</button>
                    <div
                        onClick = { () => setToggle(false) }
                        className = { Styles.burger_icon_close } />
                </div>
                <ul>
                    <li>
                        <a
                            onClick = { () => setToggle(!toggle) }
                            href = { '#about' }>{ t('nav_about') }</a>
                    </li>
                    <li>
                        <a
                            onClick = { () => setToggle(!toggle) }
                            href = { '#benefits' }>{ t('nav_benefits') }</a>
                    </li>
                    <li>
                        <a
                            onClick = { () => setToggle(!toggle) }
                            href = { '#roadmap' }>{ t('nav_roadmap') }</a>
                    </li>
                    <li>
                        <a
                            onClick = { () => setToggle(!toggle) }
                            href = { '#faq' }>{ t('nav_faq') }</a>
                    </li>
                    <li>
                        <a
                            onClick = { () => setToggle(!toggle) }
                            href = { '#team' }>{ t('nav_team') }</a>
                    </li>
                </ul>
                <Localization />
            </div>
        </div>
    );
};

export default BurgerMenu;
