// Core
import { useState } from 'react';
// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';

const Question = ({ info, openId, setOpenId }) => {
    const arrowClass = openId === info.id ? Styles.title_arrow_open : Styles.title_arrow;
    const titleClass = openId === info.id ? Styles.title_text_open : Styles.title_text;
    const descrClass = openId === info.id ? Styles.question_descr_open : Styles.question_descr;

    const onToggle = (id) => {
        if (id === openId) return setOpenId(0);

        setOpenId(id);
    };

    return (
        <div className = { Styles.question }>
            <div onClick = { () => onToggle(info.id) } className = { Styles.question_title }>
                <span className = { arrowClass } />
                <span className = { titleClass }>{ info.title }</span>
            </div>
            <p className = { descrClass }>{ info.descr }</p>
        </div>
    );
};

const FAQ = () => {
    const [openId, setOpenId] = useState(0);
    const { t } = useTranslation();

    const questions = [
        { id: 1, title: t('faq_question1'), descr: t('faq_answer1') },
        { id: 2, title: t('faq_question2'), descr: t('faq_answer2') },
        { id: 3, title: t('faq_question3'), descr: t('faq_answer3') },
        { id: 4, title: t('faq_question4'), descr: t('faq_answer4') },
    ];

    return (
        <section id = { 'faq' } className = { Styles.faq }>
            <div className = { Styles.container }>
                <div className = { Styles.content_wrapper }>
                    <div className = { Styles.description }>
                        <h2 className = { Styles.description_caption }>{ 'FAQ' }</h2>
                    </div>
                    <div className = { Styles.questions_list }>
                        {
                            questions.map((item) => {
                                return <Question
                                    key = { item.id }
                                    openId = { openId }
                                    setOpenId = { setOpenId }
                                    info = { item } />;
                            })
                        }
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
            </div>
            <div className = { Styles.bg_texture } />
        </section>
    );
};

export default FAQ;
