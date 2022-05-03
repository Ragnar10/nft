// Styles
import Styles from './styles.module.scss';

const ListItem = ({ info }) => {
    return (
        <div className = { Styles.list_item }>
            <span>{ info.number }</span>
            <h3>{ info.title }</h3>
            <p>{ info.descr }</p>
        </div>
    );
};

const list = [
    {
        id: 1, number: '4', title: 'Major Events', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 2, number: '12', title: 'Surprise Parties', descr: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
        id: 3, number: '14', title: 'Exclusive Raffles', descr: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
        id: 4, number: '8', title: 'Exepteur sint est', descr: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    },
    {
        id: 5, number: '7', title: 'Lorem Ipsum', descr: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
];

const WhatExpect = () => {
    return (
        <section className = { Styles.what_expect }>
            <div className = { Styles.container }>
                <div className = { Styles.description }>
                    <div className = { Styles.description_caption }>
                        <h2 className = { Styles.caption }>{ 'What to expect' }</h2>
                        <p className = { Styles.info }>{ 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }</p>
                    </div>
                    <div className = { Styles.description_list }>
                        <div>
                            {
                                list.slice(0, 2).map((item) => {
                                    return <ListItem key = { item.id } info = { item } />;
                                })
                            }
                        </div>
                        <div>
                            {
                                list.slice(2).map((item) => {
                                    return <ListItem key = { item.id } info = { item } />;
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className = { Styles.images }>
                    <span className = { Styles.images_logo } />
                    <span className = { Styles.images_bottle } />
                    <span className = { Styles.images_spiral } />
                    <span className = { Styles.images_ball } />
                    <span className = { Styles.images_helicopter } />
                </div>
            </div>
        </section>
    );
};

export default WhatExpect;
