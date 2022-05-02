// Styles
import Styles from './styles.module.scss';

const VideoContent = () => {
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
                        src = 'https://www.youtube.com/watch?v=8CHvNUYUk3I'
                        allowFullScreen
                        title = 'tornado video' />
                </div>
            </div>
            <div className = { Styles.bg_texture } />
        </section>
    );
};

export default VideoContent;
