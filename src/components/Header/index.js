// Styles
import Styles from './styles.module.scss';
// Images
import logo from '../../theme/assets/icons/main_logo.svg';
// Components
import Nav from '../Nav';

const Header = () => {
    return (
        <header className = { Styles.header }>
            <div>
                <div className = { Styles.header_logo }>
                    <img src = { logo } alt = 'logo' />
                </div>
                <Nav />
                <button className = { Styles.btn }>Connect</button>
                <div>Eng</div>
            </div>
        </header>
    );
};

export default Header;
