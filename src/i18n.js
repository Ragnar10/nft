// Core
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Locales
import {
    aboutEn, aboutDe, bannerEn, bannerDe, connectEn, connectDe, faqEn, faqDe, navEn, navDe,
    popupMintEn, popupMintDe, socialWallEn, socialWallDe, stepsEn, stepsDe, videoEn, videoDe,
    whatExpectEn, whatExpectDe, companyInfoEn, companyInfoDe,
} from './components/locales';

const resources = {
    en: {
        translation: {
            ...aboutEn,
            ...bannerEn,
            ...connectEn,
            ...faqEn,
            ...navEn,
            ...popupMintEn,
            ...socialWallEn,
            ...stepsEn,
            ...videoEn,
            ...whatExpectEn,
            ...companyInfoEn,
        },
    },
    de: {
        translation: {
            ...aboutDe,
            ...bannerDe,
            ...connectDe,
            ...faqDe,
            ...navDe,
            ...popupMintDe,
            ...socialWallDe,
            ...stepsDe,
            ...videoDe,
            ...whatExpectDe,
            ...companyInfoDe,
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng:           'de',
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;
