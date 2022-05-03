// Styles
import Styles from './styles.module.scss';
//Images
import logo from '../../theme/assets/images/connect_bg.svg';

const Connect = () => {
    return (
        <section className = { Styles.connect }>
            <div className = { Styles.container }>
                <div className = { Styles.img_wrap }>
                    <img src = { logo } alt = 'image' />
                </div>
                <div className = { Styles.connect_wrap }>
                    <div>
                        <h2 className = { Styles.caption }>{ 'Connect' }</h2>
                        <h2 className = { Styles.title }>{ 'TORNADO EXPRESS CARD' }</h2>
                        <p className = { Styles.info }>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className = { Styles.btn }>Connect</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
