// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';

const VideoContent = () => {
    const { t } = useTranslation();

    return (
        <section className = { Styles.video_content }>
            <div className = { Styles.container }>
                <h2 className = { Styles.caption }>{ t('video_content_title') }</h2>
                <div className = { Styles.video_wrap }>
                    <div className = { Styles.video_ratio } />
                    <iframe
                        className = { Styles.video }
                        src = { 'https://www.youtube.com/embed/PtoN30owMZQ' }
                        allowFullScreen
                        title = 'tornado video' />
                </div>
            </div>
            <div className = { Styles.bg_texture } />
        </section>
    );
};

export default VideoContent;
