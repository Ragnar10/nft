// Localization
import { useTranslation } from 'react-i18next';
// Hooks
import { useToggle } from '../../hooks';
// Styles
import Styles from './styles.module.scss';
// Images
// import opensea from '../../theme/assets/icons/opensea_logo.svg';
// Components
import Socials from '../Socials';
import PopupMint from '../PopupMint';


const Banner = () => {
    const [toggle, setToggle] = useToggle();
    const { t } = useTranslation();

    const onToggle = () => {
        setToggle(true);
        window.scrollTo(0, 0);
    };

    return (
        <>
            { toggle && <PopupMint onSetToggle = { setToggle } /> }
            <section className = { Styles.banner }>
                <Socials
                    classWrapper = { Styles.banner_socials }
                    classList = { Styles.socials_list } />
                <div className = { Styles.container }>
                    <div className = { Styles.banner_wrap }>
                        <h2 className = { Styles.caption }>{ t('banner_title') }</h2>
                        <p className = { Styles.title }>{ 'TORNADO CARD' }</p>
                        <p className = { Styles.info }>{ t('banner_info') }</p>
                        <div className = { Styles.btn_wrap }>
                            <button id = 'minttogleoff'  className = { Styles.btn }>{ 'Mint' }</button>
                            <button
                                id = 'minttogleon' className = { Styles.btn }
                                onClick = { () => onToggle() }>{ 'Mint' }</button>
                            { /* <button className = { Styles.btn_opensea }> */ }
                            { /*    <img src = { opensea } alt = 'open sea icon' /> */ }
                            { /* </button> */ }
                            <div className = { Styles.btn_discord }>
                                <a
                                    href = { 'https://discord.gg/mpwvRC8hUm' } target = { '_blank' }
                                    rel = 'noreferrer' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = { Styles.line_wrap }>
                    <div className = { Styles.line_thin }>
                        <div>
                            <span>{ t('banner_ribbon_start') }</span>
                            <span>{ t('banner_ribbon_middle') }</span>
                            <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                            <span>{ t('banner_ribbon_middle') }</span>
                            <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                            <span>{ t('banner_ribbon_middle') }</span>
                            <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                            <span>{ t('banner_ribbon_middle') }</span>
                            <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                            <span>{ t('banner_ribbon_middle') }</span>
                            <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                            <span>{ t('banner_ribbon_middle') }</span>
                            <span>{ t('banner_ribbon_end') }</span>
                        </div>
                    </div>
                    <div className = { Styles.line }>
                        <div>
                            <span>{ t('banner_ribbon_start') }</span>
                            <span>{ t('banner_ribbon_middle') }</span>
                            <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                            <span>{ t('banner_ribbon_middle') }</span>
                            <span>{ `${t('banner_ribbon_end')} ${t('banner_ribbon_start')}` }</span>
                            <span>{ t('banner_ribbon_middle') }</span>
                            <span>{ t('banner_ribbon_end') }</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
