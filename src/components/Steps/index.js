// Localization
import { useTranslation } from 'react-i18next';
// Styles
import Styles from './styles.module.scss';

const Step = ({ item }) => {
    return (
        <div className = { Styles.step_item }>
            <div className = { `${Styles.wrapper} ${item.classWrap}` }>
                <div className = { Styles.number }>{ item.number }</div>
                <div className = { Styles.step }>
                    <h3>{ item.title }</h3>
                </div>
                <div className = { Styles.border } />
            </div>
            <div className = { `${Styles.btn} ${item.classBtn}` }>
                { item.btnContent ? <span>{ item.btnContent }</span> : <a href = { item.link } /> }
            </div>
        </div>
    );
};

const steps = [
    {
        id: 1, number: '1', title: 'Create metamask wallet', classWrap: Styles.first_wrap, classBtn: Styles.btn_youtube, link: '#',
    },
    {
        id: 2, number: '2', title: 'Connect Wallet', classWrap: Styles.second_wrap, classBtn: Styles.btn_connect, btnContent: 'Connect',
    },
    {
        id: 3, number: '3', title: 'Buy NFT and Reap the reward', classWrap: Styles.third_wrap, classBtn: Styles.btn_mint, btnContent: 'Mint',
    },
    {
        id: 4, number: '4', title: 'Opensea collection', classWrap: Styles.fourth_wrap, classBtn: Styles.btn_openSea, link: '#',
    },
    {
        id: 5, number: '5', title: 'Get live support on discord', classWrap: Styles.fifth_wrap, classBtn: Styles.btn_discord, link: '#',
    },
];

const Steps = () => {
    const { t } = useTranslation();

    return (
        <section className = { Styles.steps }>
            <div className = { Styles.container }>
                <h2 className = { Styles.caption }>{ 'Step by step' }</h2>
                <p className = { Styles.info }>{ 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }</p>
                <div className = { Styles.steps_wrap }>
                    {
                        steps.map((item) => {
                            return <Step key = { item.id } item = { item } />;
                        })
                    }
                </div>
            </div>
            <div className = { Styles.bg_texture } />
            <div className = { Styles.bg_texture } />
            <div className = { Styles.bg_texture } />
        </section>
    );
};

export default Steps;
