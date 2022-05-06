// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';

const Nav = (props) => {
    const { t } = useTranslation();

    return (
        <nav className = { `${Styles.nav_wrap} ${props.class}` }>
            <ul className = { Styles.nav_list }>
                <li className = { Styles.nav_item }>
                    <a className = { Styles.nav_link } href = { '#about' }>{ t('nav_about') }</a>
                </li>
                <li className = { Styles.nav_item }>
                    <a className = { Styles.nav_link } href = { '#benefits' }>{ t('nav_benefits') }</a>
                </li>
                <li className = { Styles.nav_item }>
                    <a className = { Styles.nav_link } href = { '#roadmap' }>{ t('nav_roadmap') }</a>
                </li>
                <li className = { Styles.nav_item }>
                    <a className = { Styles.nav_link } href = { '#faq' }>{ t('nav_faq') }</a>
                </li>
                <li className = { Styles.nav_item }>
                    <a className = { Styles.nav_link } href = { '#team' }>{ t('nav_team') }</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
