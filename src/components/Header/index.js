// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';
// Images
import logo from '../../theme/assets/icons/main_logo.svg';
// Components
import Nav from '../Nav';
import Localization from '../Localization';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className = { Styles.header }>
            <div className = { Styles.container }>
                <div className = { Styles.header_logo }>
                    <img src = { logo } alt = 'logo' />
                </div>
                <Nav />
                <button className = { Styles.btn }>Connect</button>
                <Localization />
            </div>
        </header>
    );
};

export default Header;
