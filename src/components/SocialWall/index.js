// Core
import { useEffect, useState } from 'react';
// Localization
import { useTranslation } from 'react-i18next';
// Instruments
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Styles
import Styles from './styles.module.scss';
// Images
import comment_avatar from '../../theme/assets/images/comment_avatar.jpeg';
// Components
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

const SocialSlider = ({ comments }) => {
    if (!comments.length) return null;

    const { width } = getComputedStyle(document.body);
    const slidesToShow = parseFloat(width) < 1333 ? 2 : 3;

    const settings = {
        dots:           false,
        infinite:       true,
        slidesToShow:   parseFloat(width) > 768 ? slidesToShow : 1,
        slidesToScroll: parseFloat(width) > 768 ? slidesToShow : 1,
        autoplay:       true,
        speed:          2000,
        autoplaySpeed:  10000,
        pauseOnHover:   true,
    };

    return (
        <Slider { ...settings }>
            {
                comments.map((item) => {
                    return (
                        <div key = { item.id } className = { Styles.comments_card }>
                            <div className = { Styles.card_caption }>
                                <div className = { Styles.caption_avatar }>
                                    <img src = { comment_avatar } alt = 'avatar image' />
                                </div>
                                <div className = { Styles.caption_text }>
                                    <span>{ item.name }</span>
                                    <span>{ `@${item.username}` }</span>
                                </div>
                            </div>
                            <div className = { Styles.card_img }>
                                <img src = { item.image } alt = 'social image' />
                            </div>
                            <p className = { Styles.card_descr }>{ item.text }</p>
                        </div>
                    );
                }).reverse()
            }
        </Slider>
    );
};

const SocialWall = () => {
    const { t } = useTranslation();
    const [comments, setComments] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://feedback.tornadocard.io/v1/feed/', {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((data) => {
                setLoader(true);
                if (data.status === 200) {
                    return data.json();
                }
                setLoader(false);
                setError(t('social_wall_error'));

                return null;
            })
            .then((data) => {
                if (data) {
                    setComments(data.results);
                    setLoader(false);
                }

                return null;
            })
            .catch(() => {
                setError('');
                setLoader(false);
                setError(t('social_wall_error'));
            });
    }, []);

    return (
        <section id = { 'social' } className = { Styles.social_wall }>
            <div className = { Styles.container }>
                <div className = { Styles.description }>
                    <h2 className = { Styles.description_caption }>{ 'Social wall' }</h2>
                    <p className = { Styles.description_info }>{ t('social_wall_info') }</p>
                </div>
                <div className = { Styles.comments }>
                    { loader && <Spinner /> }
                    { error && <ErrorMessage text = { error } /> }
                    { comments.length > 0 && <SocialSlider comments = { comments } /> }
                </div>
            </div>
            <div className = { Styles.bg_texture } />
            <div className = { Styles.bg_texture_left } />
        </section>
    );
};

export default SocialWall;
