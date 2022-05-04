// Instruments
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Styles
import Styles from './styles.module.scss';
// Images
import comment_avatar from '../../theme/assets/images/comment_avatar.svg';

const comments = [
    {
        id:      1,
        name:    'Brandwatch',
        company: 'CEO Company',
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
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
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
    },
    {
        id:      4,
        name:    'Brandwatch',
        company: 'CEO Company',
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
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
        descr:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
    },
];

const settings = {
    infinite:       true,
    speed:          500,
    slidesToShow:   1,
    slidesToScroll: 1,
};

const Testimonials = () => {
    return (
        <section className = { Styles.testimonials }>
            <div className = { Styles.container }>
                <div className = { Styles.comments }>
                    <h2 className = { Styles.comments_caption }>{ 'Testimonials' }</h2>
                    <Slider { ...settings }>
                        {
                            comments.map((item) => {
                                return (
                                    <div key = { item.id } className = { Styles.comments_card }>
                                        <p className = { Styles.card_descr }>{ `"${item.descr}"` }</p>
                                        <div className = { Styles.card_caption }>
                                            <div className = { Styles.caption_avatar }>
                                                <img src = { comment_avatar } alt = 'avatar image' />
                                            </div>
                                            <div className = { Styles.caption_text }>
                                                <span>{ item.name }</span>
                                                <span>{ item.company }</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </div>
            <div className = { Styles.bg_texture } />
        </section>
    );
};

export default Testimonials;
