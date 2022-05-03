// Hooks
import { useToggle } from '../../hooks';
// Styles
import Styles from './styles.module.scss';

const Question = ({ info }) => {
    const [toggle, setToggle] = useToggle();

    const arrowClass = !toggle ? Styles.title_arrow : Styles.title_arrow_open;
    const titleClass = !toggle ? Styles.title_text : Styles.title_text_open;
    const descrClass = !toggle ? Styles.question_descr : Styles.question_descr_open;

    return (
        <div className = { Styles.question }>
            <div onClick = { () => setToggle(!toggle) } className = { Styles.question_title }>
                <span className = { arrowClass } />
                <span className = { titleClass }>{ info.title }</span>
            </div>
            <p className = { descrClass }>{ info.descr }</p>
        </div>
    );
};

const questions = [
    {
        id:    1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id:    2,
        title: 'Tempor incididunt ut labore et dolore magna aliqua? ',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id:    3,
        title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea?',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id:    4,
        title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat? ',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id:    5,
        title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt?',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id:    6,
        title: 'Tempor incididunt ut labore et dolore magna aliqua? ',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

const FAQ = () => {
    return (
        <section className = { Styles.faq }>
            <div className = { Styles.container }>
                <div className = { Styles.content_wrapper }>
                    <div className = { Styles.description }>
                        <h2 className = { Styles.description_caption }>{ 'FAQ' }</h2>
                        <p className = { Styles.description_info }>
                            { 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
                        </p>
                    </div>
                    <div className = { Styles.questions_list }>
                        {
                            questions.map((item) => {
                                return <Question key = { item.id } info = { item } />;
                            })
                        }
                    </div>
                    <div className = { Styles.texture } />
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

export default FAQ;
