// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';
// Images
import photo1 from '../../theme/assets/images/about_img1.png';
import photo2 from '../../theme/assets/images/about_img2.png';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id = { 'about' } className = { Styles.about }>
            <div className = { Styles.container }>
                <div className = { Styles.photos }>
                    <div className = { Styles.photos_first }>
                        <img src = { photo1 } alt = 'photo' />
                        <span className = { Styles.first_logo_icon } />
                    </div>
                    <div className = { Styles.photos_second }>
                        <img src = { photo2 } alt = 'photo' />
                    </div>
                </div>
                <div className = { Styles.description }>
                    <h2 className = { Styles.description_caption }>
                        <span>{ 'Abouts' }</span>
                        <span>{ 'Ron Bielecki' }</span>
                    </h2>
                    <p className = { Styles.description_info_first }>
                        <span>{ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' }</span>
                        <span>{ 'incididunt ut labore et dolore magna ' }</span>
                        <span>{ 'aliqua. ' }</span>
                        <span>{ 'Ut enim ad minim veniam, ' }</span>
                        <span>{ 'quis nostrud exercitation ' }</span>
                        <span>{ 'ullamco laboris nisi ut aliquip ex ea commodo consequat.' }</span>
                    </p>
                    <p className = { Styles.description_info_second }>
                        <span>{ 'Duis aute irure dolor ' }</span>
                        <span>{ 'in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }</span>
                    </p>
                </div>
            </div>
            <div className = { Styles.line_wrap }>
                <div className = { Styles.line_thin }>
                    <div>
                        <span>{ 'TORNADO EXPRESS CARD - ' }</span>
                        <span>{ 'Ron Bielecki ' }</span>
                        <span>{ '- Exclusive Membership - TORNADO EXPRESS CARD - ' }</span>
                        <span>{ 'Ron Bielecki ' }</span>
                        <span>{ '- Exclusive Membership - ' }</span>
                        <span>{ 'TORNADO EXPRESS CARD - ' }</span>
                        <span>{ 'Ron Bielecki ' }</span>
                        <span>{ '- Exclusive Membership - TORNADO EXPRESS CARD - ' }</span>
                        <span>{ 'Ron Bielecki ' }</span>
                        <span>{ '- Exclusive Membership - ' }</span>
                    </div>
                </div>
            </div>
            <div className = { Styles.bg_texture } />
        </section>
    );
};

export default About;
