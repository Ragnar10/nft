// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';

const VideoContent = () => {
    const { t } = useTranslation();

    return (
        <section className = { Styles.video_content }>
            <div className = { Styles.container }>
                <h2 className = { Styles.caption }>{ 'Lorem Ipsum' }</h2>
                <p className = { Styles.info }>{ 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }</p>
                <div className = { Styles.video_wrap }>
                    <div className = { Styles.circles }>
                        <div />
                        <div />
                        <div />
                    </div>
                    <div className = { Styles.video_ratio } />
                    <iframe
                        className = { Styles.video }
                        src = 'https://www.youtube.com/embed/oMfMUfgjiLg'
                        allowFullScreen
                        title = 'tornado video' />
                </div>
            </div>
            <div className = { Styles.bg_texture } />
        </section>
    );
};

export default VideoContent;
