// Styles
import Styles from './styles.module.scss';
// Images
import logo from '../../theme/assets/icons/main_logo.svg';
// Components
import Nav from '../Nav';
import Socials from '../Socials';

const Footer = () => {
    const { width } = getComputedStyle(document.body);
    const paddingRight = (parseFloat(width) - 1200) / 2;
    // const style = { width: 246 + paddingRight };

    return (
        <footer id = 'footer' className = { Styles.footer }>
            <div>
                <div className = { Styles.footer_logo }>
                    <img src = { logo } alt = 'logo' />
                </div>
                <Nav />
            </div>
            <Socials
                classWrapper = { Styles.footer_socials }
                classList = { Styles.socials_list }/>
        </footer>
    );
};

export default Footer;
