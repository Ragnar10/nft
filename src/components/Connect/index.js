// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';
// Images
import logo from '../../theme/assets/images/connect_bg.svg';

const Connect = () => {
    const { t } = useTranslation();

    return (
        <section className = { Styles.connect }>
            <div className = { Styles.container }>
                <div className = { Styles.connect_wrap }>
                    <div>
                        <h2 className = { Styles.caption }>{ 'Connect' }</h2>
                        <h2 className = { Styles.title }>{ 'TORNADO EXPRESS CARD' }</h2>
                        <p className = { Styles.info }>{ 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' }</p>
                        <div className = { Styles.img_wrap }>
                            <img src = { logo } alt = 'image' />
                        </div>
                        <button className = { Styles.btn }>Connect</button>
                    </div>
                </div>
            </div>
            <div className = { Styles.bg_texture } />
        </section>
    );
};

export default Connect;
