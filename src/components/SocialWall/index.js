// Instruments
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Styles
import Styles from './styles.module.scss';
// Images
import comment_avatar from '../../theme/assets/images/comment_avatar.svg';
import comment_img from '../../theme/assets/images/comment_img.svg';

const comments = [
    {
        id:      1,
        name:    'Brandwatch',
        company: 'CEO Company',
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.',
    },
    {
        id:      2,
        name:    'Namesecondname',
        company: 'Ceo Company',
        descr:   'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. Onsectetur adipiscing elit',
    },
    {
        id:      3,
        name:    'Ron',
        company: 'CEO Company',
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.',
    },
    {
        id:      4,
        name:    'Brandwatch',
        company: 'CEO Company',
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.',
    },
    {
        id:      5,
        name:    'Namesecondname',
        company: 'Ceo Company',
        descr:   'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. Onsectetur adipiscing elit',
    },
    {
        id:      6,
        name:    'Ron',
        company: 'CEO Company',
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.',
    },
];

const settings = {
    dots:           true,
    infinite:       true,
    slidesToShow:   3,
    slidesToScroll: 3,
    autoplay:       true,
    speed:          2000,
    autoplaySpeed:  10000,
    pauseOnHover:   true,
};

const SocialWall = () => {
    return (
        <section className = { Styles.social_wall }>
            <div className = { Styles.container }>
                <div className = { Styles.description }>
                    <h2 className = { Styles.description_caption }>{ 'Social wall' }</h2>
                    <p className = { Styles.description_info }>
                        { 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
                    </p>
                </div>
                <div className = { Styles.comments }>
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
                                                <span>{ `@${item.name}` }</span>
                                            </div>
                                        </div>
                                        <div className = { Styles.card_img }>
                                            <img src = { comment_img } alt = 'social image' />
                                        </div>
                                        <p className = { Styles.card_descr }>{ item.descr }</p>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </div>
            <div className = { Styles.bg_texture } />
            <div className = { Styles.bg_texture_left } />
        </section>
    );
};

export default SocialWall;